export function transformStringForUrl(str: string): string {
  return str
    .toLowerCase()
    .replace(/\//g, '')
    .replace(/[^\w\s-]+/g, '')
    .trim()
    .replace(/ /g, '-')
    .replace(/-{2,}/g, '-')
}
