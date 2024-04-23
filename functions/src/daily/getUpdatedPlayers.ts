import { log } from 'firebase-functions/logger'
import { MythicRun, Player } from '../types'
import { getDungeon, getPlayer, getRun, scaleScore, updatefsio } from '../utils'

export function getUpdatedPlayers(
  runs: MythicRun[],
  newRuns: MythicRun[],
  players: Player[]
): { updatedPlayers: Player[]; playerCount: number } {
  let creationCounter = 0
  let updateCounter = 0

  const updatedPlayers: Player[] = []

  newRuns.forEach((run) => {
    const dungeon = getDungeon(run.dungeon)
    if (!run.score && dungeon)
      run.score = scaleScore(run.time, dungeon.timer, run.lvl)
    run.pids.forEach((pid, pidx) => {
      const player = getPlayer(players.concat(updatedPlayers), pid)

      if (!player) {
        updatedPlayers.push({
          pid: pid,
          name: run.pnames[pidx],
          pclass: run.pclasses[pidx],
          bruns: [run.rid],
          runCount: 1,
          fsio: run.score,
        })
        creationCounter++
      } else {
        // Update player name if it has changed
        if (player.name !== run.pnames[pidx]) player.name = run.pnames[pidx]

        player.runCount++

        player.bruns.forEach((pbrid) => {
          const cbrun = getRun(runs, pbrid)
          if (
            cbrun &&
            pbrid !== run.rid &&
            run.dungeon === cbrun.dungeon &&
            run.affixes[1] === cbrun.affixes[1] &&
            run.score >= cbrun.score
          ) {
            const index = player.bruns.indexOf(pbrid)
            if (index > -1) {
              player.bruns[index] = run.rid
              updatedPlayers.push(player)
            }
          } else {
            player.bruns.push(run.rid)
            updatedPlayers.push(player)
          }
        })
        // Sanity Check, remove duplicates
        player.bruns = [...new Set(player.bruns)]
      }
    })
  })
  updatedPlayers.forEach((player) => {
    updatefsio(player, runs.concat(newRuns))
    updateCounter++
  })

  players.sort((a, b) => b.fsio - a.fsio)
  players.forEach((player, idx) => {
    const previousRank = player.rank
    if (idx < 2000) {
      player.rank = idx + 1
    } else {
      player.rank = undefined
    }
    if (player.rank !== previousRank) updatedPlayers.push(player)
  })

  log(
    `created ${creationCounter} users and updated ${updateCounter - creationCounter}`
  )
  return {
    updatedPlayers: updatedPlayers,
    playerCount: players.length + creationCounter,
  }
}
