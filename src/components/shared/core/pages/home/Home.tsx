import Button from '@shared/core/utilities/buttons/Button'
import Header from '@shared/core/utilities/Header'
import Loading from '@shared/core/utilities/Loading'
import { lazy, Suspense } from 'react'
import { MdLeaderboard } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Specs = lazy(() => import('../guides/SpecList'))

function Home() {
  const navigate = useNavigate()
  const navigateLeaderboard = () => {
    navigate('/leaderboard')
  }
  return (
    <div className="flex h-full w-full flex-col" spec-theme="default">
      <Header />
      <div className="mt-4 flex flex-row justify-center p-4">
        <Button
          onClick={navigateLeaderboard}
          className="w-full gap-2 !px-4 !py-2 !text-3xl sm:w-auto sm:!px-8 sm:!py-4 sm:!text-5xl"
        >
          <MdLeaderboard />
          M+ Leaderboard
        </Button>
      </div>
      <Suspense fallback={<Loading />}>
        <Specs />
      </Suspense>
    </div>
  )
}

export default Home
