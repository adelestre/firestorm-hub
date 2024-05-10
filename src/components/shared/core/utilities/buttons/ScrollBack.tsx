import { HiOutlineChevronUp } from 'react-icons/hi'
import { useNavigationContext } from '@shared/core/contexts/Contexts'
import useContainerIsScrolled from '../../hooks/useContainerIsScrolled'

type Props = {
  docRef: React.RefObject<HTMLDivElement>
  translateX: string
}

function ScrollBack({ docRef, translateX }: Readonly<Props>) {
  const navigationContext = useNavigationContext()
  const [windowIsScrolled, scrollToTop] = useContainerIsScrolled({
    container: docRef.current?.parentElement?.parentElement ?? undefined,
    threshold: 200,
  })

  return (
    <button
      style={
        navigationContext?.navigation ? { translate: `${translateX}` } : {}
      }
      onClick={scrollToTop}
      className={`anim-slow bg-primary-3 text-secondary-2 fixed left-1/2 z-10 ml-px -translate-x-1/2 -translate-y-full cursor-pointer items-center justify-center rounded-full p-1 text-3xl opacity-60 hover:opacity-100 ${windowIsScrolled ? 'translate-y-2' : 'invisible'}`}
    >
      <HiOutlineChevronUp />
    </button>
  )
}

export default ScrollBack
