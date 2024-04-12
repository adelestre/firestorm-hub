import dungeons from './dungeons.json'
import { MythicRun, Player } from './types'

export function scaleScore(
  time: number,
  dungTimers: number[],
  lvl: number
): number {
  const maxSoftDepleteTime = dungTimers[0] * 2.5

  const softDepleteStartScore = keyLevelToScore(lvl - 1)
  const softDeplete125 = lvl - 2 < 0 ? 0.01 : keyLevelToScore(lvl - 2)
  const softDeplete150 = lvl - 3 < 0 ? 0.01 : keyLevelToScore(lvl - 3)
  const softDeplete200 = lvl - 4 < 0 ? 0.01 : keyLevelToScore(lvl - 4)
  const softDeplete250 = lvl - 5 < 0 ? 0.01 : keyLevelToScore(lvl - 5)

  const timedScore = keyLevelToScore(lvl)
  const upScore = keyLevelToScore(lvl + 1)

  let score: number

  if (time >= maxSoftDepleteTime) {
    score = softDeplete250
  } else if (time >= dungTimers[0] * 2) {
    score =
      ((time - dungTimers[0] * 2.5) / (dungTimers[0] * 0.5)) *
        (softDeplete250 - softDeplete200) +
      softDeplete250
  } else if (time >= dungTimers[0] * 1.5) {
    score =
      ((time - dungTimers[0] * 2) / (dungTimers[0] * 0.5)) *
        (softDeplete200 - softDeplete150) +
      softDeplete200
  } else if (time >= dungTimers[0] * 1.25) {
    score =
      ((time - dungTimers[0] * 1.5) / (dungTimers[0] * 0.25)) *
        (softDeplete150 - softDeplete125) +
      softDeplete150
  } else if (time > dungTimers[0]) {
    score =
      ((time - dungTimers[0] * 1.25) / (dungTimers[0] * 0.25)) *
        (softDeplete125 - softDepleteStartScore) +
      softDeplete125
  } else {
    score = (time / dungTimers[0]) * (timedScore - upScore) + upScore
  }

  score = Math.round(score * 100) / 100
  return score
}

function keyLevelToScore(lvl: number): number {
  const keylvltoscore = [
    0, 0, 40, 45, 50, 55, 60, 75, 80, 85, 90, 97, 104, 111, 128, 135, 142, 149,
    156, 163, 170, 177, 184, 191, 198, 205, 212, 219, 226, 233, 240,
  ]
  return keylvltoscore[lvl]
}

export function getPlayer(players: Player[], pid: number): Player | undefined {
  return players.find((player) => player.pid === pid)
}

export function getRun(runs: MythicRun[], rid: string): MythicRun | undefined {
  return runs.find((run) => run.rid === rid)
}

export function updatefsio(player: Player, currentRuns: MythicRun[]) {
  let newio = 0
  const runs = player.bruns
    .map((run) => getRun(currentRuns, run))
    .filter((run) => run !== undefined) as MythicRun[]
  dungeons.forEach((dungeon) => {
    const tmp = runs
      .filter((run) => run.dungeon.id === dungeon.id)
      .map((run) => run.score)
    tmp.sort((a, b) => b - a)
    if (tmp.length > 0) newio += tmp[0] * 1.5
    if (tmp.length > 1) newio += tmp[1] * 0.5
  })

  player.fsio = newio
  player.fsio = Math.round(player.fsio * 100) / 100
}
