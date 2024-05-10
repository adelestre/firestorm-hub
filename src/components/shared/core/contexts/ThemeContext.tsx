import { ReactNode, useCallback, useMemo } from 'react'
import { useLocalStorage } from '@uidotdev/usehooks'
import { ThemeProvider } from './Contexts'

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
