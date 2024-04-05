import Section from '../../../../../../shared/Section'
import ItemLink from '../../../../../../shared/Links/ItemLink'
import Rotation from '../../../../../../shared/rotation/Rotation'
import RotationSpell from '../../../../../../shared/rotation/RotationSpell'
import Paragraph from '../../../../../../shared/Paragraph'

function AOERotation() {
  return (
    <Section name="AoE damage rotation">
      <Paragraph>
        AoE rotation is better on 4 target and more. Not much to say for it, it
        should looks something like :
      </Paragraph>
      <Rotation className="space-top">
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_cranekick_new.jpg"
          name="Spinning Crane Kick"
          link="https://www.wowhead.com/spell=101546/spinning-crane-kick"
          channeled
          duration={2}
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_cranekick_new.jpg"
          name="Spinning Crane Kick"
          link="https://www.wowhead.com/spell=101546/spinning-crane-kick"
          channeled
          duration={2}
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_cranekick_new.jpg"
          name="Spinning Crane Kick"
          link="https://www.wowhead.com/spell=101546/spinning-crane-kick"
          channeled
          duration={2}
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_cranekick_new.jpg"
          name="Spinning Crane Kick"
          link="https://www.wowhead.com/spell=101546/spinning-crane-kick"
          channeled
          duration={2}
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_cranekick_new.jpg"
          name="Spinning Crane Kick"
          link="https://www.wowhead.com/spell=101546/spinning-crane-kick"
          channeled
          duration={2}
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_cranekick_new.jpg"
          name="Spinning Crane Kick"
          link="https://www.wowhead.com/spell=101546/spinning-crane-kick"
          channeled
          duration={2}
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_cranekick_new.jpg"
          name="Spinning Crane Kick"
          link="https://www.wowhead.com/spell=101546/spinning-crane-kick"
          channeled
          duration={2}
        />
      </Rotation>
      <Paragraph>
        It is a damage gain to use{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_forcesphere.jpg"
          name="Zen Pulse"
          link="https://www.wowhead.com/spell=124081/zen-pulse"
        />{' '}
        on CD, and it's better used with{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="EM"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
        />{' '}
        but only if it was already on the target or if used as an instant cast
        with{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_thunderfocustea.jpg"
          name="TFT"
          link="https://www.wowhead.com/spell=116680/thunder-focus-tea"
        />{' '}
        .
      </Paragraph>
    </Section>
  )
}

export default AOERotation
