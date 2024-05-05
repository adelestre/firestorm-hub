import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'
import items from '@shared/items.json'
import SpellRotationElement from '@shared/spell-rotation/SpellRotationElement'
import SpellRotationIcon from '@shared/spell-rotation/SpellRotationIcon'
import SpellRotation from '@shared/spell-rotation/SpellRotation'
// import { HiOutlineChartSquareBar } from 'react-icons/hi'

function FaelineStomp() {
  return (
    <Section name="Fire basics">
      <Paragraph>
        I will start with the extreme basis of fire for players that may be new
        to the spec. Fire mage plays heavely arround chaining crits to do damage
        so we can proc <ItemLink item={spells['fm-HotStreak']} /> which allows
        us to cast either an instant <ItemLink item={spells['fm-pyro']} /> or{' '}
        <ItemLink item={spells['fm-fs']} />, with doubled ignite damage.
      </Paragraph>
      <Paragraph>
        To proc <ItemLink item={spells['fm-HotStreak']} /> we need two crits{' '}
        <span style={{ textDecoration: 'underline' }}>in a row</span>, if we get
        a single crit then a non-crit, we will lose our{' '}
        <ItemLink item={spells['fm-heating']} /> buff. This is why it's
        important to crit twice in a row.
      </Paragraph>
      <Paragraph>
        Thanksfully, fire has some spells that are guaranteed to crit. First,{' '}
        <ItemLink item={spells['fm-combustion']} /> gives us 100% crit chance
        which allows us to crit all our fire spells and build{' '}
        <ItemLink item={spells['fm-HotStreak']} /> much easier. In addition to
        it, we have spells that always crit even outside of combust, such as{' '}
        <ItemLink item={spells['fm-fireblast']} /> which is a very important
        spell to fire and is part of the keys to master fire mage.<br></br>
        On top of <ItemLink item={spells['fm-fireblast']} />, we can use{' '}
        <ItemLink item={spells['fm-pf']} /> if talented into{' '}
        <ItemLink item={spells['fm-phoenixReborn']} />, and{' '}
        <ItemLink item={spells['mage-dragons_breath']} /> if talented into{' '}
        <ItemLink item={spells['fm-alexstraszasFury']} />. Lastly, we also have{' '}
        <ItemLink item={spells['fm-scorch']} /> when our target is below 30% HP
        threshold with our talent <ItemLink item={spells['fm-searing_touch']} />
        <br></br>
        From now on, we will call all these guaranteed crit spells GC to make
        things easier to explain.
      </Paragraph>
      <Paragraph>
        Last thing to keep in mind for now as fire mage is to track and maintain
        our buff <ItemLink item={spells['fm-feelTheBurn']} />. To do this, you
        need to space your <ItemLink item={spells['fm-fireblast']} /> and{' '}
        <ItemLink item={spells['fm-pf']} /> and manage their economy in order to
        always have either of those to refresh this buff. It will allow us to
        increase our ignite damage and is even more valuable in AOE, but it
        still is very good on ST.<br></br>
        For this reason we will switch between{' '}
        <ItemLink item={spells['fm-fireblast']} /> and{' '}
        <ItemLink item={spells['fm-pf']} /> to make sure we never waste a stack
        sitting with 3 stacks of either of them. <br></br>
        We need atleast one charge of each on CD to not waste any value out of
        them.
      </Paragraph>
    </Section>
  )
}

export default FaelineStomp
