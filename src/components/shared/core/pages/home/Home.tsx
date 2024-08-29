import Header from '@shared/core/utilities/Header'
import Loading from '@shared/core/utilities/Loading'
import { lazy, Suspense } from 'react'
import { CustomScroll } from 'react-custom-scroll'

const Specs = lazy(() => import('../guides/SpecList'))

function Home() {
  return (
    <div className="flex h-full w-full flex-col" spec-theme="default">
      <Header />
      <CustomScroll heightRelativeToParent="100%">
        <div className="flex flex-col items-center justify-center gap-2 px-4 sm:px-8">
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
