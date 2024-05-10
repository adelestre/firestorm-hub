import { createContext, useContext } from 'react'
import {
  SectionContext,
  NavigationContext,
  ContentContext,
  SpecContext,
  ThemeContext,
  TabContext,
} from '../types/contexts'

export const SectionProvider = createContext<SectionContext>(undefined)

export const NavigationProvider = createContext<NavigationContext>(undefined)

export const ContentProvider = createContext<ContentContext>({
  content: 'mythic+',
  changeContent: () => null,
})

export const SpecProvider = createContext<SpecContext>(undefined)

export const ThemeProvider = createContext<ThemeContext>({
  state: false,
  toggle: () => null,
})
export const TabProvider = createContext<TabContext>(false)

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
export function useThemeContext() {
  return useContext(ThemeProvider)
}
export function useTabContext() {
  return useContext(TabProvider)
}
