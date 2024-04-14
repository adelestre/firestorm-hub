import { Page } from 'puppeteer'

export async function fetchAffixes(page: Page): Promise<string[]> {
  const affixElements = await page.$$('#challenge-content > div > a')
  const affixes = []
  for (const affix of affixElements) {
    affixes.push((await affix.getProperty('href')).toString().slice(37))
  }
  return affixes
}
