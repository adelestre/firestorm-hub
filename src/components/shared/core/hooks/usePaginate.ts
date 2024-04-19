import { Player } from '@shared/core/types/leaderboard'
import { PaginateParameters } from '@shared/core/types/requests'
import { PaginateResponse } from '@shared/core/types/response'
import axios from 'axios'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'

const baseUrl = window.location.origin + '/api/leaderboard'

export function usePaginate(): [
  {
    items: Player[]
    count: number
    error: Error | undefined
    isLoading: boolean
    loadMore: () => Promise<void>
    hasMore: boolean
  },
  {
    limit: {
      value: number
      setter: Dispatch<SetStateAction<number>>
    }
    filterName: {
      value: PaginateParameters['filterName']
      setter: Dispatch<SetStateAction<string | undefined>>
    }
    filterClass: {
      value: PaginateParameters['filterClass']
      setter: Dispatch<SetStateAction<string | undefined>>
    }
    order: {
      value: PaginateParameters['order']
      setter: Dispatch<SetStateAction<'asc' | 'desc' | undefined>>
    }
  },
] {
  const [limit, setLimit] = useState(50)
  const [lastElement, setLastElement] =
    useState<PaginateParameters['lastElement']>(undefined)
  const [filterName, setFilterName] =
    useState<PaginateParameters['filterName']>(undefined)
  const [filterClass, setFilterClass] =
    useState<PaginateParameters['filterClass']>(undefined)
  const [order, setOrder] = useState<PaginateParameters['order']>(undefined)

  const [items, setItems] = useState<Player[]>([])
  const [count, setCount] = useState(limit + 1)
  const [error, setError] = useState<Error | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)

  const sendPaginateRequest =
    useCallback(async (): Promise<PaginateResponse> => {
      const response = await axios.post(baseUrl + '/paginate', {
        limit: limit,
        order: order,
        lastElement: lastElement,
        filterName: filterName,
        filterClass: filterClass,
      })
      return response.data
    }, [limit, order, lastElement, filterName, filterClass])

  const loadMore = useCallback(async () => {
    setIsLoading(true)
    try {
      if (hasMore) {
        const response = await sendPaginateRequest()
        if (!response.players) throw new Error('No data returned')
        if (items.length + response.players.length >= response.count) {
          setHasMore(false)
          console.log('No more data to load')
        }
        setItems((currentItems) => {
          return [...currentItems, ...response.players]
        })
        setCount(response.count)
        if (response.players.length > 0)
          setLastElement({
            fsio: response.players[response.players.length - 1].fsio,
            pid: response.players[response.players.length - 1].pid,
          })
      }
    } catch (error) {
      console.error(error)
      setError(error as Error)
    } finally {
      setIsLoading(false)
    }
  }, [items, sendPaginateRequest, hasMore])
  useEffect(() => {
    loadMore()
  }, [])

  return [
    { items, count, error, isLoading, loadMore, hasMore },
    {
      limit: { value: limit, setter: setLimit },
      filterName: { value: filterName, setter: setFilterName },
      filterClass: { value: filterClass, setter: setFilterClass },
      order: { value: order, setter: setOrder },
    },
  ]
}
