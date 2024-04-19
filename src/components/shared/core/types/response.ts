import { Player } from './leaderboard'

export type PaginateResponse = {
  players: Player[]
  count: number
}
