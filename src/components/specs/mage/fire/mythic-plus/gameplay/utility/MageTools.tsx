import Section from '@shared/Section'
import CC from './CC'
import Mobility from './Mobility'
import Utility from './Utility'
// import ItemLink from '@shared/Links/ItemLink'
// import spells from '@shared/spells.json'
//import ItemLink from '@shared/Links/ItemLink'
//import items from '@shared/items.json'

function MageTools() {
  return (
    <Section name="Mage tools">
      <CC />
      <Mobility />
      <Utility />
    </Section>
  )
}

export default MageTools
