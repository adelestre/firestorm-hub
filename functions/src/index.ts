import { fetchNewRuns } from './fetchNewRuns'
import { updatePlayers } from './updatePlayers'
import { runsPath, playersPath } from './env'
import * as fs from 'fs'

async function daily() {
  const newRuns = await fetchNewRuns()
  const updatedPlayers = updatePlayers(newRuns)

  fs.writeFileSync(runsPath, JSON.stringify(newRuns, null, 2))
  fs.writeFileSync(playersPath, JSON.stringify(updatedPlayers, null, 2))

  console.log('Daily update completed')
}

daily()
