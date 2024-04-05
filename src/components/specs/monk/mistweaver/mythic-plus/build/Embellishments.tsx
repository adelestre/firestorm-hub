import Section from '../../../../../shared/Section'
import ItemLink from '../../../../../shared/Links/ItemLink'
import Paragraph from '../../../../../shared/Paragraph'

function Embellishments() {
  return (
    <Section name="Embellishments">
      <Paragraph>
        As far as embellishments go,{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_necklace_necklace1_color3.jpg"
          name="Elemental Lariat"
          link="https://www.wowhead.com/item=193001/elemental-lariat"
        />{' '}
        is usually the best option. Lariat is a very strong stat proc that you
        can control with your socketed gems. As we usually want haste procs, you
        will have to equip only air gems, head to the gems section for more
        details. Lariat is only good if you are close to the maximum 8 socketed
        gems because its uptime decreases a lot for every missing gem. You
        should also not equip different types of gems as even 1 gem of a
        different will make you lose 50% of your haste procs.
      </Paragraph>
      <Paragraph>
        Equipping{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_fire_cut_blue.jpg"
          name="Radiant Malygite"
          link="https://www.wowhead.com/item=192932/radiant-malygite"
        />{' '}
        or{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_fire_cut_green.jpg"
          name="Crafty Ysemerald"
          link="https://www.wowhead.com/item=192945/crafty-ysemerald"
        />{' '}
        to get Crit proc instead are viable options if you hit the haste
        diminishing returns soft cap.
      </Paragraph>
      <Paragraph>
        To pair with Lariat, options are not huge for Mistweavers so you can
        choose between{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_leather_dragondungeon_c_01_boot.jpg"
          name="Toxic Thorn Footwraps"
          link="https://www.wowhead.com/item=193452/toxic-thorn-footwraps"
        />{' '}
        or{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_gizmo_runichealthinjector.jpg"
          name="Magazine of Healing Darts"
          link="https://www.wowhead.com/item=198258/magazine-of-healing-darts"
        />
        . First one is better for damage (1-2% increase to both damage and heal
        without{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_cataclysmarmorkit_10.jpg"
          name="Toxified Armor Patch"
          link="https://www.wowhead.com/item=193555/toxified-armor-patch"
        />
        ) and second is better for healing.
      </Paragraph>
    </Section>
  )
}

export default Embellishments
