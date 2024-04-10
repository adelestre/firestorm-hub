import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Rotation from '@shared/rotation/Rotation'
import RotationSpell from '@shared/rotation/RotationSpell'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'

function AOERotation() {
  return (
    <Section name="AoE damage rotation">
      <Paragraph>
        AoE rotation is better on 4 target and more. Not much to say for it, it
        should looks something like :
      </Paragraph>
      <Rotation className="space-top">
        <RotationSpell item={spells['monk-sck']} channeled duration={2} />
        <RotationSpell item={spells['monk-sck']} channeled duration={2} />
        <RotationSpell item={spells['monk-sck']} channeled duration={2} />
        <RotationSpell item={spells['monk-sck']} channeled duration={2} />
        <RotationSpell item={spells['monk-sck']} channeled duration={2} />
        <RotationSpell item={spells['monk-sck']} channeled duration={2} />
        <RotationSpell item={spells['monk-sck']} channeled duration={2} />
      </Rotation>
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
