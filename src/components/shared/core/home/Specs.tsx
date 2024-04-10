import { CustomScroll } from 'react-custom-scroll'
import specs from '../data/specs.json'
import SpecItem from './SpecItem'

function Specs() {
  return (
    <div className="min-h-0 w-full flex-1">
      <CustomScroll heightRelativeToParent="100%">
        <div className="text-size-2 flex w-full flex-col items-center gap-3 p-4">
          {Object.keys(specs).map((job) => (
            <div
              key={'home-specs-' + job}
              className="flex w-full flex-col justify-center gap-1 sm:flex-row"
            >
              {Object.keys(specs[job as keyof typeof specs]).map((spec) => (
                <SpecItem
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
  )
}

export default Specs
