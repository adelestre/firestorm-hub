import { MythicRun, Player } from '../types'

export function getUnusedRuns(runs: MythicRun[], players: Player[]): string[] {
  const usedRuns: string[] = []

  players.forEach((player) => {
    player.bruns.forEach((run) => {
      if (!usedRuns.find((r) => r === run)) {
        usedRuns.push(run)
      }
    })
  })

  const unusedRuns = runs
    .map((run) => run.rid)
    .filter((run) => !usedRuns.find((r) => r === run))

  console.log('Unused runs:', unusedRuns.length + '/' + runs.length)

  return unusedRuns
}
