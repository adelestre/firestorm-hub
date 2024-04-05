import { SectionData } from './sectionData'

export type SectionContext =
  | {
      sections: SectionData[]
      initSection: (
        parentId: string,
        id: string,
        name: string
      ) => SectionData | undefined
      destroySection: (id: string) => void
      parentId: string
      level: number
    }
  | undefined
export type NavigationContext =
  | {
      navigation: boolean
      toggleNavigation: () => void
    }
  | undefined
export type ContentContext =
  | {
      content: string | undefined
      changeContent: (type: string) => void
    }
  | undefined
export type SpecContext =
  | {
      job: string | undefined
      spec: string | undefined
    }
  | undefined
export type ThemeContextType =
  | {
      state: boolean
      toggle: () => void
    }
  | undefined
