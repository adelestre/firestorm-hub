import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import {
  SectionContext,
  NavigationContext,
  ContentContext,
  SpecContext,
} from '../utilities/types/contexts'
import { useSectionData } from '../utilities/hooks/useSectionData'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { transformStringForUrl } from '../utilities/utils'

export const SectionProvider = createContext<SectionContext>(undefined)

const NavigationProvider = createContext<NavigationContext>(undefined)

export const ContentProvider = createContext<ContentContext>({
  content: 'mythic+',
  changeContent: () => null,
})

export const SpecProvider = createContext<SpecContext>(undefined)

type Props = {
  children: ReactNode
}

export function GuideContext({ children }: Readonly<Props>) {
  const navigate = useNavigate()
  const { job, spec, content } = useParams()
  const location = useLocation()
  const [sections, initSection, destroySection] = useSectionData('mythic+')
  useEffect(() => {
    if (!job || !spec) {
      navigate('/', { replace: true })
      return
    }
    if (!content) {
      navigate('mythic-plus', { replace: true })
    }
    if (location.hash) {
      const anchor = location.hash.substring(1)
      const section = sections.find(
        (section) => transformStringForUrl(section.name) === anchor
      )
      if (section) {
        setTimeout(() => {
          section?.ref?.current?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [job, spec, content, location.hash, location.pathname, sections, navigate])
  const changeContent = useCallback(
    (type: string) => {
      navigate(
        location.pathname.substring(0, location.pathname.lastIndexOf('/') + 1) +
          type,
        { replace: true }
      )
    },
    [navigate, location.pathname]
  )
  const [navigation, setNavigation] = useState(false)
  useEffect(() => {
    if (window.matchMedia('(min-width: 1210px)').matches) {
      setNavigation(true)
    }
  }, [])
  const toggleNavigation = useCallback(() => {
    const handle = document.querySelector(
      '#navigation-container .rcs-inner-handle'
    )
    if (handle) {
      if (navigation) {
        handle.classList.add('invisible')
      } else {
        handle.classList.remove('invisible')
      }
    }
    setNavigation(!navigation)
  }, [navigation])

  const sectionContext: SectionContext = useMemo(() => {
    return {
      sections: sections,
      initSection: initSection,
      destroySection: destroySection,
      parentId: sections[0].id,
      level: 0,
    }
  }, [sections, initSection, destroySection])
  const navigationContext: NavigationContext = useMemo(
    () => ({ navigation, toggleNavigation }),
    [navigation, toggleNavigation]
  )
  const contentContext = useMemo(
    () => ({ content, changeContent }),
    [content, changeContent]
  )
  const specContext = useMemo(() => ({ job, spec }), [job, spec])
  return (
    <SpecProvider.Provider value={specContext}>
      <SectionProvider.Provider value={sectionContext}>
        <NavigationProvider.Provider value={navigationContext}>
          <ContentProvider.Provider value={contentContext}>
            <div
              className="flex h-full w-full flex-col items-center"
              spec-theme={job}
            >
              {children}
            </div>
          </ContentProvider.Provider>
        </NavigationProvider.Provider>
      </SectionProvider.Provider>
    </SpecProvider.Provider>
  )
}

export function useSectionContext() {
  return useContext(SectionProvider)
}
export function useNavigationContext() {
  return useContext(NavigationProvider)
}
export function useContentContext() {
  return useContext(ContentProvider)
}
export function useSpecContext() {
  return useContext(SpecProvider)
}
