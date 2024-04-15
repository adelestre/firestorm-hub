import NavigationLink from './NavigationLink'
import { SectionData } from '../../../../types/sectionData'
import { useEffect, useMemo, useState } from 'react'
import {
  SectionProvider,
  useContentContext,
  useSectionContext,
} from '@shared/core/contexts/Contexts'
import { SectionContext } from '../../../../types/contexts'

type Props = {
  id: string
}

function NavigationGroup({ id }: Readonly<Props>) {
  const sectionContext = useSectionContext()
  const contentContext = useContentContext()
  const [textSize, setTextSize] = useState('text-size-5')
  const [section, setSection] = useState<SectionData | undefined>(undefined)
  const [children, setChildren] = useState<SectionData[]>([])
  const getName = () => {
    if (!section || !contentContext) return ''
    if (section.name !== '#root') return section.name
    switch (contentContext.content) {
      case 'mythic-plus':
        return 'Mythic+ Guide'
      case 'raids':
        return 'Raids Guide'
    }
    return ''
  }
  useEffect(() => {
    if (sectionContext === null || sectionContext === undefined) return
    else {
      setSection(sectionContext.sections.find((section) => section.id === id))
      const ch = sectionContext.sections.filter(
        (section) => section.parentId === id
      )
      setChildren(ch)
      switch (sectionContext.level) {
        case undefined:
        case 0:
          setTextSize('text-4xl')
          break
        case 1:
          setTextSize('text-3xl')
          break
        case 2:
          setTextSize('text-2xl')
          break
        default:
          setTextSize('text-xl')
          break
      }
    }
  }, [sectionContext, textSize, id])
  const newContext: SectionContext = useMemo(() => {
    if (!sectionContext || !section) {
      return undefined
    }
    return {
      ...sectionContext,
      parentId: section.id,
      level: sectionContext.level + 1,
    }
  }, [section, sectionContext])
  return section && children ? (
    <div className="flex w-full flex-col items-start">
      <div className={`eco w-full ${textSize}`}>
        <NavigationLink name={getName()} />
      </div>
      <SectionProvider.Provider value={newContext}>
        {children.map((child) => (
          <div
            key={'navigation' + child.id}
            className="flex w-full flex-col items-start pl-4"
          >
            <NavigationGroup id={child.id} />
          </div>
        ))}
      </SectionProvider.Provider>
    </div>
  ) : null
}

export default NavigationGroup
