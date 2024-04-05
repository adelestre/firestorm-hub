import Document from './Document'
import HeaderGuide from '../utilities/header/HeaderGuide'
import Navigation from './navigation/Navigation'
import { GuideContext } from '../guide/GuideContext'
import { useRef } from 'react'

function Guide() {
  const headerRef = useRef<HTMLDivElement>(null)
  return (
    <GuideContext>
      <HeaderGuide reference={headerRef} />
      <Document />
      <Navigation headerRef={headerRef} />
    </GuideContext>
  )
}

export default Guide
