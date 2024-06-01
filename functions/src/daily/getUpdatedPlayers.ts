import { log } from 'firebase-functions/logger'
import { MythicRun, Player, Role } from '../types'
import { getDungeon, getPlayer, getRun, scaleScore, updatefsio } from '../utils'

export function getUpdatedPlayers(
  runs: MythicRun[],
  newRuns: MythicRun[],
  players: Player[]
): { updatedPlayers: Player[]; playerCount: number } {
  let creationCounter = 0

  const updatedPlayers: Player[] = []

  const addNewPlayer = (player: Player) => {
    updatedPlayers.push(player)
    players.push(player)
    creationCounter++
  }

  const updatePlayer = (player: Player) => {
    const p = players.find((p) => p.pid === player.pid)
    if (!p) return
    const idx = players.indexOf(p)
    players[idx] = player
    const updatedPlayer = updatedPlayers.find((up) => up.pid === player.pid)
    if (!updatedPlayer) updatedPlayers.push(player)
    else {
      const upidx = updatedPlayers.indexOf(updatedPlayer)
      updatedPlayers[upidx] = player
    }
  }

  newRuns.forEach((run) => {
    const dungeon = getDungeon(run.dungeon)
    if (!run.score && dungeon)
      run.score = scaleScore(run.time, dungeon.timer, run.lvl)
    run.pids.forEach((pid, pidx) => {
      const player = getPlayer(players, pid)
      const role = getRole(pidx)
      if (!player) {
        addNewPlayer({
          pid: pid,
          name: run.pnames[pidx],
          pclass: run.pclasses[pidx],
          bruns: [run.rid],
          runCount: 1,
          fsio: run.score,
          roles: [role],
          rank: null,
        })
      } else {
        // Update player name if it has changed
        if (player.name !== run.pnames[pidx]) player.name = run.pnames[pidx]

        player.runCount++

        let found = false
        const roles: Role[] = []
        player.bruns.forEach((pbrid, pbidx) => {
          const cbrun = getRun(runs.concat(newRuns), pbrid)
          if (!cbrun) {
            console.log('could not find run', pbrid)
            return
          }
          const brole = getRole(cbrun.pids.indexOf(pid))
          if (!roles.includes(brole)) roles.push(brole)
          if (
            run.dungeon === cbrun.dungeon &&
            run.affixes[0] === cbrun.affixes[0]
          ) {
            found = true
            if (run.score >= cbrun.score) {
              player.bruns[pbidx] = run.rid
            }
          }
        })
        if (!found) {
          player.bruns.push(run.rid)
        }
        // Make sure there are no duplicates
        player.bruns.filter((value, index, self) => {
          return self.indexOf(value) === index
        })

        if (roles !== player.roles) {
          player.roles = roles
        }

        updatePlayer(player)
      }
    })
  })
  updatedPlayers.forEach((player) => {
    updatefsio(player, runs.concat(newRuns))
  })

  players.sort((a, b) => b.fsio - a.fsio)
  players.forEach((player, idx) => {
    const previousRank = player.rank
    if (idx < 2000) {
      player.rank = idx + 1
    } else {
      player.rank = null
    }
    if (previousRank !== player.rank) {
      updatePlayer(player)
    }
  })

  log(
    `created ${creationCounter} users and updated ${updatedPlayers.length - creationCounter}`
  )
  return {
    updatedPlayers: updatedPlayers,
    playerCount: players.length + creationCounter,
  }
}

function getRole(pidx: number): Role {
  if (pidx === 0) return 'tank'
  if (pidx === 1) return 'healer'
  return 'dps'
}
