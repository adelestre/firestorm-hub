import Button from '../../../utilities/buttons/Button'
import {
  useContentContext,
  useNavigationContext,
} from '../../../contexts/Contexts'
import Header from '../../../utilities/header/Header'
import IconButton from '../../../utilities/buttons/IconButton'
import { useEffect, useState } from 'react'
import { useThrottledEffect } from '../../../hooks/useThrottledEffect'

type Props = {
  reference: React.RefObject<HTMLDivElement>
}

function HeaderGuide({ reference }: Readonly<Props>) {
  const navigationContext = useNavigationContext()
  const contentContext = useContentContext()
  const [mythicLabel, setMythicLabel] = useState('Mythic +')
  useThrottledEffect(() => {
    if (window.matchMedia('(min-width: 640px)').matches) {
      setMythicLabel('Mythic +')
    } else {
      setMythicLabel('M+')
    }
  }, 'resize')
  return navigationContext && contentContext ? (
    <Header
      reference={reference}
      childrenRight={
        <IconButton
          onClick={navigationContext.toggleNavigation}
          tooltip={{
            content: navigationContext.navigation ? 'close' : 'navigation',
            placement: 'bottom',
          }}
        >
          <BurgerMenu navigation={navigationContext.navigation} />
        </IconButton>
      }
    >
      <div className="text-size-1 grid grid-cols-2 gap-2 sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:gap-4">
        <Button
          onClick={() => contentContext.changeContent('mythic-plus')}
          active={contentContext.content === 'mythic-plus'}
        >
          {mythicLabel}
        </Button>
        <Button
          onClick={() => contentContext.changeContent('raid')}
          active={contentContext.content === 'raid'}
        >
          Raid
        </Button>
      </div>
    </Header>
  ) : null
}

type BurgerMenuProps = {
  navigation: boolean
}

function BurgerMenu({ navigation }: Readonly<BurgerMenuProps>) {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(min-width: 640px)').matches) {
      setShouldAnimate(navigation)
    } else {
      setShouldAnimate(false)
    }
  }, [navigation])
  return (
    <nav className="m-1 flex h-4 flex-col justify-between">
      <div
        aria-hidden="true"
        className={`anim bg-secondary-2 h-[3px] w-5 rounded-md ${shouldAnimate && 'translate-y-[6.5px] rotate-45'}`}
      ></div>
      <div
        aria-hidden="true"
        className={`anim bg-secondary-2 h-[3px] w-5 rounded-md ${shouldAnimate && 'opacity-0'}`}
      ></div>
      <div
        aria-hidden="true"
        className={`anim bg-secondary-2 h-[3px] w-5 rounded-md ${shouldAnimate && '-translate-y-1.5 -rotate-45'}`}
      ></div>
    </nav>
  )
}

export default HeaderGuide
