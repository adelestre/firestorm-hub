import { ReactNode, useCallback } from 'react'
import ThemeToggle from '../buttons/ThemeToggle'
import { useThemeContext } from '../../ThemeContext'
import { useNavigate } from 'react-router-dom'

type Props = {
  reference?: React.RefObject<HTMLDivElement>
  smallLogo?: boolean
  childrenLeft?: ReactNode
  childrenRight?: ReactNode
  children?: ReactNode
}

function Header({
  reference,
  childrenLeft,
  childrenRight,
  children,
}: Readonly<Props>) {
  const themeContext = useThemeContext()
  const navigate = useNavigate()
  const navigateHome = useCallback(() => {
    navigate('/')
  }, [navigate])
  return (
    <div
      ref={reference}
      className="anim bg-primary-2 border-primary-3 relative z-40 flex h-20 w-full flex-row items-center justify-between gap-2 border-b p-3 shadow-md"
    >
      <div className="flex h-full flex-row items-center justify-start pl-2">
        <button
          className="anim hover:bg-primary-3 h-full rounded-md px-2 py-1"
          onClick={navigateHome}
        >
          <img
            className="hidden h-full lg:block"
            src={`/assets/logo-name-horizontal${themeContext?.state ? '-light' : ''}.svg`}
            alt=""
          />
          <img
            className="block h-2/3 sm:h-full lg:hidden"
            src={`/assets/logo${themeContext?.state ? '-light' : ''}.svg`}
            alt=""
          />
        </button>
        {childrenLeft}
      </div>
      {children}
      <div className="flex flex-row gap-2 sm:pr-1">
        <div className="hidden sm:block">
          <ThemeToggle />
        </div>
        {childrenRight}
      </div>
    </div>
  )
}

export default Header
