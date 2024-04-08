import { useNavigate } from 'react-router-dom'
import { useNavigationContext } from '../guide/GuideContext'
import icons from '../data/icons.json'
import specs from '../data/specs.json'
import { navigateToSpec } from '../utilities/utils'

type Props = {
  job: string
  spec: string
}

function SpecItem({ job, spec }: Readonly<Props>) {
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
  return (
    <button
      value={job_spec}
      spec-theme={job}
      onClick={() => navigateToSpec(navigate, job_spec, navigationContext)}
      className="anim bg-accent-3 border-accent-1 line-clamp-1 flex flex-none flex-row items-center gap-1 rounded-md border-2 px-2 py-1 hover:scale-110 sm:px-4 sm:py-2"
    >
      <img
        className="h-6 w-6 rounded-sm border border-zinc-900"
        src={icon}
        alt={job_spec}
      />
      <div className="font-bold text-zinc-900">{name}</div>
    </button>
  )
}

export default SpecItem
