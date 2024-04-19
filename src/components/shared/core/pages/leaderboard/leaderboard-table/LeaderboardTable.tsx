import { lazy, Suspense } from 'react'
import LeaderboardHeaderItem from './LeaderboardHeaderItem'
import { Player } from '@shared/core/types/leaderboard'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import LeaderboardLoadingRows from './LeaderboardLoadingRows'

const LeaderboardItem = lazy(() => import('./LeaderboardItem'))

type Props = {
  items: Player[]
  hasMore: boolean
  isLoading: boolean
  loadMore: () => void
}

function LeaderboardTable({
  items,
  hasMore,
  isLoading,
  loadMore,
}: Readonly<Props>) {
  const [inifiniteRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: hasMore,
    onLoadMore: loadMore,
    rootMargin: '0px 0px 1200px 0px',
  })
  return (
    <div className="flex w-full max-w-6xl flex-col items-center gap-2 p-4 pt-4 sm:p-12 sm:pt-4">
      <table className="w-full overflow-hidden rounded-md">
        <thead>
          <tr className="border-secondary-4 bg-primary-1 border-b !bg-opacity-60">
            <Suspense>
              <LeaderboardHeaderItem title={'Rank'} />
              <LeaderboardHeaderItem title={'Name'} />
              <LeaderboardHeaderItem title={'FSIO'} secondLast />
              <LeaderboardHeaderItem title={'Number of runs'} last />
            </Suspense>
          </tr>
        </thead>
        <Suspense>
          <tbody>
            {items.map((player, index) => (
              <LeaderboardItem key={player.pid} player={player} index={index} />
            ))}
            {items.length == 0 ? (
              <tr className="bg-primary-1">
                <td colSpan={4}>
                  <p className="text-size-4 p-4  text-center">
                    No player found
                  </p>
                </td>
              </tr>
            ) : (
              hasMore && <LeaderboardLoadingRows inifiniteRef={inifiniteRef} />
            )}
          </tbody>
        </Suspense>
      </table>
    </div>
  )
}

export default LeaderboardTable
