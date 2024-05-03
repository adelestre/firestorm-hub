import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import SpellRotation from '@shared/spell-rotation/SpellRotation'
import SpellRotationElement from '@shared/spell-rotation/SpellRotationElement'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'
import SpellRotationIcon from '@shared/spell-rotation/SpellRotationIcon'

function AOERotation() {
  return (
    <Section name="AoE damage rotation">
      <Paragraph>
        AoE rotation is better on 4 target and more. There's not much to say for
        it, it should look something like :
      </Paragraph>
      <SpellRotation className="space-top">
        <SpellRotationElement channeled duration={2}>
          <SpellRotationIcon item={spells['monk-sck']} />
        </SpellRotationElement>
        <SpellRotationElement channeled duration={2}>
          <SpellRotationIcon item={spells['monk-sck']} />
        </SpellRotationElement>{' '}
        <SpellRotationElement channeled duration={2}>
          <SpellRotationIcon item={spells['monk-sck']} />
        </SpellRotationElement>{' '}
        <SpellRotationElement channeled duration={2}>
          <SpellRotationIcon item={spells['monk-sck']} />
        </SpellRotationElement>{' '}
        <SpellRotationElement channeled duration={2}>
          <SpellRotationIcon item={spells['monk-sck']} />
        </SpellRotationElement>{' '}
        <SpellRotationElement channeled duration={2}>
          <SpellRotationIcon item={spells['monk-sck']} />
        </SpellRotationElement>
      </SpellRotation>
      <Paragraph>
        It is a damage gain to use <ItemLink item={spells['mw-zp']} /> on CD,
        and it's better used with <ItemLink item={spells['mw-em']} /> but only
        if it was already on the target or if used as an instant cast with{' '}
        <ItemLink item={spells['mw-tft']} /> .
      </Paragraph>
    </Section>
  )
}

export default AOERotation
