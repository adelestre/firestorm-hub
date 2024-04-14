import { usePaginate } from './api'

function Leaderboard() {
  const [{ data, error, isLoading }] = usePaginate()
  return (
    <div>
      <h1 className="text-size-3">Work In Progress</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data?.map((player) => (
        <div key={player.name}>
          <p>{player.name}</p>
          <p>{player.fsio}</p>
        </div>
      ))}
    </div>
  )
}

export default Leaderboard
