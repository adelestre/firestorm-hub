import { Player } from '@shared/core/types/leaderboard'
import { PaginateParameters } from '@shared/core/types/requests'
import axios from 'axios'
import { useState } from 'react'
import useSWRImmutable from 'swr/immutable'

const baseUrl = window.location.origin + '/api/leaderboard'

async function paginate({
  url,
  args,
}: {
  url: string
  args: PaginateParameters
}): Promise<Player[]> {
  const response = await axios.post(url, {
    limit: args.limit,
    order: args.order,
    startPoint: args.startPoint,
    filterName: args.filterName,
    filterClass: args.filterClass,
  })
  return response.data
}

export function usePaginate() {
  const [limit, setLimit] = useState(50)
  const [startPoint, setStartPoint] =
    useState<PaginateParameters['startPoint']>(undefined)
  const [filterName, setFilterName] =
    useState<PaginateParameters['filterName']>(undefined)
  const [filterClass, setFilterClass] =
    useState<PaginateParameters['filterClass']>(undefined)
  const [order, setOrder] = useState<PaginateParameters['order']>(undefined)
  const { data, error, isLoading } = useSWRImmutable(
    {
      url: baseUrl + '/paginate',
      args: {
        limit,
        order,
        startPoint,
        filterName,
        filterClass,
      } as PaginateParameters,
    },
    paginate
  )
  return [
    { data, error, isLoading },
    { setLimit, setStartPoint, setFilterName, setFilterClass, setOrder },
  ]
}
