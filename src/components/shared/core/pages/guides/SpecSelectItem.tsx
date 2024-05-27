import { useNavigate } from 'react-router-dom'
import { useNavigationContext } from '@shared/core/contexts/Contexts'
import icons from '@shared/core/data/icons.json'
import specs from '@shared/core/data/specs.json'
import { navigateToSpec } from '@shared/core/utilities/utils'

type Props = {
  job: string
  spec: string
  placeholder?: boolean
}

function SpecSelectItem({ job, spec, placeholder }: Readonly<Props>) {
  const navigate = useNavigate()
  const navigationContext = useNavigationContext()
  const job_spec = `${job}-${spec}`
  const icon: string =
    icons[job as keyof typeof icons][
      spec as keyof (typeof icons)[keyof typeof icons]
    ]
  const name: string =
    specs[job as keyof typeof icons][
      spec as keyof (typeof icons)[keyof typeof icons]
    ]
  const InnerElements = (
    <>
      <img
        className="h-4 w-4 rounded-sm border border-light-secondary-2 sm:h-6 sm:w-6"
        src={icon}
        alt={job_spec}
      />
      <div className="hidden font-eco font-bold text-light-secondary-2 lg:block">
        {name}
      </div>
      <div className="flex-1 font-eco font-bold capitalize text-light-secondary-2 lg:hidden">
        {spec}
      </div>
      <div className="h-4 w-4 sm:hidden"></div>
    </>
  )
  return placeholder ? (
    <div
      spec-theme={job}
      onClick={() => navigateToSpec(navigate, job_spec, navigationContext)}
      className="anim bg-accent-3 text-size-2 border-accent-1 line-clamp-1 flex flex-none flex-row items-center gap-1 rounded-md border-2 px-2 sm:px-4 sm:py-1 sm:hover:scale-[107%]"
    >
      {InnerElements}
    </div>
  ) : (
    <button
      spec-theme={job}
      onClick={() => navigateToSpec(navigate, job_spec, navigationContext)}
      className="anim bg-accent-3 text-size-2 border-accent-1 line-clamp-1 flex flex-none flex-row items-center gap-1 rounded-md border-2 px-2 sm:px-4 sm:py-1 sm:hover:scale-[107%]"
    >
      {' '}
      {InnerElements}
    </button>
  )
}

export default SpecSelectItem
