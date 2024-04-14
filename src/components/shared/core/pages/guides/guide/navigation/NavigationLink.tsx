import { useNavigate } from 'react-router-dom'
import { useNavigationContext } from '@shared/core/contexts/Contexts'
import { transformStringForUrl } from '../../../../utilities/utils'

type Props = {
  name: string
}
function NavigationLink({ name }: Readonly<Props>) {
  const navigate = useNavigate()
  const navigationContext = useNavigationContext()
  const onClick = () => {
    if (
      navigationContext &&
      !window.matchMedia('(min-width: 1024px)').matches
    ) {
      navigationContext.toggleNavigation()
    }
    navigate(`#${transformStringForUrl(name)}`)
  }
  return (
    <button
      className="anim hover:text-accent-2 w-full truncate text-left capitalize"
      onClick={onClick}
    >
      {name}
    </button>
  )
}

export default NavigationLink
