import { MythicRun, Player, PlayerRunsResponse } from '../types'
import { db } from './services/firebase'

export const getRuns = async (): Promise<MythicRun[]> => {
  const runs = await db.collection('runs_2').get()
  return runs.docs.map((doc) => doc.data() as MythicRun)
}

export const updateRuns = async (runs: MythicRun[]) => {
  try {
    const batch = db.batch()

    runs.forEach((run) => {
      const runRef = db.collection('runs_2').doc(run.rid)
      batch.set(runRef, run)
    })

    await batch.commit()
  } catch (error) {
    console.error('Error updating runs:', error)
  }
}

export async function removeUnusedRuns(unusedRuns: string[]) {
  try {
    const batch = db.batch()

    unusedRuns.forEach((run) => {
      const runRef = db.collection('runs_2').doc(run)
      batch.delete(runRef)
    })

    await batch.commit()
  } catch (error) {
    console.error('Error removing unused runs:', error)
  } finally {
    console.log('Weekly update successful.')
  }
}

export async function getPlayerRuns(
  playerId: string,
  season: string
): Promise<PlayerRunsResponse> {
  const RunCollectionName = season === '1' ? 'runs' : 'runs_' + season
  const PlayerCollectionName = season === '1' ? 'players' : 'players_' + season
  const player = (await (
    await db.collection(PlayerCollectionName).doc(playerId).get()
  ).data()) as Player
  if (!player) return { runs: [] }
  const runs = []
  for (const run of player.bruns) {
    runs.push(
      (
        await db.collection(RunCollectionName).doc(run).get()
      ).data() as MythicRun
    )
  }
  return { runs: runs }
}
