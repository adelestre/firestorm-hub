import { getPlayers, getRuns, updateDb } from '../firebase/firestore'
import { getUpdatedPlayers } from './getUpdatePlayers'
import { fetchAffixes } from './fetchAffixes'
import { getLastAffixes, updateWeekAffixes } from '../firebase/storage'
import { weeklyUpdate } from '../weekly/weekly'
import { fetchNewRuns } from './fetchNewRuns'
import { logInfo } from '../utils'
import puppeteer from 'puppeteer'

export async function daily() {
  const browser = await puppeteer.launch({ headless: 'shell' })
  const page = await browser.newPage()
  await page.goto('https://firestorm-servers.com/en/challenge/index/11')
  await page.waitForNetworkIdle()

  const affixes = await fetchAffixes(page)
  const runs = await getRuns()
  const players = await getPlayers()
  const lastAffixes = await getLastAffixes()

  const sameAffixes = JSON.stringify(affixes) === JSON.stringify(lastAffixes)

  if (!sameAffixes) {
    await updateWeekAffixes(affixes)
    await weeklyUpdate(runs, players)
    logInfo('Skipping daily update due to weekly update')
  } else {
    logInfo('Starting daily update...')
    const newRuns = await fetchNewRuns(page, runs, affixes)
    const updatedPlayers = getUpdatedPlayers(runs, newRuns, players)
    await updateDb(newRuns, updatedPlayers)
    logInfo('Daily update completed')
  }
  await browser.close()
}
