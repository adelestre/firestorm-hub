import { By, WebElement } from 'selenium-webdriver'
import { Driver } from 'selenium-webdriver/chrome'
import dungeons from './dungeons.json'
import { scaleScore } from './utils'
import { Dungeon, MythicRun } from './types'
import * as fs from 'fs'
import { runsPath } from './env'

export async function fetchNewRuns(): Promise<MythicRun[]> {
  console.log('Fetching runs...')
  let currentRuns: MythicRun[] = []
  if (fs.existsSync(runsPath))
    currentRuns = JSON.parse(fs.readFileSync(runsPath, 'utf-8'))
  else console.log('No stored runs found')
  const newRuns: MythicRun[] = []
  const browser = Driver.createSession()
  await browser.get('https://firestorm-servers.com/en/challenge/index/11')
  await browser.sleep(2000)
  const affixes = await parseAffixes(browser)

  for (const dungeon of dungeons) {
    let counter = 0
    if (dungeon.id !== dungeons[0].id) {
      await goToNextDungeon(browser, dungeon)
    }
    await browser.sleep(1000)
    const runsTable = await browser.findElement(By.id('challenge-results'))
    const runsTbody = await runsTable
      .findElement(By.css('tbody'))
      .findElements(By.css('tr'))
    for (const run of runsTbody) {
      counter += await ParseRun(run, dungeon, currentRuns, newRuns, affixes)
    }
    console.log(`${dungeon['abbr']}, ${counter} new runs added.`)
  }
  browser.close()
  return newRuns
}

async function parseAffixes(browser: Driver): Promise<string[]> {
  const affixElements = await browser.findElements(
    By.css('#challenge-content > div > a')
  )
  const affixes = []
  for (const affix of affixElements) {
    affixes.push((await affix.getAttribute('href')).slice(28))
  }
  return affixes
}

async function goToNextDungeon(browser: Driver, dungeon: Dungeon) {
  await browser
    .findElement(By.css('#pve_carousel > a.right.carousel-control'))
    .click()
  await browser.sleep(1000)
  const dungSelector = `#pve_carousel > div > div.item.active > div.img_slider.dungeon_${dungeon['id']} > img`
  await browser.findElement(By.css(dungSelector)).click()
  await browser.sleep(1000)
}

async function ParseRun(
  run: WebElement,
  dungeon: Dungeon,
  currentRuns: MythicRun[],
  newRuns: MythicRun[],
  affixes: string[]
): Promise<0 | 1> {
  const data = await run.findElements(By.css('td'))
  const timestamp = parseInt(await run.getAttribute('scrap-timestamp'))

  const playersData = await data[3].findElements(By.css('a[href]'))
  const pids: number[] = []
  const pnames = []
  const pclasses = []
  for (const player of playersData) {
    const match = RegExp(/[^/]+$/).exec(await player.getAttribute('href'))
    if (match) {
      pids.push(parseInt(match[0]))
    } else {
      throw new Error(
        'Could not find player id from href' +
          (await player.getAttribute('href'))
      )
    }
    const playerName = await player.getText()
    pnames.push(playerName.trim())
    const playerClass = await player
      .findElement(By.xpath('..'))
      .getAttribute('class')
    pclasses.push(playerClass.slice(6))
  }

  const timeParts = (await data[2].getText()).trim().split(':').reverse()
  const time = timeParts
    .map((t, i) => parseInt(t) * Math.pow(60, i))
    .reduce((a, b) => a + b, 0)

  const lvl = parseInt((await data[1].getText()).trim())
  const score = Math.round(scaleScore(time, dungeon['timer'], lvl) * 100) / 100
  const rid =
    dungeon['id'].substring(5, 8) +
    lvl.toString().padStart(2, '0') +
    timestamp.toString() +
    pids[0]

  if (!currentRuns.some((run) => run.rid === rid)) {
    newRuns.push({
      rid: rid,
      pids: pids,
      pnames: pnames,
      dungeon: dungeon,
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
