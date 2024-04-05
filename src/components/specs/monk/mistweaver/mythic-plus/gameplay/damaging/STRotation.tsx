import Section from '../../../../../../shared/Section'
import ItemLink from '../../../../../../shared/Links/ItemLink'
import Rotation from '../../../../../../shared/rotation/Rotation'
import RotationSpell from '../../../../../../shared/rotation/RotationSpell'
import Paragraph from '../../../../../../shared/Paragraph'

function STRotation() {
  return (
    <Section name="ST damage rotation">
      <Paragraph>
        Our ST damage rotation is only composed of 3 spells :{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="TP"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        ,{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="BoK"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />{' '}
        and{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="RSK"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />
        . The goal is to get as many{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="RSK"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />{' '}
        as possible since it is our biggest damaging ability. In order to do so,
        we need to fish for resets with{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/passive_monk_teachingsofmonastery.jpg"
          name="TotM"
          link="https://www.wowhead.com/spell=116645/teachings-of-the-monastery"
        />{' '}
        and cast it as soon as it comes off CD. The rotation will be as follow :
      </Paragraph>
      <Rotation className="space-top">
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="Rising Sun Kick"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="Tiger Palm"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="Blackout Kick"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="Tiger Palm"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="Blackout Kick"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="Tiger Palm"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="Blackout Kick"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="Tiger Palm"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="Tiger Palm"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="Rising Sun Kick"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="Blackout Kick"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="Rising Sun Kick"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />
      </Rotation>
      <Paragraph>
        Now, this is an example where you get no reset before 2nd{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="RSK"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />{' '}
        (it has a CD exactly equal to 8 GCD). If you notice, at the end, since
        it will soon come off CD, we use 2{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="TP"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />{' '}
        so we are able to get more chance to reset, since getting a reset at
        this point would be useless. Then we are able to get a reset instantly.
        Obviously if you're very lucky, rotation will look like :
      </Paragraph>
      <Rotation className="space-top">
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="Rising Sun Kick"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="Tiger Palm"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="Blackout Kick"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="Rising Sun Kick"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="Tiger Palm"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="Blackout Kick"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="Rising Sun Kick"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="Tiger Palm"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="Blackout Kick"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="Rising Sun Kick"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />
      </Rotation>
      <Paragraph>
        It is very simple, but mastering this makes a lot of difference.
      </Paragraph>
    </Section>
  )
}

export default STRotation
