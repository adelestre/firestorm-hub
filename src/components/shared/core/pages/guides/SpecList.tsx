import specs from '../../data/specs.json'
import { lazy, Suspense } from 'react'
import Loading from '@shared/core/utilities/Loading'

const SpecListItem = lazy(() => import('./SpecListItem'))

function Specs() {
  return (
    <div className="flex w-full flex-col gap-2 px-2">
      <h1 className="text-size-5 text-center font-bold">Spec guides :</h1>
      <Suspense fallback={<Loading className="pb-24" />}>
        <div className="min-h-0 w-full flex-1">
          <div className="text-size-3 flex w-full flex-col items-center gap-2 p-4">
            {Object.keys(specs).map((job) => (
              <div
                key={'home-specs-' + job}
                className="flex w-full flex-col justify-center gap-2 sm:flex-row"
              >
                {Object.keys(specs[job as keyof typeof specs]).map((spec) => (
                  <SpecListItem
                    key={'home-specs-' + job + '-' + spec}
                    job={job}
                    spec={spec}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default Specs
