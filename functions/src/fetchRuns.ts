import { By } from 'selenium-webdriver'
import { Driver } from 'selenium-webdriver/chrome'
import dungeons from './dungeons.json'
import { scaleScore } from './utils'
import { MythicRun } from './types'
import * as fs from 'fs'

export async function writeUpdatesToFile() {
  console.log('Fetching runs...')
  const currentRuns: MythicRun[] = JSON.parse(
    fs.readFileSync('./src/runs.json', 'utf-8')
  )

  const browser = Driver.createSession()
  await browser.get('https://firestorm-servers.com/en/challenge/index/11')
  await browser.sleep(5000)
  const affixElements = await browser.findElements(
    By.css('#challenge-content > div > a')
  )
  const affixes = []
  for (const affix of affixElements) {
    affixes.push((await affix.getAttribute('href')).slice(28))
  }

  for (const dungeon of dungeons) {
    let counter = 0
    if (dungeon.id !== dungeons[0].id) {
      await browser
        .findElement(By.css('#pve_carousel > a.right.carousel-control'))
        .click()
      await browser.sleep(2000)
      const dungSelector = `#pve_carousel > div > div.item.active > div.img_slider.dungeon_${dungeon['id']} > img`
      await browser.findElement(By.css(dungSelector)).click()
    }
    await browser.sleep(1000)
    const runsTable = await browser.findElement(By.id('challenge-results'))
    const runsTbody = await runsTable
      .findElement(By.css('tbody'))
      .findElements(By.css('tr'))
    for (const run of runsTbody) {
      const data = await run.findElements(By.css('td'))
      const timestamp = parseInt(await run.getAttribute('scrap-timestamp'))

      const playersData = await data[3].findElements(By.css('a[href]'))
      const pids: number[] = []
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
      }
      const pnames = []
      const pclasses = []
      for (const player of playersData) {
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

      let score = scaleScore(time, dungeon['timer'], lvl)
      score = Math.round(score * 100) / 100

      const rid =
        dungeon['id'].substring(5, 8) +
        lvl.toString().padStart(2, '0') +
        timestamp.toString() +
        pids[0]

      if (currentRuns.length > 0) {
        for (let idx = 0; idx < currentRuns.length; idx++) {
          const run1 = currentRuns[idx]

          if (run1.pclasses === undefined || run1.pclasses === null) {
            run1.pclasses = [
              'noclass',
              'noclass',
              'noclass',
              'noclass',
              'noclass',
            ]
          }

          // Sanity Check
          if (
            timestamp === run1.timestamp &&
            pids[0] === run1.pids[0] &&
            dungeon['id'] !== run1.dungeon['id']
          ) {
            console.error('Anomaly detected exiting...')
            process.exit(1)
          }

          if (rid === run1.rid) {
            run1.pids = pids
            run1.pnames = pnames
            break
          } else if (idx === currentRuns.length - 1) {
            currentRuns.push({
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
            counter += 1
            break
          }
        }
      } else {
        counter += 1
        currentRuns.push({
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
      }
    }
    console.log(`${dungeon['abbr']}, ${counter} new runs added.`)
    // write to file in JSON format

    fs.writeFileSync('./src/runs.json', JSON.stringify(currentRuns))
  }
  browser.close()
}
