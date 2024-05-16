import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import SpellRotation from '@shared/spell-rotation/SpellRotation'
import SpellRotationElement from '@shared/spell-rotation/SpellRotationElement'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'
import SpellRotationIcon from '@shared/spell-rotation/SpellRotationIcon'

function STRotation() {
  return (
    <Section name="ST damage rotation">
      <Paragraph>
        Our ST damage rotation will heavely depend on our ability to generate as
        much <ItemLink item={spells['fm-HotStreak']} />, we will use these procs
        to instant cast <ItemLink item={spells['fm-pyro']} />. The goal is to
        chain as much crit as possible so we have a ton of{' '}
        <ItemLink item={spells['fm-HotStreak']} /> buffs, which will allow us to
        have free 6 sec <ItemLink item={spells['fm-combustion']} /> windows
        though <ItemLink item={spells['fm-skb']} />.
      </Paragraph>
      <Paragraph>
        Basically after using 8 <ItemLink item={spells['fm-HotStreak']} />, we
        will have our <ItemLink item={spells['fm-skb']} /> ready which means
        that we will need to hardcast a <ItemLink item={spells['fm-pyro']} />{' '}
        that will have 260% aditionnal damage and give us a 6 sec combustion.
      </Paragraph>
      <Paragraph>
        On top of generating instant <ItemLink item={spells['fm-pyro']} /> and{' '}
        <ItemLink item={spells['fm-skb']} />, criting will allow us to get more
        bursts in thanks to <ItemLink item={spells['fm-kindling']} />. Good fire
        mages once they reach enough haste are supposed to maintain{' '}
        <ItemLink item={spells['fm-combustion']} /> for as long as possible.
      </Paragraph>
      <Paragraph>
        Lastly, try to use <ItemLink item={spells['mage-shifting_power']} /> as
        much as possible, but always out of combustion and SKB to not waste
        precious seconds of it.
      </Paragraph>
      <Paragraph>
        Once you run out of <ItemLink item={spells['fm-pf']} /> and{' '}
        <ItemLink item={spells['fm-fireblast']} /> charges and that you already
        used <ItemLink item={spells['mage-dragons_breath']} /> and{' '}
        <ItemLink item={spells['mage-shifting_power']} />, you can start sending{' '}
        <ItemLink item={spells['fm-fireball']} /> as it's our best spell to
        generate crits once we burnt every other thing because of the talent{' '}
        <ItemLink item={spells['fm-pyrotechnics']} />.
      </Paragraph>
      <Paragraph>
        If you get <ItemLink item={spells['fm-hyperthermia']} /> to proc, you
        basically spam <ItemLink item={spells['fm-pyro']} /> hard until it runs
        out.
      </Paragraph>
      <Paragraph>
        We will now dive into the opener and basic rotation. Our simplified goal
        will be during our burst windows (
        <ItemLink item={spells['fm-skb']} /> or{' '}
        <ItemLink item={spells['fm-combustion']} />) to send our instant{' '}
        <ItemLink item={spells['fm-pyro']} />, then use a GC, then instant{' '}
        <ItemLink item={spells['fm-pyro']} />, GC, repeat until out of GC. Once
        out of GC, we will use <ItemLink item={spells['fm-scorch']} /> as it's
        our fastest cast on fire.
      </Paragraph>
    </Section>
  )
}

export default STRotation
