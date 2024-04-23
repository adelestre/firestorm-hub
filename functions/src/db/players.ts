import { Player } from '../types'
import { log } from 'firebase-functions/logger'
import { db } from './services/firebase'

export const updatePlayers = async (players: Player[]) => {
  try {
    const batch = db.batch()

    players.forEach((player) => {
      const playerRef = db.collection('players').doc(player.pid)
      batch.set(playerRef, player)
    })

    await batch.commit()
  } catch (error) {
    log('Error updating players:', error)
  } finally {
    log('Players updated')
  }
}

export const getPlayers = async (): Promise<Player[]> => {
  const runs = await db.collection('players').get()
  return runs.docs.map((doc) => doc.data() as Player)
}
