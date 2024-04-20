import { MythicRun, Player } from '../types'
import { logInfo } from '../utils'
import { db } from './firebase'

export const getRuns = async (): Promise<MythicRun[]> => {
  const runs = await db.collection('runs').get()
  return runs.docs.map((doc) => doc.data() as MythicRun)
}

export const getPlayers = async (): Promise<Player[]> => {
  const players = await db.collection('players').get()
  return players.docs.map((doc) => doc.data() as Player)
}

export const updateDb = async (
  newRuns: MythicRun[],
  updatedPlayers: Player[]
) => {
  logInfo('Updating database...')
  const batch = db.batch()

  newRuns.forEach((run) => {
    const runRef = db.collection('runs').doc(run.rid)
    batch.set(runRef, run)
  })

  updatedPlayers.forEach((player) => {
    const playerRef = db.collection('players').doc(player.pid)
    batch.set(playerRef, player)
  })

  await batch.commit()
  logInfo('Database updated')
}

export async function removeUnusedRuns(unusedRuns: string[]) {
  try {
    const batch = db.batch()

    unusedRuns.forEach((run) => {
      const runRef = db.collection('runs').doc(run)
      batch.delete(runRef)
    })

    await batch.commit()
  } catch (error) {
    console.error('Error removing unused runs:', error)
  } finally {
    console.log('Weekly update successful.')
  }
}
