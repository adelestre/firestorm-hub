import dungeons from '../dungeons/dungeonsS1.json'
import { scaleScore } from '../utils'
import { log } from 'firebase-functions/logger'
import { Dungeon, MythicRun } from '../types'
import { ElementHandle, Page } from 'puppeteer'

export async function fetchNewRuns(
  page: Page,
  runs: MythicRun[],
  affixes: string[]
): Promise<MythicRun[]> {
  log('Fetching runs...')
  const newRuns: MythicRun[] = []
  for (const dungeon of dungeons) {
    let counter = 0
    if (dungeon.id !== dungeons[0].id) {
      await goToNextDungeon(page, dungeon)
    }
    const runsTable = await page.waitForSelector('#challenge-results tbody')
    await page.waitForSelector('#challenge-results tbody tr')
    const runsTbody = await runsTable?.$$('tr')
    if (!runsTbody) {
      throw new Error('Could not find any runs')
    }
    for (const run of runsTbody) {
      counter += await ParseRun(page, run, dungeon, runs, newRuns, affixes)
    }
    log(`${dungeon['abbr']}, ${counter} new runs added.`)
  }
  page.close()
  return newRuns
}

async function goToNextDungeon(page: Page, dungeon: Dungeon) {
  const controlSelector = '#pve_carousel > a.right.carousel-control'
  await page.waitForSelector(controlSelector)
  page.click(controlSelector)
  const dungSelector = `#pve_carousel > div > div.item.active > div.img_slider.dungeon_${dungeon['id']} > img`
  await page.waitForSelector(dungSelector)
  await page.click(dungSelector)
}

async function ParseRun(
  page: Page,
  run: ElementHandle<HTMLTableRowElement>,
  dungeon: Dungeon,
  runs: MythicRun[],
  newRuns: MythicRun[],
  affixes: string[]
): Promise<0 | 1> {
  const data = await run.$$('td')
  const timestamp = parseInt(
    (await run.evaluate((el) => el.getAttribute('scrap-timestamp'))) ?? '0'
  )

  const playersData = await data[3].$$('a[href]')
  const pids: string[] = []
  const pnames = []
  const pclasses = []
  for (const player of playersData) {
    const match = RegExp(/[^/]+$/).exec(
      (await player.getProperty('href')).toString()
    )
    if (match) {
      pids.push(match[0])
    } else {
      throw new Error(
        'Could not find player id from href' +
          (await player.getProperty('href')).toString()
      )
    }
    const playerName = await page.evaluate((el) => el.textContent, player)
    if (!playerName) throw new Error('Could not find player name')
    pnames.push(playerName.trim())
    const playerClass = await player.evaluate(
      (el) => el.parentElement?.className
    )
    if (playerClass) {
      pclasses.push(playerClass.slice(6))
    } else {
      throw new Error('Could not find player class')
    }
  }

  const timeParts = (await page.evaluate((el) => el.textContent, data[2]))
    ?.trim()
    .split(':')
    .reverse()
  if (!timeParts) throw new Error('Could not find run time')
  const time = timeParts
    .map((t, i) => parseInt(t) * Math.pow(60, i))
    .reduce((a, b) => a + b, 0)

  const lvlText = await page.evaluate((el) => el.textContent, data[1])
  if (!lvlText) throw new Error('Could not find run level')
  const lvl = parseInt(lvlText.trim())
  const score = Math.round(scaleScore(time, dungeon['timer'], lvl) * 100) / 100
  const rid =
    dungeon['id'].substring(5, 8) +
    lvl.toString().padStart(2, '0') +
    timestamp.toString() +
    pids[0]

  if (!runs.some((run) => run.rid === rid)) {
    newRuns.push({
      rid: rid,
      pids: pids,
      pnames: pnames,
      dungeon: dungeon.id,
      lvl: lvl,
      time: time,
      score: score,
      timestamp: timestamp,
      pclasses: pclasses,
      affixes: affixes,
    })
    return 1
  }
  return 0
}
