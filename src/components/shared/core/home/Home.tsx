import HeaderHome from './HeaderHome'
import Specs from './Specs'

function Home() {
  return (
    <div className="flex h-full w-full flex-col" spec-theme="default">
      <HeaderHome />
      <Specs />
    </div>
  )
}

export default Home
