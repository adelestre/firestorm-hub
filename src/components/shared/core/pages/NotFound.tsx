import { Link } from 'react-router-dom'
import DefaultHeader from '../utilities/Header'
import { CustomScroll } from 'react-custom-scroll'
import { routes } from '../routes'
import { useThemeContext } from '../contexts/Contexts'

function NotFound() {
  const themeContext = useThemeContext()
  return (
    <div className="flex h-full w-full flex-col" spec-theme="default">
      <DefaultHeader />
      <div className="min-h-0 flex-1">
        <CustomScroll heightRelativeToParent="100%">
          <div className="mb-[25svh] flex flex-col items-center justify-start gap-12 px-8 pt-8 md:justify-evenly md:gap-24">
            <img
              className="h-24 md:h-32"
              src={`/assets/logo-name-vertical${themeContext?.state ? '-light' : ''}.svg`}
              alt="Firestorm Hub Logo"
            />
            <div className="flex flex-col items-center gap-4">
              <p className="text-size-6 text-accent-2 ">404 Not Found</p>
              <p className="text-size-4 text-center font-bold">
                The page you're trying to access doesn't exist or was removed
              </p>
              <Link
                to={routes.home}
                className="group flex flex-col items-center"
              >
                <p className="text-size-3">{'> Go back to a safer place <'}</p>
                <div className="anim bg-secondary-2 h-px w-0 -translate-y-[2px] group-hover:w-full"></div>
              </Link>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </CustomScroll>
      </div>
    </div>
  )
}

export default NotFound
