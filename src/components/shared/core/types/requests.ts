export type PaginateParameters = {
  limit: number
  order: 'asc' | 'desc' | undefined
  lastElement: { fsio: number; pid: string } | undefined
  filterName: string | undefined
  filterClass: string | undefined
}
