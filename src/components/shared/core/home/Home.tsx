import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import HeaderHome from '../utilities/header/HeaderHome'

function Home() {
  const navigate = useNavigate()
  const navigateToGuide = useCallback(
    (job: string, spec: string) => {
      navigate(`/guide/${job}/${spec}`)
    },
    [navigate]
  )
  return (
    <div className="h-full w-full">
      <HeaderHome />
      <button onClick={() => navigateToGuide('monk', 'mistweaver')}>
        Go to Mistweaver Guide
      </button>
    </div>
  )
}

export default Home
