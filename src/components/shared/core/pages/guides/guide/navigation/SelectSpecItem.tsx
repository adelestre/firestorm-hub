import { Option } from '@material-tailwind/react'
import icons from '@shared/core/data/icons.json'
import { useNavigate } from 'react-router-dom'
import { useNavigationContext } from '@shared/core/contexts/Contexts'
import { navigateToSpec } from '@shared/core/utilities/utils'

type Props = {
  job: string
  spec: string
}

function SelectSpecItem({ job, spec }: Readonly<Props>) {
  const navigate = useNavigate()
  const navigationContext = useNavigationContext()
  const job_spec = `${job}-${spec}`
  const icon: string =
    icons[job as keyof typeof icons][
      spec as keyof (typeof icons)[keyof typeof icons]
    ]
  return (
    <Option
      value={job_spec}
      spec-theme={job}
      onClick={() => navigateToSpec(navigate, job_spec, navigationContext)}
      className="anim bg-accent-3 hover:bg-accent-4 border-accent-1 line-clamp-1 flex flex-none flex-row items-center gap-2 rounded-md border-2 px-[9px] py-1"
    >
      <img
        className="h-7 w-7 rounded-sm border border-light-secondary-2"
        src={icon}
        alt={job_spec}
      />
      <div className="font-bold capitalize text-light-secondary-2">{spec}</div>
    </Option>
  )
}

export default SelectSpecItem
