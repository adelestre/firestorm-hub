import { CustomScroll } from 'react-custom-scroll'
import specs from '../../data/specs.json'
import { lazy, Suspense } from 'react'
import Loading from '@shared/core/utilities/Loading'

const SpecListItem = lazy(() => import('./SpecListItem'))

function Specs() {
  return (
    <div className="flex flex-col gap-2 px-2">
      <div className="bg-primary-3 block h-px w-full sm:hidden"></div>
      <h1 className="text-size-5 text-center font-bold">Spec guides :</h1>
      <Suspense fallback={<Loading />}>
        <div className="min-h-0 w-full flex-1">
          <CustomScroll heightRelativeToParent="100%">
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
          </CustomScroll>
        </div>
      </Suspense>
    </div>
  )
}

export default Specs
