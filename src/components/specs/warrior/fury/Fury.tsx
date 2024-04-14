import { useContentContext } from '@shared/core/contexts/Contexts'
import Introduction from './introduction/Introduction'
import MythicPlus from './mythic-plus/MythicPlus'
import Raid from './raid/Raid'

function Fury() {
  const contentContext = useContentContext()
  return (
    <div>
      <Introduction />
      {contentContext?.content === 'mythic-plus' && <MythicPlus />}
      {contentContext?.content === 'raid' && <Raid />}
    </div>
  )
}

export default Fury
