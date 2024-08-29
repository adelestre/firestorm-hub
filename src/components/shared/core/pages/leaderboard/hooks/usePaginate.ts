import { Player } from '@shared/core/types/leaderboard'
import { PaginateParameters, Role } from '@shared/core/types/requests'
import { PaginateResponse } from '@shared/core/types/response'
import axios, { AxiosError } from 'axios'
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { apiBaseUrl } from '../api'

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
    season: {
      value: string | undefined
      setter: Dispatch<SetStateAction<string | undefined>>
    }
    filterName: {
      value: PaginateParameters['filterName']
      setter: Dispatch<SetStateAction<string | undefined>>
    }
    filterClass: {
      value: PaginateParameters['filterClass']
      setter: Dispatch<SetStateAction<string | undefined>>
    }
    filterRole: {
      value: PaginateParameters['filterRole']
      setter: Dispatch<SetStateAction<Role | undefined>>
    }
    order: {
      value: PaginateParameters['order']
      setter: Dispatch<SetStateAction<'asc' | 'desc' | undefined>>
    }
  },
] {
  const limit = 50
  const [season, setSeason] = useState<PaginateParameters['season']>('2')
  const [lastElement, setLastElement] =
    useState<PaginateParameters['lastElement']>(undefined)
  const [filterName, setFilterName] =
    useState<PaginateParameters['filterName']>(undefined)
  const [filterClass, setFilterClass] =
    useState<PaginateParameters['filterClass']>(undefined)
  const [filterRole, setFilterRole] =
    useState<PaginateParameters['filterRole']>(undefined)
  const [order, setOrder] = useState<PaginateParameters['order']>(undefined)

  const [items, setItems] = useState<Player[]>([])
  const [count, setCount] = useState(limit + 1)
  const [error, setError] = useState<Error | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const [hasMore, setHasMore] = useState(true)

  const handleLoading = useCallback((value: boolean) => {
    if (value) setIsLoading(true)
    else {
      setTimeout(() => {
        setIsLoading(false)
      }, 500)
    }
  }, [])

  const sendPaginateRequest = useCallback(
    async (refresh: boolean = false): Promise<PaginateResponse> => {
      const response = await axios.post(apiBaseUrl + '/paginate', {
        limit: limit,
        order: order,
        season: season,
        lastElement: refresh ? undefined : lastElement,
        filterName: filterName,
        filterClass: filterClass,
        filterRole: filterRole,
      })
      return response.data
    },
    [limit, order, lastElement, filterName, filterClass, filterRole, season]
  )

  const loadMore = useCallback(
    async (refresh: boolean = false) => {
      handleLoading(true)
      try {
        if (refresh || hasMore) {
          const response = await sendPaginateRequest(refresh)
          if (!response.players) throw new Error('No data returned')
          if (
            response.players.length == 0 ||
            items.length + response.players.length >= response.count
          ) {
            setHasMore(false)
            console.log('No more data to load')
          } else setHasMore(true)
          setItems((currentItems) => {
            if (refresh) return response.players
            const newItems = [...currentItems, ...response.players]
            return newItems.filter(
              (item, index, self) =>
                index === self.findIndex((t) => t.pid === item.pid)
            )
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
        if (
          error instanceof AxiosError &&
          error?.response?.data.startsWith(
            'Error getting documents: Error: 9 FAILED_PRECONDITION'
          )
        ) {
          console.log(error?.response?.data.slice(108))
        }

        setError(error as Error)
      } finally {
        handleLoading(false)
      }
    },
    [items, sendPaginateRequest, hasMore, handleLoading]
  )

  const reload = useCallback(async () => {
    setItems([])
    handleLoading(true)
    setLastElement(undefined)
    setHasMore(true)
    await loadMore(true)
  }, [loadMore, handleLoading])

  useEffect(() => {
    setFilterClass(undefined)
    setFilterName(undefined)
    setFilterRole(undefined)
    setOrder(undefined)
    setHasMore(true)
  }, [season])

  useEffect(() => {
    setItems([])
    reload().then(() => {
      if (filterName !== undefined) setHasMore(false)
    })
  }, [season, filterName, filterClass, filterRole, order]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    loadMore()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return [
    { items, count, error, isLoading, loadMore, hasMore },
    {
      season: { value: season, setter: setSeason },
      filterName: { value: filterName, setter: setFilterName },
      filterClass: { value: filterClass, setter: setFilterClass },
      filterRole: { value: filterRole, setter: setFilterRole },
      order: { value: order, setter: setOrder },
    },
  ]
}
