import { MythicRun, Player } from '../types'
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
}

export async function removeUnusedRuns(unusedRuns: MythicRun[]) {
  const batch = db.batch()

  unusedRuns.forEach((run) => {
    const runRef = db.collection('runs').doc(run.rid)
    batch.delete(runRef)
  })

  await batch.commit()
}
