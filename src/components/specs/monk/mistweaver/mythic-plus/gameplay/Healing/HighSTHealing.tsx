import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import SpellRotation from '@shared/spell-rotation/SpellRotation'
import SpellRotationElement from '@shared/spell-rotation/SpellRotationElement'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'
import SpellRotationIcon from '@shared/spell-rotation/SpellRotationIcon'

function HighSTHealing() {
  return (
    <Section name="Healing high ST damage">
      <Paragraph>
        For very high ST damage events, there are different possibilities
        depending on the nature of the damage. In most cases you will want to
        use preventively <ItemLink item={spells['mw-lc']} /> if possible,
        otherwise, the best is to use <ItemLink item={spells['mw-em']} /> with{' '}
        <ItemLink item={spells['mw-tft']} />. I find that this is very reliant
        to top off the target without having to use 5 GCDs and we don't have
        much use of <ItemLink item={spells['mw-tft']} /> in general, it's
        usually only used with <ItemLink item={spells['monk-rsk']} /> for damage
        in ST encounters. If the target really needs to be healed you will need
        the following rotation :
      </Paragraph>
      <SpellRotation className="space-top">
        <SpellRotationElement channeled>
          <SpellRotationIcon item={spells['monk-soom']} />
        </SpellRotationElement>
        <SpellRotationElement channeled>
          <SpellRotationIcon />
          <SpellRotationIcon item={spells['mw-em']} />
        </SpellRotationElement>
        <SpellRotationElement channeled>
          <SpellRotationIcon />
          <SpellRotationIcon item={spells['monk-viv']} />
        </SpellRotationElement>
        <SpellRotationElement channeled>
          <SpellRotationIcon />
          <SpellRotationIcon item={spells['monk-viv']} />
        </SpellRotationElement>
        <SpellRotationElement channeled>
          <SpellRotationIcon />
          <SpellRotationIcon item={spells['monk-viv']} />
        </SpellRotationElement>
        <SpellRotationElement channeled duration={0}>
          <SpellRotationIcon />
          <SpellRotationIcon item={spells['monk-viv']} />
        </SpellRotationElement>
      </SpellRotation>
      <Paragraph>
        But keep in mind, this is really last resort and is neither mana
        efficient, damage efficient and force you to stop moving. So use with
        caution.
      </Paragraph>
    </Section>
  )
}
export default HighSTHealing
