export type Role = 'tank' | 'healer' | 'dps'

export type PaginateParameters = {
  limit: number
  order: 'asc' | 'desc' | undefined
  lastElement: { fsio: number; pid: string } | undefined
  season: string | undefined
  filterName: string | undefined
  filterClass: string | undefined
  filterRole: Role | undefined
}
