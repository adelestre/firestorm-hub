export type MythicRun = {
  rid: string
  pids: number[]
  pnames: string[]
  dungeon: Dungeon
  lvl: number
  time: number
  score: number
  timestamp: number
  pclasses: string[]
  affixes: string[]
}

export type Dungeon = {
  abbr: string
  id: string
  name: string
  timer: number[]
}
