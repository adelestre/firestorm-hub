// import { usePaginate } from './api'
import DefaultHeader from '@shared/core/utilities/header/DefaultHeader'
import db from './db.json'
import { lazy, Suspense } from 'react'
import LeaderboardItemLabel from './LeaderboardItemLabel'
import { CustomScroll } from 'react-custom-scroll'
import Loading from '@shared/core/utilities/Loading'

const LeaderboardItem = lazy(() => import('./LeaderboardItem'))

function Leaderboard() {
  // const [{ data, error, isLoading }] = usePaginate()
  const isLoading = false
  const error = null as { message: string } | null
  const data = db
  return (
    <div className="flex h-full w-full flex-col" spec-theme="default">
      <DefaultHeader />
      <CustomScroll heightRelativeToParent="100%">
        <div className="flex h-full w-full flex-col items-center gap-3">
          <h1 className="text-size-5 mt-8 px-4 text-center">
            Firestorm Mythic+ Leaderboard
          </h1>
          <h2 className="text-size-2 px-4 text-center">
            (Only runs made since the 04/12 are taken into account)
          </h2>
          {isLoading && (
            <div className="h-full *:-translate-y-12">
              <Loading></Loading>
            </div>
          )}
          {error && <p>Error: {error.message}</p>}
          {data && (
            <Suspense>
              <div className="w-full max-w-4xl p-4 pt-0 sm:p-12 sm:pt-0">
                <table className="w-full overflow-hidden rounded-md">
                  <thead>
                    <tr className="border-secondary-4 bg-primary-1 border-b !bg-opacity-60">
                      <LeaderboardItemLabel title={'Rank'} />
                      <LeaderboardItemLabel title={'Name'} />
                      <LeaderboardItemLabel title={'FSIO'} secondLast />
                      <LeaderboardItemLabel title={'Number of runs'} last />
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((player, index) => (
                      <LeaderboardItem
                        key={player.name}
                        player={player}
                        index={index}
                        last={index === data.length - 1}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </Suspense>
          )}
        </div>
      </CustomScroll>
    </div>
  )
}

export default Leaderboard
