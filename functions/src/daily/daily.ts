import { getRuns } from '../db/runs'
import { getUpdatedPlayers } from './getUpdatedPlayers'
import { fetchAffixes } from './fetchAffixes'
import { weekly } from '../weekly/weekly'
import { fetchNewRuns } from './fetchNewRuns'
import { log } from 'firebase-functions/logger'
import puppeteer from 'puppeteer'
import { getLastAffixes, updateData, updateWeekAffixes } from '../db/storage'
import { getPlayers } from '../db/players'
import { updateDb } from '../db/db'

export async function daily() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  await page.goto('https://firestorm-servers.com/en/challenge/index/11')
  await page.waitForNetworkIdle()

  const affixes = await fetchAffixes(page)
  const lastAffixes = await getLastAffixes()
  const sameAffixes = JSON.stringify(affixes) === JSON.stringify(lastAffixes)

  if (!sameAffixes) {
    updateWeekAffixes(affixes)
    await weekly()
    log('Skipping daily update due to weekly update')
  } else {
    log('Starting daily update...')
    const runs = await getRuns()
    const players = await getPlayers()
    const newRuns = await fetchNewRuns(page, runs, affixes)
    const { updatedPlayers, playerCount } = getUpdatedPlayers(
      runs,
      newRuns,
      players
    )
    await updateDb(newRuns, updatedPlayers)
    await updateData(playerCount)
    log('Daily update completed')
  }
  await browser.close()
}
