import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'

function EssenceFont() {
  return (
    <Section name="Essence Font">
      <Paragraph>
        <ItemLink item={spells['mw-ef']} /> is useless. So useless, mainly
        because every good thing it does is also done by{' '}
        <ItemLink item={spells['mw-faeline']} />, but also because it doesn't
        even heal and it costs way too much mana. I mean.. why.. if you want to
        help yourself, remove it from your bars. But, since we can cast it while
        moving, it may be, and take that with a grain of salt, "useful" if you
        really need to heal, that you can't hit any enemy, and that you need to
        be moving. Therefore once every 20 dungeons.
      </Paragraph>
    </Section>
  )
}

export default EssenceFont
