import { CustomScroll } from 'react-custom-scroll'
import Header from '@shared/core/utilities/Header'
import { MdError } from 'react-icons/md'
import { usePaginate } from './hooks/usePaginate'
import LeaderboardTable from './leaderboard-table/LeaderboardTable'
import LeaderboardForm from './LeaderboardForm'
import { Suspense, useState } from 'react'
import PlayerRuns from './PlayerRuns'
import { Player } from '@shared/core/types/leaderboard'

function Leaderboard() {
  const [
    { items, count, isLoading, error, loadMore, hasMore },
    { season, filterName, filterClass, filterRole, order },
  ] = usePaginate()

  const [isPlayerRunsOpen, setIsPlayerRunsOpen] = useState(false)
  const [player, setPlayer] = useState<Player | null>(null)

  const handleClickPlayer = (player: Player) => {
    setIsPlayerRunsOpen(true)
    setPlayer(player)
  }

  const isFiltered =
    filterName.value !== undefined ||
    filterClass.value !== undefined ||
    filterRole.value !== undefined

  return (
    <div className="flex h-full w-full flex-col" spec-theme="default">
      <PlayerRuns
        isOpen={isPlayerRunsOpen}
        setIsOpen={setIsPlayerRunsOpen}
        player={player}
        season={season.value ?? '2'}
      />
      <Header />
      <CustomScroll heightRelativeToParent="100%">
        <div className="flex h-full w-full flex-col items-center gap-3">
          <h1 className="text-size-5 mt-8 px-4 text-center">
            Firestorm Mythic+ Leaderboard
          </h1>
          <h2 className="text-size-0 px-4 text-center">
            <p className="text-center">
              (The FSIO is calculated differently than the IO displayed in-game
              and therefore the values may differ.
            </p>
            <p className="text-center">
              Only runs that are displayed on{' '}
              <a
                className="underline"
                href="https://firestorm-servers.com/fr/challenge/index"
              >
                Firestorm's website
              </a>{' '}
              are taken into account.)
            </p>
          </h2>
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
          {!error && (
            <div className="flex w-full max-w-6xl flex-col items-center gap-4 p-4 pt-4 sm:p-12 sm:pt-4">
              <LeaderboardForm
                season={season}
                filterClass={filterClass}
                filterName={filterName}
                filterRole={filterRole}
              />
              {
                <Suspense>
                  <LeaderboardTable
                    items={items}
                    handleClickPlayer={handleClickPlayer}
                    loadMore={loadMore}
                    hasMore={hasMore}
                    isLoading={isLoading}
                    isFiltered={isFiltered}
                  />
                </Suspense>
              }
            </div>
          )}
        </div>
      </CustomScroll>
    </div>
  )
}

export default Leaderboard
