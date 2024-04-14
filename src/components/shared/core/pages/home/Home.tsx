import DefaultHeader from '@shared/core/utilities/header/DefaultHeader'
import Loading from '@shared/core/utilities/Loading'
import { lazy, Suspense } from 'react'

const Specs = lazy(() => import('../guides/SpecList'))

function Home() {
  return (
    <div className="flex h-full w-full flex-col" spec-theme="default">
      <DefaultHeader />
      <Suspense fallback={<Loading />}>
        <Specs />
      </Suspense>
    </div>
  )
}

export default Home
