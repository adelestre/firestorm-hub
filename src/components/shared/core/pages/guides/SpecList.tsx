import { CustomScroll } from 'react-custom-scroll'
import specs from '../../data/specs.json'
import { lazy, Suspense } from 'react'
import Loading from '@shared/core/utilities/Loading'

const SpecListItem = lazy(() => import('./SpecListItem'))

function Specs() {
  return (
    <Suspense fallback={<Loading />}>
      <div className="min-h-0 w-full flex-1">
        <CustomScroll heightRelativeToParent="100%">
          <div className="text-size-2 flex w-full flex-col items-center gap-3 p-4">
            {Object.keys(specs).map((job) => (
              <div
                key={'home-specs-' + job}
                className="flex w-full flex-col justify-center gap-1 sm:flex-row"
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
        </CustomScroll>
      </div>
    </Suspense>
  )
}

export default Specs
