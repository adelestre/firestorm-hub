import { ReactNode } from 'react'
import ThemeToggle from '../buttons/ThemeToggle'
import { useThemeContext } from '../../home/ThemeContext'

type Props = {
  reference?: React.RefObject<HTMLDivElement>
  children?: ReactNode
}

function Header({ reference, children }: Readonly<Props>) {
  const themeContext = useThemeContext()
  return (
    <div
      ref={reference}
      className="anim bg-primary-2 border-primary-3 relative z-20 flex h-20 w-full flex-row items-center justify-center border-b p-3 shadow-md"
    >
      <img
        className="h-full"
        src={`./assets/logo${themeContext?.state ? '-light' : ''}.svg`}
        alt=""
      />
      {children}
      <div className="absolute right-2 top-1/2 flex -translate-y-1/2 justify-center sm:right-3">
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Header
