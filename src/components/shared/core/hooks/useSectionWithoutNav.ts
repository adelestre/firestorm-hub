import { useEffect, useMemo, useState } from 'react'
import { SectionData } from '../types/sectionData'
import { SectionContext } from '../types/contexts'
import { v4 } from 'uuid'

export const useSectionWithoutNav = (
  sectionContext: SectionContext,
  name: string
): SectionData | null => {
  const [section, setSection] = useState<SectionData | null>(null)
  const id = useMemo(() => {
    return v4()
  }, [])
  useEffect(() => {
    if (sectionContext && !section) {
      setSection({
        id,
        parentId: sectionContext.parentId,
        name,
        ref: null,
      })
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  return section
}
