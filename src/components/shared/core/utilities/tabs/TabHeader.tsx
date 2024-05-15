import { TabElementProps } from '@shared/tabs/TabElement'
import TabHeaderElement from './TabHeaderElement'
import { useCallback, useEffect, useRef, useState } from 'react'
import useContainerIsFullyScrolled from '@shared/core/hooks/useContainerIsFullyScrolled'
import IconButton from '../buttons/IconButton'
import { MdChevronRight, MdChevronLeft } from 'react-icons/md'
import Loading from '../Loading'
import useContainerIsScrolled from '@shared/core/hooks/useContainerIsScrolled'

type Props = {
  currentTab: string | null
  setCurrentTab: (id: string) => void
  bgColor: string
  children: React.ReactNode
}

function TabHeader({
  currentTab,
  setCurrentTab,
  bgColor,
  children,
}: Readonly<Props>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isRefSet, setIsRefSet] = useState(false)

  useEffect(() => {
    setIsRefSet(containerRef.current !== null)
  }, [containerRef])
  const [isScrolled] = useContainerIsScrolled({
    container: containerRef.current ?? undefined,
    orientation: 'horizontal',
  })
  const [isFullyScrolled] = useContainerIsFullyScrolled({
    container: containerRef.current ?? undefined,
    orientation: 'horizontal',
  })
  const smallScrollRight = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left:
          containerRef.current.scrollLeft +
          containerRef.current.clientWidth -
          200,
        behavior: 'smooth',
      })
    }
  }, [containerRef])
  const smallScrollLeft = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left:
          containerRef.current.scrollLeft -
          containerRef.current.clientWidth +
          200,
        behavior: 'smooth',
      })
    }
  }, [containerRef])
  return (
    <div
      className={`flex w-full flex-row bg-${bgColor} border-primary-4 mx-2 border-b-[1px]`}
    >
      <div
        className={`flex w-full flex-row ${isRefSet ? 'relative' : 'invisible absolute'}`}
      >
        <div
          className={`anim ${!isScrolled ? 'pointer-events-none opacity-0' : 'opacity-100'} absolute left-0 h-full bg-${bgColor}`}
        >
          <IconButton
            fullHeight
            className="rounded-none rounded-tl-md"
            onClick={smallScrollLeft}
          >
            <MdChevronLeft />
          </IconButton>
        </div>
        <div
          ref={containerRef}
          className="flex w-full flex-row overflow-auto scrollbar-none"
        >
          {children &&
            (children as React.ReactElement[]).map(
              (child: React.ReactElement<TabElementProps>) => {
                return (
                  <TabHeaderElement
                    key={child.props.id}
                    name={child.props.name}
                    active={currentTab === child.props.id}
                    onClick={() => setCurrentTab(child.props.id)}
                  />
                )
              }
            )}
        </div>
        {!isFullyScrolled && (
          <div
            className={`anim ${isFullyScrolled ? 'pointer-events-none opacity-0' : 'opacity-100'} absolute right-0 h-full bg-${bgColor}`}
          >
            <IconButton
              fullHeight
              className="rounded-none rounded-tr-md"
              onClick={smallScrollRight}
            >
              <MdChevronRight />
            </IconButton>
          </div>
        )}
      </div>
      {!isRefSet && <Loading />}
    </div>
  )
}

export default TabHeader
