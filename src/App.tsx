import { Routes, Route } from 'react-router-dom'
import { ThemeContext } from './components/shared/core/contexts/ThemeContext'
import { Tooltip } from 'react-tooltip'
import { lazy, Suspense } from 'react'

const Home = lazy(() => import('@shared/core/pages/home/Home'))
const Specs = lazy(() => import('@shared/core/pages/guides/SpecList'))
const Guide = lazy(() => import('@shared/core/pages/guides/guide/Guide'))
const Leaderboard = lazy(
  () => import('@shared/core/pages/leaderboard/Leaderboard')
)
const NotFound = lazy(() => import('@shared/core/NotFound'))

function App() {
  return (
    <div className={`App fixed inset-0`}>
      <ThemeContext>
        <div className="anim bg-primary-2 text-secondary-2 h-full w-full text-base font-medium">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/guide"
              element={
                <Suspense>
                  <Specs />
                </Suspense>
              }
            />
            <Route
              path="/guide/:job/:spec/:content?"
              element={
                <Suspense>
                  <Guide />
                </Suspense>
              }
            />
            <Route
              path="/leaderboard"
              element={
                <Suspense>
                  <Leaderboard />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </ThemeContext>
      <Tooltip
        disableStyleInjection
        delayShow={200}
        className="bg-primary-1 anim bg-secondary-3 text-primary-1 z-50 hidden -translate-y-1 rounded p-2 text-center font-bold *:h-2 *:w-2 *:rotate-45 lg:block"
        id="tooltip"
      />
    </div>
  )
}

export default App
