import ItemLink from '@shared/Links/ItemLink'
import Paragraph from '@shared/Paragraph'
import Section from '@shared/Section'
import spells from '@shared/spells.json'

function Role() {
  return (
    <Section name="Role">
      <Paragraph>
        Mage's main role is to deal as much damage as possible while helping
        your team providing as much CC when needed as possible.{' '}
      </Paragraph>
      <Paragraph>
        They are very mobile and hard to kill casters thanks to all our
        defensives and cheat death (<ItemLink item={spells['fm-cauterize']} />
        ), which allows us to often soak or bait ranged abilities.
      </Paragraph>
      <Paragraph>
        As a mage we also provide BL (<ItemLink item={spells['mage-bl']} />)
        which needs to be used when it gives our group the most value which car
        depend on which dungeon we run and also which afflixes are currently on.
      </Paragraph>
    </Section>
  )
}

export default Role
