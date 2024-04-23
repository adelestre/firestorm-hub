import { MythicRun, Player } from '../types'
import { log } from 'firebase-functions/logger'
import { updateRuns } from './runs'
import { updatePlayers } from './players'

export const updateDb = async (
  newRuns: MythicRun[],
  updatedPlayers: Player[]
) => {
  log('Updating database...')

  updateRuns(newRuns)
  updatePlayers(updatedPlayers)

  log('Database updated')
}
