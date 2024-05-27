import { MythicRun, PaginateResponse, Player } from '../types'
import { storage } from './services/firebase'
import { log } from 'firebase-functions/logger'
import { getPagination } from '../api/paginate'
import { mergePlayersAndCount } from '../utils'

const bucket = storage.bucket('firestorm-hub.appspot.com')

export async function getLastAffixes(): Promise<string[]> {
  return ((await getFile('season2/weekAffixes.json')) as { affixes: string[] })
    .affixes
}

export function updateWeekAffixes(affixes: string[]): Promise<void> {
  return saveFile('season2/weekAffixes.json', { affixes })
}

export async function getPlayerCount(season: string): Promise<number> {
  return (
    (await getFile('season' + season + '/playerCount.json')) as {
      count: number
    }
  ).count
}

export async function updatePlayerCount(count: number): Promise<void> {
  return saveFile('season2/playerCount.json', { count })
}

export async function getFirstPage(season: string): Promise<PaginateResponse> {
  return getFile(
    'season' + season + '/firstPage.json'
  ) as Promise<PaginateResponse>
}

export function updateFirstPage(response: PaginateResponse): Promise<void> {
  return saveFile(
    'season2/firstPage.json',
    mergePlayersAndCount(response.players, response.count)
  )
}

export async function backUpDB(runs: MythicRun[], players: Player[]) {
  const date = new Date()
  const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
  await saveFile('backup/players/' + dateString + '.json', players)
  await saveFile('backup/runs/' + dateString + '.json', runs)
}

export async function updateData(playerCount: number): Promise<void> {
  const data = await getPagination(
    {
      limit: 50,
      season: '2',
      order: undefined,
      lastElement: undefined,
      filterName: undefined,
      filterClass: undefined,
      filterRole: undefined,
    },
    true
  )
  if (!data) throw new Error('No data returned')
  updateFirstPage(data)
  log('Updated first page')
  updatePlayerCount(playerCount)
  log('Updated player count')
}

async function saveFile(file: string, data: unknown): Promise<void> {
  if (await bucket.file(file).exists()) {
    await bucket.file(file).save(JSON.stringify(data))
  } else {
    await bucket.upload(JSON.stringify(data), {
      destination: file,
    })
  }
}

async function getFile(file: string): Promise<unknown> {
  if (await bucket.file(file).exists()) {
    return JSON.parse((await bucket.file(file).download()).toString())
  } else {
    return null
  }
}
