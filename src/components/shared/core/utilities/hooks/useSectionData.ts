import { createRef, useCallback, useState } from 'react'
import { SectionData } from '../types/sectionData'
import { v4 } from 'uuid'
export const useSectionData = (
  guide: string | undefined
): [
  SectionData[],
  (parentId: string, id: string, name: string) => SectionData | undefined,
  (id: string) => void,
] => {
  const [sections, setSections] = useState<SectionData[]>([
    {
      id: v4(),
      parentId: `${'0000'}-${'0000'}-${'0000'}-${'0000'}-${'0000'}`,
      name: '#root',
      ref: createRef(),
    },
  ])

  const initSection = useCallback(
    (parentId: string, id: string, name: string) => {
      const newSection = {
        id: id,
        parentId: parentId,
        name,
        ref: createRef<HTMLElement>(),
      }
      setSections((currentSections) => {
        if (currentSections.find((section) => section.id === id))
          return currentSections
        else return [...currentSections, newSection]
      })
      return newSection
    },
    []
  )

  const destroySection = useCallback((id: string) => {
    setSections((currentSections) =>
      currentSections.filter((section) => section.id !== id)
    )
  }, [])

  return [sections, initSection, destroySection]
}
