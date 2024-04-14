import { useEffect, useMemo, useState } from 'react'
import { SectionData } from '../types/sectionData'
import { SectionContext } from '../types/contexts'
import { v4 } from 'uuid'

export const useSection = (
  sectionContext: SectionContext,
  name: string
): SectionData | null => {
  const [section, setSection] = useState<SectionData | null>(null)
  const id = useMemo(() => {
    return v4()
  }, [])
  useEffect(() => {
    if (sectionContext && !section) {
      const init = sectionContext.initSection(sectionContext.parentId, id, name)
      if (init) {
        setSection(init)
      }
    }
    return () => {
      if (sectionContext) {
        sectionContext.destroySection(id)
      }
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return section
}
