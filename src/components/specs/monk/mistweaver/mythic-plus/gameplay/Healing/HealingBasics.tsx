import Section from '../../../../../../shared/Section'
import ItemLink from '../../../../../../shared/Links/ItemLink'
import Paragraph from '../../../../../../shared/Paragraph'

function HealingBasics() {
  return (
    <Section name="Healing Basics">
      <Paragraph>
        Mistweaver isn't great at healing damage you weren't prepared to heal
        outside of{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_revival.jpg"
          name="Revival"
          link="https://www.wowhead.com/spell=115310/revival"
        />
        . Luckily, most damage in the game is easy to predict. For the rest, all
        you can do is do your best to always be prepared for the worst. For
        that, the best is to maintain as much{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_renewingmists.jpg"
          name="ReM"
          link="https://www.wowhead.com/spell=115151/renewing-mist"
        />{' '}
        as possible on your allies by never letting it reach 2 charges. This
        way, whenever unexpected damage occurs, you will at least have the
        option to use your{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_vivify.jpg"
          name="Vivify"
          link="https://www.wowhead.com/spell=116670/vivify"
        />{' '}
        cleave to top off the group. But in general, it's a good passive healing
        source that is worth using on cooldown.
      </Paragraph>
    </Section>
  )
}

export default HealingBasics
