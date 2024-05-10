import { routes } from '@shared/core/routes'
import Button from '@shared/core/utilities/buttons/Button'
import Header from '@shared/core/utilities/Header'
import Loading from '@shared/core/utilities/Loading'
import { lazy, Suspense } from 'react'
import { CustomScroll } from 'react-custom-scroll'
import { MdLeaderboard } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Specs = lazy(() => import('../guides/SpecList'))

function Home() {
  const navigate = useNavigate()
  const navigateLeaderboard = () => {
    navigate(routes.leaderboard)
  }
  return (
    <div className="flex h-full w-full flex-col" spec-theme="default">
      <Header />
      <CustomScroll heightRelativeToParent="100%">
        <div className="flex flex-col items-center justify-center gap-2 px-4 sm:px-8">
          <div className="mt-4 flex flex-row justify-center p-4">
            <Button
              onClick={navigateLeaderboard}
              className="w-full gap-2 !px-4 !py-2 !text-3xl sm:w-auto"
            >
              <MdLeaderboard />
              M+ Leaderboard
            </Button>
          </div>
          <div className="bg-primary-3 h-px w-full"></div>
          <Suspense fallback={<Loading className="pb-24" />}>
            <Specs />
          </Suspense>
        </div>
      </CustomScroll>
    </div>
  )
}

export default Home
