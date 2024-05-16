import Section from '@shared/Section'
import Paragraph from '@shared/Paragraph'
import ItemLink from '@shared/Links/ItemLink'
import spells from '@shared/spells.json'
//import ItemLink from '@shared/Links/ItemLink'
//import items from '@shared/items.json'

function Mobility() {
  return (
    <Section name="Mobility">
      <Paragraph>
        Our ability is worth mentioning as Mage are probably the most mobile
        caster in game currently.
      </Paragraph>
      <Paragraph>
        We have access to instant blinks{' '}
        <ItemLink item={spells['mage-shimmer']} /> that we can use meanwhile we
        are casting without interrompting our casts which is super cool. Having
        two stacks of these feels insane, it allows us to skip some mechanics
        pretty easely, blink to the other side of a beam or whatever, or
        continue dpsing instead of interrupting casts and losing damage.
      </Paragraph>
      <Paragraph>
        <ItemLink item={spells['mage-alter_time']} /> is probably one of the
        best abilities in the game when it comes to mobility. Not only it allows
        you to teleport back up to 100 yards of range, it also refreshes a stack
        of <ItemLink item={spells['mage-shimmer']} /> when you teleport back.
        <br></br>
        There is also insane amount of mechanics you can skip thanks to alter
        time in order to avoid damage, increase your DPS uptime or do some
        mechanics.
      </Paragraph>
      <Paragraph>
        Mages also get passive movement speed when casting either{' '}
        <ItemLink item={spells['mage-shimmer']} /> or{' '}
        <ItemLink item={spells['mage-alter_time']} /> thanks to{' '}
        <ItemLink item={spells['mage-temporal_velocity']} />, which gives 20% MS
        every time you cast a blink, or 40% when you alter back. Note that it
        doesn't stack, so when you need to run a lot, it's better to space your
        blinks by 3 seconds in order to not waste that movement speed. <br></br>
        We can also get our <ItemLink item={spells['mage-greater_invis']} /> to
        give us 40% MS though{' '}
        <ItemLink item={spells['mage-incantation_of_swiftness']} /> if needed.
      </Paragraph>
      <Paragraph>
        It is also worth mentionning that{' '}
        <ItemLink item={spells['fm-scorch']} /> gives you 30% MS though{' '}
        <ItemLink item={spells['fm-improved_scorch']} /> that you can pretty
        much spam until the target dies. On boss fights its pretty helpfull, and
        if you get your cheat death to proc{' '}
        <ItemLink item={spells['fm-cauterize']} /> will give you 150% extra
        movement speed which allows you to greatly out run anything, including
        bosses if your tank dies, which has happen to clutch some battle res or
        even some precious seconds to finish a boss.
      </Paragraph>
    </Section>
  )
}

export default Mobility
