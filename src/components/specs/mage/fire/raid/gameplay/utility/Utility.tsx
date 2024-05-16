import Section from '@shared/Section'
import Paragraph from '@shared/Paragraph'
import ItemLink from '@shared/Links/ItemLink'
import spells from '@shared/spells.json'
//import ItemLink from '@shared/Links/ItemLink'
//import items from '@shared/items.json'

function Utility() {
  return (
    <Section name="Utility">
      <Paragraph>
        Our last part will cover our utility, i won't mention much about{' '}
        <ItemLink item={spells['mage-bl']} />, just use it when it gives your
        team the most value and do not forget to use your second bloodlust, also
        5mn later you will have <ItemLink item={spells['mage-bl']} /> CD back as
        it's 5mn CD, but you'll still have 10mn exhaustion debuff. You need to
        still use your <ItemLink item={spells['mage-bl']} /> as mages can still
        benefit from their BL even with the debuff thanks to{' '}
        <ItemLink item={spells['mage-2dbl']} />.
      </Paragraph>
      <Paragraph>
        We have access to a very strong group buff{' '}
        <ItemLink item={spells['mage-arcane_intellect']} />, it has no CD and
        lasts an hour, don't forget to cast it everytime someone is missing it
        and when someone dies.
      </Paragraph>
      <Paragraph>
        Two interesting abilities that Mages have access to are{' '}
        <ItemLink item={spells['mage-remove_curse']} /> and{' '}
        <ItemLink item={spells['mage-spell_steal']} />, even tho their uses are
        pretty rare on raid scenarios.
      </Paragraph>
      <Paragraph>
        We also an interesting defensive for our group with{' '}
        <ItemLink item={spells['mage-mass_barrier']} /> (It only works on your
        group on raid fights), that can be switched to{' '}
        <ItemLink item={spells['mage-mass_invis']} /> if your team wants to go
        for unusual routes and may need a skip.
      </Paragraph>
      <Paragraph>
        Don't forget about <ItemLink item={spells['mage-slow_fall']} /> which is
        pretty helpfull on some scenarios to either do some skips or avoid fall
        damage. If you get movement speed, you can maintain in longer by casting
        slow fall on you and jumping just before your MS buff expires, it works
        even better if you can get to fly for longer as you will keep this
        movement speed buff as long as you fly. <br></br>
        You could for exemple mount, and just before beeing dismount entering
        any place, you could jump + slowfall to keep that MS for longer. Be
        creative with it, you can for exemple Dragonride on Nokhud to the last
        boss, and before beeing dismount by the map you can dismount yourself +
        slowfall so you can continue flying for as much as you want.<br></br>
        It's a bit tricky but you can also cancel your slowfall to fall faster
        and adjust your Y axis then cast another slowfall when you are at the
        needed height, which helps control your char better and can be pretty
        usefull.
      </Paragraph>
      <Paragraph>
        By the way, you can also negate fall damage with{' '}
        <ItemLink item={spells['mage-shimmer']} /> if you blink before hitting
        the ground, or even <ItemLink item={spells['mage-alter_time']} /> with
        good timing.
      </Paragraph>
    </Section>
  )
}

export default Utility
