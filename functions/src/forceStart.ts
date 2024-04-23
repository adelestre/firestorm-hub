import { daily } from './daily/daily'
import { weekly } from './weekly/weekly'

const main = async (task: string) => {
  switch (task) {
    case 'daily':
      daily()
      break
    case 'weekly':
      weekly()
      break
    default:
      console.error('Invalid task')
  }
}

main('daily')
