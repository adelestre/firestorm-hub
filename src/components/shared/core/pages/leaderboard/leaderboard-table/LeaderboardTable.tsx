import { lazy, Suspense } from 'react'
import LeaderboardHeaderItem from './LeaderboardHeaderItem'
import { Player } from '@shared/core/types/leaderboard'
import useInfiniteScroll from 'react-infinite-scroll-hook'
import LeaderboardLoadingRows from './LeaderboardLoadingRows'
import Loading from '@shared/core/utilities/Loading'

const LeaderboardItem = lazy(() => import('./LeaderboardItem'))

type Props = {
  items: Player[]
  handleClickPlayer: (player: Player) => void
  hasMore: boolean
  isLoading: boolean
  loadMore: () => void
  isFiltered: boolean
}

function LeaderboardTable({
  items,
  handleClickPlayer,
  hasMore,
  isLoading,
  loadMore,
  isFiltered,
}: Readonly<Props>) {
  const [inifiniteRef] = useInfiniteScroll({
    loading: isLoading,
    hasNextPage: hasMore,
    onLoadMore: loadMore,
    rootMargin: '0px 0px 1200px 0px',
  })
  return (
    <>
      {isLoading && (
        <div className="fixed left-0 top-0 h-screen w-screen">
          <Loading />
        </div>
      )}
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
            {items.map((player, idx) => (
              <LeaderboardItem
                key={player.pid}
                player={player}
                idx={isFiltered ? idx + 1 : undefined}
                handleClickPlayer={handleClickPlayer}
              />
            ))}
            {!isLoading && items.length == 0 ? (
              <tr className="bg-primary-1">
                <td colSpan={4}>
                  <p className="text-size-4 p-4  text-center">
                    No player found
                  </p>
                </td>
              </tr>
            ) : (
              hasMore &&
              items.length >= 50 && (
                <LeaderboardLoadingRows inifiniteRef={inifiniteRef} />
              )
            )}
          </tbody>
        </Suspense>
      </table>
    </>
  )
}

export default LeaderboardTable
