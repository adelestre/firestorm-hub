import { Option } from '@material-tailwind/react'
import icons from '../../data/icons.json'
import specs from '../../data/specs.json'
import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNavigationContext } from '../GuideContext'

type Props = {
  job_spec: string
}

function SelectSpecItem({ job_spec }: Readonly<Props>) {
  const navigate = useNavigate()
  const navigationContext = useNavigationContext()
  const job = job_spec.split('-')[0]
  const icon: string = icons[job_spec as keyof typeof icons]
  const name: string = specs[job_spec as keyof typeof specs]
  const navigateToSpec = useCallback(() => {
    const [job, spec] = job_spec?.split('-') ?? [undefined, undefined]
    if (job && spec) {
      if (
        navigationContext &&
        !window.matchMedia('(min-width: 1024px)').matches
      ) {
        navigationContext.toggleNavigation()
      }
      navigate(`/guide/${job}/${spec}/mythic-plus`)
    }
  }, [navigate, job_spec, navigationContext])
  return (
    <Option
      value={job_spec}
      spec-theme={job}
      onClick={navigateToSpec}
      className="bg-accent-3 border-accent-1 line-clamp-1 flex flex-none flex-row items-center gap-2 rounded-md border-2 px-2 py-1"
    >
      <img
        className="h-6 w-6 rounded-sm border border-zinc-900"
        src={icon}
        alt={job_spec}
      />
      <div className="font-bold text-zinc-900">{name}</div>
    </Option>
  )
}

export default SelectSpecItem
