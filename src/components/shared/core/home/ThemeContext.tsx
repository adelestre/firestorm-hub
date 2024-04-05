import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react'
import { ThemeContextType } from '../utilities/types/contexts'
import { useLocalStorage } from '@uidotdev/usehooks'

const ThemeProvider = createContext<ThemeContextType>({
  state: false,
  toggle: () => null,
})

type Props = {
  children: ReactNode
}

export function ThemeContext({ children }: Readonly<Props>) {
  const [theme, setTheme] = useLocalStorage(
    'theme',
    window.matchMedia('(prefers-color-scheme: dark)').matches
  )
  const toggleTheme = useCallback(() => {
    setTheme(!theme)
  }, [theme, setTheme])
  const themeContext = useMemo(
    () => ({
      state: theme,
      toggle: toggleTheme,
    }),
    [theme, toggleTheme]
  )
  return (
    <ThemeProvider.Provider value={themeContext}>
      <div className={`h-full w-full ${theme ? 'dark' : ''}`}>{children}</div>
    </ThemeProvider.Provider>
  )
}

export function useThemeContext() {
  return useContext(ThemeProvider)
}
