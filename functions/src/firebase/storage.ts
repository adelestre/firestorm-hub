import { storage } from './firebase'

const bucket = storage.bucket('firestorm-hub.appspot.com')

export async function getLastAffixes(): Promise<string[]> {
  const file = await bucket.file('weekAffixes.json').download()
  return JSON.parse(file.toString()).affixes
}

export async function updateWeekAffixes(affixes: string[]) {
  await bucket.file('weekAffixes.json').save(JSON.stringify({ affixes }))
}
