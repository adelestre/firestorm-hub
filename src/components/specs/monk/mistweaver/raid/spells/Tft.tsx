import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'

function Tft() {
  return (
    <Section name="Thunder Focus Tea">
      <Paragraph>
        In Mythic+, <ItemLink item={spells['mw-tft']} /> isn't that useful since
        we don't run <ItemLink item={spells['mw-si']} />
        . Using it on <ItemLink item={spells['mw-rem']} /> or on{' '}
        <ItemLink item={spells['monk-viv']} /> is pretty useless. The 2 options
        we have are <ItemLink item={spells['mw-em']} /> and{' '}
        <ItemLink item={spells['monk-rsk']} />
        . <ItemLink item={spells['mw-em']} /> is very strong as a spot healing
        tool and works great with <ItemLink item={spells['mw-zp']} />, and{' '}
        <ItemLink item={spells['monk-rsk']} /> is very good for ST damage damage
        and group healing.
      </Paragraph>
      <Paragraph>
        So for ST encounters I use it on CD on{' '}
        <ItemLink item={spells['monk-rsk']} /> and for trash packs I usually use
        it on tank with <ItemLink item={spells['mw-zp']} /> since their CDs
        match perfectly. Though if you expect ST damage on any of your party
        members, keeping it for spot healing is a good idea.
      </Paragraph>
    </Section>
  )
}

export default Tft
