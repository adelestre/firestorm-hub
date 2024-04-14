import NavigationGroup from './NavigationGroup'
import { useThrottledEffect } from '../../../../hooks/useThrottledEffect'
import React, { useCallback, useState } from 'react'
import { MdOutlineClose } from 'react-icons/md'
import IconButton from '../../../../utilities/buttons/IconButton'
import { CustomScroll } from 'react-custom-scroll'
import {
  useNavigationContext,
  useSectionContext,
  useSpecContext,
} from '@shared/core/contexts/Contexts'
import SelectSpecItem from './SelectSpecItem'
import specs from '../../../../data/specs.json'
import { Select } from '@material-tailwind/react'

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
      specContext?.job &&
      specContext?.spec && (
        <div className="pointer-events-none w-full *:flex *:w-full">
          <SelectSpecItem job={specContext.job} spec={specContext.spec} />
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
        className={`anim pointer-events-auto absolute z-40 h-screen w-screen bg-black opacity-50 sm:z-30 lg:hidden ${navigationContext.navigation ? '' : '!pointer-events-none !opacity-0'}`}
      />
      <div className="z-30">
        <div
          id="navigation-container"
          style={{ height: height }}
          className={`anim bg-primary-2 border-primary-3 pointer-events-auto absolute bottom-0 right-0 z-40 flex w-full max-w-72 flex-col border-l shadow-md-left sm:min-w-72 ${navigationContext.navigation ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="anim text-secondary-4 flex w-full flex-row justify-between gap-2 p-4 pb-0 text-3xl md:pt-2">
            <div className="spec-select flex w-full min-w-0 flex-1 font-eco text-3xl font-bold">
              {specContext && (
                <Select
                  selected={getSelected}
                  placeholder={'Select a spec'}
                  className="border-primary-3 focus:border-accent-2 flex flex-row items-center justify-between border-b-2 border-l-0 border-r-0 border-t-0 px-2 pb-2 outline-none"
                  menuProps={{
                    className:
                      'w-full p-2 pl-4 scrollbar-thin scrollbar-corner-transparent scrollbar-thumb-rounded-md scrollbar-thumb-light-accent-4 dark:scrollbar-thumb-dark-accent-3 scrollbar-track-transparent border-primary-4 bg-primary-2',
                  }}
                >
                  <div
                    onLoad={scrollToTopOnLoad}
                    className="flex max-h-80 flex-col gap-1"
                  >
                    {Object.keys(specs).map((job) =>
                      Object.keys(specs[job as keyof typeof specs]).map(
                        (spec) => (
                          <SelectSpecItem
                            key={`spec-${job}-${spec}`}
                            job={job}
                            spec={spec}
                          />
                        )
                      )
                    )}
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
        </div>
      </div>
    </div>
  ) : null
}

export default Navigation
