export type PaginateParameters = {
  limit: number
  order: 'asc' | 'desc' | undefined
  startPoint: number | undefined
  filterName: string | undefined
  filterClass: string | undefined
}
