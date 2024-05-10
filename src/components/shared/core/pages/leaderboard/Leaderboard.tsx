import { Suspense } from 'react'
import { CustomScroll } from 'react-custom-scroll'
import Loading from '@shared/core/utilities/Loading'
import Header from '@shared/core/utilities/Header'
import { MdError } from 'react-icons/md'
import { usePaginate } from '../../hooks/usePaginate'
import LeaderboardTable from './leaderboard-table/LeaderboardTable'

function Leaderboard() {
  const [
    { items, count, isLoading, error, loadMore, hasMore },
    { limit, filterName, filterClass, order },
  ] = usePaginate()

  return (
    <div className="flex h-full w-full flex-col" spec-theme="default">
      <Header />
      <CustomScroll heightRelativeToParent="100%">
        <div className="flex h-full w-full flex-col items-center gap-3">
          <h1 className="text-size-5 mt-8 px-4 text-center">
            Firestorm Mythic+ Leaderboard
          </h1>
          <h2 className="text-size-2 px-4 text-center">
            (Only runs made after the 04/22 are taken into account)
          </h2>
          {items.length == 0 && isLoading && (
            <div className="h-full *:-translate-y-12">
              <Loading className="pb-24"></Loading>
            </div>
          )}
          {error && (
            <div className="mt-8 flex flex-col items-center justify-center gap-2">
              <div className="text-size-5 text-red-700">
                <MdError />
              </div>
              <h1 className="text-size-4">
                An error occured while trying to get the data.
              </h1>
            </div>
          )}
          {!error && items.length > 0 && (
            <Suspense>
              <LeaderboardTable
                items={items}
                loadMore={loadMore}
                hasMore={hasMore}
                isLoading={isLoading}
              />
            </Suspense>
          )}
        </div>
      </CustomScroll>
    </div>
  )
}

export default Leaderboard
