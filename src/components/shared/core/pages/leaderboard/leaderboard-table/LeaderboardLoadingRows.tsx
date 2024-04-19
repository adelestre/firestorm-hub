import { lazy, Suspense } from 'react'

const LeaderboardRow = lazy(() => import('./LeaderboardRow'))

type Props = {
  inifiniteRef: React.RefCallback<HTMLTableRowElement>
}

function LeaderboardLoadingRows({ inifiniteRef }: Readonly<Props>) {
  return (
    <Suspense>
      {Array.from({ length: 5 }, (_, i) => (
        <Tds
          key={'leaderboard-loading-rows' + i}
          inifiniteRef={i === 0 ? inifiniteRef : undefined}
        />
      ))}
    </Suspense>
  )
}

type PropsTd = {
  inifiniteRef?: React.RefCallback<HTMLTableRowElement>
}

const Tds = ({ inifiniteRef }: Readonly<PropsTd>) => {
  return (
    <LeaderboardRow ref={inifiniteRef}>
      {Array.from({ length: 4 }, (_, i) => (
        <td
          key={'leaderboard-loading-row' + i}
          className="select-none px-8 py-6"
        >
          <p className="bg-primary-3 animate-pulse leading-4 text-transparent dark:!bg-opacity-50">
            .
          </p>
        </td>
      ))}
    </LeaderboardRow>
  )
}

export default LeaderboardLoadingRows
