import { useContentContext } from '@shared/core/contexts/Contexts'
import Introduction from './introduction/Introduction'
import MythicPlus from './mythic-plus/MythicPlus'
import Raid from './raid/Raid'

function Enhancement() {
  const contentContext = useContentContext()
  return (
    <>
      <Introduction />
      {contentContext?.content === 'mythic-plus' && <MythicPlus />}
      {contentContext?.content === 'raid' && <Raid />}
    </>
  )
}

export default Enhancement
