import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'

function HealingBasics() {
  return (
    <Section name="Healing Basics">
      <Paragraph>
        Mistweaver isn't great at healing damage you weren't prepared to heal
        outside of <ItemLink item={spells['mw-rev']} />. Luckily, most damage in
        the game is easy to predict. For the rest, all you can do is do your
        best to always be prepared for the worst. For that, the best is to
        maintain as much <ItemLink item={spells['mw-rem']} /> as possible on
        your allies by never letting it reach 2 charges. This way, whenever
        unexpected damage occurs, you will at least have the option to use your{' '}
        <ItemLink item={spells['monk-viv']} /> cleave to top off the group. But
        in general, it's a good passive healing source that is worth using on
        cooldown.
      </Paragraph>
    </Section>
  )
}

export default HealingBasics
