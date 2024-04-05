import Section from '../../../../../../shared/Section'
import ItemLink from '../../../../../../shared/Links/ItemLink'
import Rotation from '../../../../../../shared/rotation/Rotation'
import RotationSpell from '../../../../../../shared/rotation/RotationSpell'
import Paragraph from '../../../../../../shared/Paragraph'

function HighSTDamageHealing() {
  return (
    <Section name="Healing high ST damage">
      <Paragraph>
        For very high ST damage events, there are different possibilities
        depending on the nature of the damage. In most cases you will want to
        use preventively{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_chicocoon.jpg"
          name="Life Cocoon"
          link="https://www.wowhead.com/spell=116849/life-cocoon"
        />{' '}
        if possible, otherwise, the best is to use{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="EM"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
        />{' '}
        with{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_thunderfocustea.jpg"
          name="TFT"
          link="https://www.wowhead.com/spell=116680/thunder-focus-tea"
        />
        . I find that this is very reliant to top off the target without having
        to use 5 GCDs and we don't have much use of{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_thunderfocustea.jpg"
          name="TFT"
          link="https://www.wowhead.com/spell=116680/thunder-focus-tea"
        />{' '}
        in general, it's usually only used with{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="RSK"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />{' '}
        for damage in ST encounters. If the target really needs to be healed you
        will need the following rotation :
      </Paragraph>
      <Rotation className="space-top">
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_soothingmists.jpg"
          name="Soothing Mist"
          link="https://www.wowhead.com/spell=115175/soothing-mist"
          channeled
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="Eneloping Mist"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
          channeled
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_vivify.jpg"
          name="Vivify"
          link="https://www.wowhead.com/spell=116670/vivify"
          channeled
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_vivify.jpg"
          name="Vivify"
          link="https://www.wowhead.com/spell=116670/vivify"
          channeled
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_vivify.jpg"
          name="Vivify"
          link="https://www.wowhead.com/spell=116670/vivify"
        />
      </Rotation>
      <Paragraph>
        But keep in mind, this is really last resort and is neither mana
        efficient, damage efficient and force you to stop moving. So use with
        caution.
      </Paragraph>
    </Section>
  )
}
export default HighSTDamageHealing
