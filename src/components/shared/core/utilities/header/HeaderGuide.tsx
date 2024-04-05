import Button from '../buttons/Button'
import IconButton from '../buttons/IconButton'
import {
  useContentContext,
  useNavigationContext,
} from '../../guide/GuideContext'
import Header from './Header'

type Props = {
  reference: React.RefObject<HTMLDivElement>
}

function HeaderGuide({ reference }: Readonly<Props>) {
  const navigationContext = useNavigationContext()
  const contentContext = useContentContext()
  return navigationContext && contentContext ? (
    <Header reference={reference}>
      <div className="absolute left-2 top-1/2 flex -translate-y-1/2 justify-center sm:left-3">
        <IconButton onClick={navigationContext.toggleNavigation}>
          <div className="anim text-size-3 flex flex-row items-center gap-2">
            <BurgerMenu navigation={navigationContext.navigation} />
            <p className="text-size-3 hidden sm:block">Navigation</p>
          </div>
        </IconButton>
      </div>
      <div className="text-size-1 grid grid-cols-2 gap-2 sm:gap-4">
        <Button
          onClick={() => contentContext.changeContent('mythic-plus')}
          active={contentContext.content === 'mythic-plus'}
        >
          Mythic+
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
  return (
    <nav className="m-1 flex h-4 flex-col justify-between">
      <div
        aria-hidden="true"
        className={`anim bg-secondary-2 h-[3px] w-5 rounded-md ${navigation && 'translate-y-[6.5px] rotate-45'}`}
      ></div>
      <div
        aria-hidden="true"
        className={`anim bg-secondary-2 h-[3px] w-5 rounded-md ${navigation && 'opacity-0'}`}
      ></div>
      <div
        aria-hidden="true"
        className={`anim bg-secondary-2 h-[3px] w-5 rounded-md ${navigation && '-translate-y-1.5 -rotate-45'}`}
      ></div>
    </nav>
  )
}

export default HeaderGuide
