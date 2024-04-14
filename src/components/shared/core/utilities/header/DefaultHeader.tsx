import { Link } from 'react-router-dom'
import Header from './Header'

function DefaultHeader() {
  return (
    <Header>
      <div className="text-size-2 flex h-full w-full flex-row items-center justify-end gap-4 py-3 font-semibold">
        <Link to={'/leaderboard'} className="anim hover:text-accent-2">
          M+ Leaderboard
        </Link>
        <div className="bg-secondary-2 h-full w-[2px] rounded-sm"></div>
      </div>
    </Header>
  )
}

export default DefaultHeader
