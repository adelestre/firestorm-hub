import { getRuns, removeUnusedRuns } from '../db/runs'
import { log } from 'firebase-functions/logger'
import { getUnusedRuns } from './getUnusedRuns'
import { getPlayers } from '../db/players'
import { backUpDB } from '../db/storage'

export async function weekly() {
  log('Starting weekly update...')
  const runs = await getRuns()
  const players = await getPlayers()
  const unusedRuns = getUnusedRuns(runs, players)
  await removeUnusedRuns(unusedRuns)
  backUpDB(runs, players)
}
