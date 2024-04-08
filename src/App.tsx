import { Routes, Route } from 'react-router-dom'
import Guide from './components/shared/core/guide/Guide'
import Home from './components/shared/core/home/Home'
import { ThemeContext } from './components/shared/core/ThemeContext'
import { Tooltip } from 'react-tooltip'

function App() {
  return (
    <div className={`App fixed inset-0`}>
      <ThemeContext>
        <div className="anim bg-primary-2 text-secondary-2 h-full w-full text-base font-medium">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide/:job/:spec/:content?" element={<Guide />} />
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
