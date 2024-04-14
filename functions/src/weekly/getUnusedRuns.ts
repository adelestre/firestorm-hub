import { MythicRun, Player } from '../types'
import { getPlayer } from '../utils'

export function getUnusedRuns(
  runs: MythicRun[],
  players: Player[]
): MythicRun[] {
  const unusedRuns: MythicRun[] = []

  runs.forEach((run) => {
    const used = run.pids.every((pid) => {
      const player = getPlayer(players, pid)
      if (player && player.bruns.includes(run.rid)) return true
      return false
    })
    if (!used) unusedRuns.push(run)
  })

  return unusedRuns
}
