import { MythicRun } from '../types'
import { db } from './services/firebase'

export const getRuns = async (): Promise<MythicRun[]> => {
  const runs = await db.collection('runs').get()
  return runs.docs.map((doc) => doc.data() as MythicRun)
}

export const updateRuns = async (runs: MythicRun[]) => {
  try {
    const batch = db.batch()

    runs.forEach((run) => {
      const runRef = db.collection('runs').doc(run.rid)
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
