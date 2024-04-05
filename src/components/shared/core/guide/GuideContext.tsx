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
import { SectionData } from '../utilities/types/sectionData'
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
  const [sectionsMythic, initSectionMythic, destroySectionMythic] =
    useSectionData('mythic+')
  const [sectionsRaid, initSectionRaid, destroySectionRaid] =
    useSectionData('mythic+')
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
      let section: SectionData | undefined = undefined
      switch (content) {
        case 'mythic-plus':
          section = sectionsMythic.find(
            (section) => transformStringForUrl(section.name) === anchor
          )
          break
        case 'raid':
          section = sectionsRaid.find(
            (section) => transformStringForUrl(section.name) === anchor
          )
          break
      }
      if (section) {
        setTimeout(() => {
          section?.ref?.current?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [
    job,
    spec,
    content,
    location.hash,
    location.pathname,
    sectionsMythic,
    sectionsRaid,
    navigate,
  ])
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
  const [navigation, setNavigation] = useState(true)
  useEffect(() => {
    if (window.matchMedia('(min-width: 640px)').matches) {
      setNavigation(false)
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
    switch (content) {
      case 'raid':
        return {
          sections: sectionsRaid,
          initSection: initSectionRaid,
          destroySection: destroySectionRaid,
          parentId: sectionsRaid[0].id,
          level: 0,
        }
      case 'mythic-plus':
      default:
        return {
          sections: sectionsMythic,
          initSection: initSectionMythic,
          destroySection: destroySectionMythic,
          parentId: sectionsMythic[0].id,
          level: 0,
        }
    }
  }, [
    content,
    sectionsMythic,
    initSectionMythic,
    destroySectionMythic,
    sectionsRaid,
    initSectionRaid,
    destroySectionRaid,
  ])
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
