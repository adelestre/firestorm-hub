import { useEffect, useRef, useState } from 'react'
import { CustomScroll } from 'react-custom-scroll'
import { useThrottledEffect } from '../utilities/hooks/useThrottledEffect'
import { useNavigationContext, useSectionContext } from '../guide/GuideContext'
import ScrollBack from '../utilities/buttons/ScrollBack'
import Spinner from '../utilities/Spinner'
import GuideRouter from './GuideRouter'

function Document() {
  const sectionContext = useSectionContext()
  const navigationContext = useNavigationContext()
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    setLoading(false)
  }, [])
  const ref = useRef<HTMLDivElement>(null)
  const getTranslateX = () => {
    if (
      sectionContext?.sections &&
      window.matchMedia('(min-width: 1024px)').matches
    ) {
      const documentWidth = sectionContext.sections[0].ref.current?.clientWidth
      if (documentWidth) {
        const rootFontSize = parseFloat(
          getComputedStyle(document.documentElement).fontSize
        )
        const maxSideWidth = 20 * rootFontSize
        const translateX =
          maxSideWidth - (window.innerWidth - documentWidth) / 2
        if (translateX > 0)
          return translateX < maxSideWidth / 2
            ? `${translateX}px`
            : `${maxSideWidth / 2 - (translateX - maxSideWidth / 2)}px`
      }
    }
    return '0px'
  }
  const [translateX, setTranslateX] = useState<string>(getTranslateX())
  useThrottledEffect(() => {
    setTranslateX(getTranslateX())
  }, 'resize')
  return loading ? (
    <Spinner />
  ) : sectionContext ? (
    <div className="min-h-0 w-full flex-1">
      <CustomScroll heightRelativeToParent="100%">
        <div ref={ref} className="relative flex flex-col items-center">
          <ScrollBack docRef={ref} translateX={translateX} />
          {sectionContext.sections && (
            <div
              style={
                navigationContext?.navigation
                  ? { transform: `translateX(${translateX})` }
                  : {}
              }
              ref={sectionContext.sections[0].ref as React.Ref<HTMLDivElement>}
              className="anim bg-primary-1 border-primary-3 flex w-full max-w-4xl flex-col items-start rounded-sm px-4 py-8 sm:w-5/6 sm:border-x sm:px-12 md:w-3/4 md:py-12"
            >
              <GuideRouter />
            </div>
          )}
        </div>
      </CustomScroll>
    </div>
  ) : null
}

export default Document
