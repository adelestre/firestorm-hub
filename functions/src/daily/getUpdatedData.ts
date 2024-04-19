import { Player } from '../types'

export function getUpdatedData(
  players: Player[],
  updatedPlayers: Player[]
): Player[] {
  updatedPlayers.forEach((updatedPlayer) => {
    const player = players.find((player) => player.pid === updatedPlayer.pid)
    if (!player) {
      players.push(updatedPlayer)
    } else {
      player.name = updatedPlayer.name
      player.runCount = updatedPlayer.runCount
      player.bruns = updatedPlayer.bruns
      player.fsio = updatedPlayer.fsio
    }
  })
  return players
}
