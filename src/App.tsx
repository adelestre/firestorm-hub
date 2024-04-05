import { Routes, Route } from 'react-router-dom'
import Guide from './components/shared/core/guide/Guide'
import Home from './components/shared/core/home/Home'
import { ThemeContext } from './components/shared/core/home/ThemeContext'

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
    </div>
  )
}

export default App
