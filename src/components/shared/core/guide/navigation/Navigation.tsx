import NavigationGroup from './NavigationGroup'
import { useThrottledEffect } from '../../utilities/hooks/useThrottledEffect'
import React, { useCallback, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import IconButton from '../../utilities/buttons/IconButton'
import { CustomScroll } from 'react-custom-scroll'
import {
  useNavigationContext,
  useSectionContext,
  useSpecContext,
} from '../GuideContext'
import { Select } from '@material-tailwind/react'
import SelectSpecItem from './SelectSpecItem'
import specs from '../../data/specs.json'

type Props = {
  headerRef: React.RefObject<HTMLDivElement>
}

function Navigation({ headerRef }: Readonly<Props>) {
  const specContext = useSpecContext()
  const sectionContext = useSectionContext()
  const navigationContext = useNavigationContext()
  const getHeight = () => {
    return window.matchMedia('(min-width: 640px)').matches
      ? `calc(100% - ${headerRef.current?.clientHeight ?? 0}px)`
      : '100%'
  }
  const [height, setHeight] = useState<string>(getHeight())
  useThrottledEffect(() => {
    setHeight(getHeight())
  }, 'resize')
  const getSelected = useCallback(() => {
    return (
      specContext && (
        <div className="pointer-events-none w-full *:flex *:w-full">
          <SelectSpecItem job_spec={`${specContext.job}-${specContext.spec}`} />
        </div>
      )
    )
  }, [specContext])
  const scrollToTopOnLoad = useCallback(
    (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
      e.currentTarget.parentElement?.scrollTo(0, 0)
    },
    []
  )
  return sectionContext && navigationContext && headerRef.current ? (
    <div className="pointer-events-none absolute inset-0">
      <button
        onClick={navigationContext.toggleNavigation}
        className={`anim pointer-events-auto absolute z-40 h-screen w-screen bg-black opacity-50 sm:z-auto lg:hidden ${navigationContext.navigation ? 'visible' : 'invisible'}`}
      />
      <div
        id="navigation-container"
        style={{ height: height }}
        className={`anim bg-primary-2 border-primary-3 pointer-events-auto absolute bottom-0 left-0 z-40 flex w-full max-w-80 flex-col border-r sm:min-w-80 ${navigationContext.navigation ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="anim text-secondary-4 flex w-full flex-row justify-between gap-2 p-4 pb-0 text-3xl md:pt-0">
          <div
            id="spec-select"
            className="flex w-full min-w-0 flex-1 font-economica text-2xl font-bold"
          >
            {specContext && (
              <Select
                selected={getSelected}
                placeholder={'Select a spec'}
                className="border-primary-3 focus:border-accent-2 flex flex-row items-center justify-between border-b-2 border-l-0 border-r-0 border-t-0 px-2 pb-2 outline-none"
                menuProps={{
                  className:
                    'w-full p-2 scrollbar-thin scrollbar-corner-transparent scrollbar-thumb-rounded-md scrollbar-thumb-light-primary-4 dark:scrollbar-thumb-dark-primary-3 scrollbar-track-transparent border-primary-4 bg-primary-2 shadow-md',
                }}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <div
                  onLoad={scrollToTopOnLoad}
                  className="flex max-h-80 flex-col gap-1"
                >
                  {Object.keys(specs).map((name) => (
                    <SelectSpecItem key={name} job_spec={name} />
                  ))}
                  <div className="h-1 w-full flex-none"></div>
                </div>
              </Select>
            )}
          </div>
          <div className="hover:text-secondary-1 h-11 w-11 hover:scale-110 sm:hidden">
            <IconButton onClick={navigationContext.toggleNavigation}>
              <MdOutlineClose />
            </IconButton>
          </div>
        </div>
        <CustomScroll heightRelativeToParent="100%">
          <div
            className={`anim relative z-20 flex min-h-full flex-col pb-4 pl-6 pt-2`}
          >
            <NavigationGroup id={sectionContext.sections[0].id} />
          </div>
        </CustomScroll>
        <div
          className={`anim pointer-events-none absolute h-full w-full max-w-80 shadow-md-right sm:min-w-80 ${navigationContext.navigation ? 'translate-x-0' : '-translate-x-full opacity-0'}`}
        ></div>
        <div className="anim bg-primary-2 pointer-events-none absolute top-0 h-2 w-full -translate-y-2"></div>
      </div>
    </div>
  ) : null
}

export default Navigation
