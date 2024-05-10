import { useMemo } from 'react'
import {
  SectionProvider,
  useSectionContext,
  useTabContext,
} from '@shared/core/contexts/Contexts'
import { useSection } from './core/hooks/useSection'
import { SectionContext } from './core/types/contexts'
import SectionTitle, {
  SectionTitleProps,
} from './core/utilities/section/SectionTitle'

type Props = {
  name: string
  children?: React.ReactNode
  CustomTitle?: ({
    level,
    name,
    reference,
  }: Readonly<SectionTitleProps>) => JSX.Element | null
}

function Section({ name, children, CustomTitle }: Readonly<Props>) {
  const sectionContext = useSectionContext()
  const tabContext = useTabContext()
  const section = useSection(tabContext, sectionContext, name)
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

  return sectionContext && section ? (
    <SectionProvider.Provider value={newContext}>
      {CustomTitle ? (
        <CustomTitle
          level={sectionContext.level}
          name={name}
          reference={section.ref}
        />
      ) : (
        <SectionTitle
          level={sectionContext.level}
          name={name}
          reference={section.ref}
        />
      )}
      {children}
    </SectionProvider.Provider>
  ) : null
}

export default Section
