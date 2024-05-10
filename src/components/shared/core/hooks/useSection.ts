/* eslint-disable react-hooks/rules-of-hooks */
import { SectionData } from '../types/sectionData'
import { SectionContext, TabContext } from '../types/contexts'
import { useSectionWithoutNav } from './useSectionWithoutNav'
import { useSectionWithNav } from './useSectionWithNav'

export const useSection = (
  tabContext: TabContext,
  sectionContext: SectionContext,
  name: string
): SectionData | null => {
  if (tabContext === undefined) return null
  else
    return tabContext
      ? useSectionWithoutNav(sectionContext, name)
      : useSectionWithNav(sectionContext, name)
}
