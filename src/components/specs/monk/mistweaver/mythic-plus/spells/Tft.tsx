import Section from '../../../../../shared/Section'
import ItemLink from '../../../../../shared/Links/ItemLink'
import Paragraph from '../../../../../shared/Paragraph'

function Tft() {
  return (
    <Section name="Thunder Focus Tea">
      <Paragraph>
        In Mythic+,{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_thunderfocustea.jpg"
          name="TFT"
          link="https://www.wowhead.com/spell=116680/thunder-focus-tea"
        />{' '}
        isn't that useful since we don't run{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_chibrew.jpg"
          name="SI"
          link="https://www.wowhead.com/spell=388491/secret-infusion"
        />
        . Using it on{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_renewingmists.jpg"
          name="ReM"
          link="https://www.wowhead.com/spell=115151/renewing-mist"
        />{' '}
        or on{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_vivify.jpg"
          name="Vivify"
          link="https://www.wowhead.com/spell=116670/vivify"
        />{' '}
        is pretty useless. The 2 options we have are{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="EM"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
        />{' '}
        and{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="RSK"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />
        .{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="EM"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
        />{' '}
        is very strong as a spot healing tool and works great with{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_forcesphere.jpg"
          name="Zen Pulse"
          link="https://www.wowhead.com/spell=124081/zen-pulse"
        />
        , and{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="RSK"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />{' '}
        is very good for ST damage damage and group healing.
      </Paragraph>
      <Paragraph>
        So for ST encounters I use it on CD on{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="RSK"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />{' '}
        and for trash packs I usually use it on tank with{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_forcesphere.jpg"
          name="Zen Pulse"
          link="https://www.wowhead.com/spell=124081/zen-pulse"
        />{' '}
        since their CDs match perfectly. Though if you expect ST damage on any
        of your party members, keeping it for spot healing is a good idea.
      </Paragraph>
    </Section>
  )
}

export default Tft
