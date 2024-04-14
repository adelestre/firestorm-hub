import { lazy, Suspense, useRef } from 'react'

const GuideContext = lazy(() => import('@shared/core/contexts/GuideContext'))
const HeaderGuide = lazy(() => import('./HeaderGuide'))
const Document = lazy(() => import('./Document'))
const Navigation = lazy(() => import('./navigation/Navigation'))

function Guide() {
  const headerRef = useRef<HTMLDivElement>(null)
  return (
    <Suspense>
      <GuideContext>
        <HeaderGuide reference={headerRef} />
        <Document />
        <Navigation headerRef={headerRef} />
      </GuideContext>
    </Suspense>
  )
}

export default Guide
