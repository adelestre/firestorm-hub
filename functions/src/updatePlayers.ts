import { playersPath, runsPath } from './env'
import { MythicRun, Player } from './types'
import { getPlayer, getRun, scaleScore, updatefsio } from './utils'
import * as fs from 'fs'

export function updatePlayers(newRuns: MythicRun[]): Player[] {
  let creationCounter = 0
  let updateCounter = 0
  let currentRuns: MythicRun[] = []
  if (fs.existsSync(runsPath))
    currentRuns = JSON.parse(fs.readFileSync(runsPath, 'utf-8'))

  let currentPlayers: Player[] = []
  if (fs.existsSync(playersPath))
    currentPlayers = JSON.parse(fs.readFileSync(playersPath, 'utf-8'))

  const updatedPlayers: Player[] = []

  newRuns.forEach((run) => {
    if (!run.score) scaleScore(run.time, run.dungeon.timer, run.lvl)
    run.pids.forEach((pid, pidx) => {
      const player = getPlayer(currentPlayers.concat(updatedPlayers), pid)

      if (!player) {
        updatedPlayers.push({
          pid: pid,
          name: run.pnames[pidx],
          pclass: run.pclasses[pidx],
          bruns: [run.rid],
          fsio: run.score,
        })
        creationCounter++
      } else {
        // Update player name if it has changed
        if (player.name !== run.pnames[pidx]) player.name = run.pnames[pidx]

        player.bruns.forEach((pbrid) => {
          const cbrun = getRun(currentRuns, pbrid)
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
          }
        })
      }
    })
  })
  updatedPlayers.forEach((player) => {
    updatefsio(player, currentRuns.concat(newRuns))
    updateCounter++
  })

  console.log(
    'created ',
    creationCounter,
    ' updated ',
    updateCounter - creationCounter
  )
  return updatedPlayers
}
