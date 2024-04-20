import { daily } from './daily/daily'
import { getPlayers, getRuns } from './firebase/firestore'
import { weekly } from './weekly/weekly'

const runWeekly = async () => {
  const runs = await getRuns()
  const players = await getPlayers()
  weekly(runs, players)
}

const main = async (task: string) => {
  switch (task) {
    case 'daily':
      daily()
      break
    case 'weekly':
      runWeekly()
      break
    default:
      console.error('Invalid task')
  }
}

main('daily')
