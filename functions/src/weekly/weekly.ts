import { removeUnusedRuns } from '../firebase/firestore'
import { MythicRun, Player } from '../types'
import { logInfo } from '../utils'
import { getUnusedRuns } from './getUnusedRuns'

export async function weeklyUpdate(runs: MythicRun[], players: Player[]) {
  logInfo('Starting weekly update...')
  const unusedRuns = getUnusedRuns(runs, players)
  await removeUnusedRuns(unusedRuns)
}
