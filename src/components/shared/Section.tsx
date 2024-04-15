import { useMemo } from 'react'
import {
  SectionProvider,
  useSectionContext,
} from '@shared/core/contexts/Contexts'
import { useSection } from './core/hooks/useSection'
import { SectionContext } from './core/types/contexts'

type Props = {
  name: string
  children?: React.ReactNode
  CustomTitle?: ({
    level,
    name,
    reference,
  }: Readonly<TitleProps>) => JSX.Element | null
}

function Section({ name, children, CustomTitle }: Readonly<Props>) {
  const sectionContext = useSectionContext()
  const section = useSection(sectionContext, name)
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
        <Title
          level={sectionContext.level}
          name={name}
          reference={section.ref}
        />
      )}
      {children}
    </SectionProvider.Provider>
  ) : null
}

type TitleProps = {
  level?: number
  name: string
  reference: React.Ref<HTMLElement> | null
}

function Title({ level, name, reference }: Readonly<TitleProps>) {
  switch (level) {
    case 0:
      return (
        <h2
          ref={reference as React.Ref<HTMLHeadingElement>}
          className="title-2 space-top text-size-5"
        >
          {name}
        </h2>
      )
    case 1:
      return (
        <h3
          ref={reference as React.Ref<HTMLHeadingElement>}
          className="title-3 space-top text-size-4"
        >
          {name}
        </h3>
      )
    case 2:
      return (
        <h4
          ref={reference as React.Ref<HTMLHeadingElement>}
          className="title-4 space-top text-size-3"
        >
          {name}
        </h4>
      )
    case 3:
    default:
      return (
        <h5
          ref={reference as React.Ref<HTMLHeadingElement>}
          className="title-5 space-top text-size-1"
        >
          {name}
        </h5>
      )
  }
}

export default Section
