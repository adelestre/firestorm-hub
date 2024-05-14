import Paragraph from '@shared/Paragraph'
import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import spells from '@shared/spells.json'

function ShiftingPower() {
  return (
    <Section name="Shifting Power minmaxing">
      <Paragraph>
        Most of the times <ItemLink item={spells['mage-shifting_power']} /> is
        used to reduce our CDs. Try to cast it while you are in range to damage
        ennemies, especially in AOE scenarios as its a good dps gain, rather
        than casting it far away and wasting damage.
      </Paragraph>
      <Paragraph>
        Try to always use Shifting Power while{' '}
        <ItemLink item={spells['fm-combustion']} /> is on CD, never cast it if
        you have <ItemLink item={spells['fm-combustion']} /> as its a big waste.
        It's even better if you cast is with no{' '}
        <ItemLink item={spells['fm-fireblast']} /> charges left and low or none{' '}
        <ItemLink item={spells['fm-pf']} /> charges so you get even more value
        out of it.
      </Paragraph>
      <Paragraph>
        You will often find yourself overcapping{' '}
        <ItemLink item={spells['fm-fireblast']} /> charges (especially with very
        high haste, ex double Lust) as Shifting Power will refund too much
        charges. <br></br>
        Try to use your <ItemLink item={spells['fm-fireblast']} /> before
        reaching 3 stacks while casting{' '}
        <ItemLink item={spells['mage-shifting_power']} />, it is free damage,
        help maintain <ItemLink item={spells['fm-feelTheBurn']} /> stacks, and
        contribute to our <ItemLink item={spells['fm-HotStreak']} /> generation,
        which means more SKBs and Combusts.
      </Paragraph>
    </Section>
  )
}

export default ShiftingPower
