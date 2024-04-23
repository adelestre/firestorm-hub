import { DocumentData } from 'firebase-admin/firestore'

export type MythicRun = {
  rid: string
  pids: string[]
  pnames: string[]
  dungeon: string
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

export type Player = {
  pid: string
  name: string
  pclass: string
  bruns: string[]
  runCount: number
  fsio: number
  rank?: number
}

export type PaginateParameters = {
  limit: number
  order: 'asc' | 'desc' | undefined
  lastElement: { fsio: number; pid: string } | undefined
  filterName: string | undefined
  filterClass: string | undefined
}

export type PaginateResponse = {
  players: DocumentData[]
  count: number
}
