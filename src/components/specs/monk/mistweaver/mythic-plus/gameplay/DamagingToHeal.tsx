import ItemLink from '@shared/Links/ItemLink'
import Section from '@shared/Section'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'

function damagingToHeal() {
  return (
    <Section name="Damaging to heal ?">
      <Paragraph>
        Let's focus first on fundamentals and how Mistweaver heals in keys.
        Let's start with understanding where most of our healing comes from. I
        see a lot of Mistweavers using <ItemLink item={spells['monk-viv']} /> to
        spot heal or even for group healing every chance they get. But you need
        to evaluate the situation before losing a GCD (or even more if you don't
        have the <ItemLink item={spells['monk-viv']} />) because if the target
        is not under any threat of dying, it's way better to use damaging
        abilities and get them full in 2-3 GCD thanks to{' '}
        <ItemLink item={spells['mw-at']} /> and{' '}
        <ItemLink item={spells['mw-faeline']} />. This playstyle is a lot more
        efficient, it will greatly improve your mana consumption issues if you
        have any and your overall damage.
      </Paragraph>
      <Paragraph>
        But let's see how we want to use those damaging abilities that are at
        the core of our M+ gameplay.
      </Paragraph>
    </Section>
  )
}

export default damagingToHeal
