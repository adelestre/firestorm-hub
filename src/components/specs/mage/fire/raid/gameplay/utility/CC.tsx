import Section from '@shared/Section'
import Paragraph from '@shared/Paragraph'
import ItemLink from '@shared/Links/ItemLink'
import spells from '@shared/spells.json'

function Cc() {
  return (
    <Section name="Crowd Control">
      <Paragraph>
        Mage have access to a lot of CC which can be pretty usefull on some raid
        fights.<br></br>
        <ItemLink item={spells['mage-dragons_breath']} /> is probably our most
        powerful CC, especially in combination with our talent{' '}
        <ItemLink item={spells['mage-time_manipulation']} />. While we are
        bursting we manage to cast a very nice amount of{' '}
        <ItemLink item={spells['fm-fireblast']} /> which allows us to reduce{' '}
        <ItemLink item={spells['mage-dragons_breath']} /> CD and cast several of
        them in a single pull.
      </Paragraph>
      <Paragraph>
        <ItemLink item={spells['mage-blast_wave']} /> is another mass CC that is
        pretty powerful, also interesting for its positionning purposes. In
        those situations you can also bring the talent{' '}
        <ItemLink item={spells['mage-volatile_detonation']} /> to greatly
        improve the pushback.
      </Paragraph>
      <Paragraph>
        Our last AOE interrupt to mention is{' '}
        <ItemLink item={spells['mage-ring_of_frost']} /> which you can spec into
        if your teams need even more CC.
      </Paragraph>
      <Paragraph>
        We also bring a ton of freezes through{' '}
        <ItemLink item={spells['mage-frost_nova']} /> or{' '}
        <ItemLink item={spells['mage-cone_of_cold']} /> that AOE slows or
        freezes if spec into <ItemLink item={spells['mage-freezing_cold']} />.
      </Paragraph>
      <Paragraph>
        Mage also have a spammable <ItemLink item={spells['mage-polymorph']} />.
        <br></br>
        Be aware that if you sheep someone it heals over time, it's sometimes
        worth to sheep it for the interrupt then instantly damage it (with{' '}
        <ItemLink item={spells['fm-fireblast']} /> for exemple) so the add
        starts moving again.
      </Paragraph>
      <Paragraph>
        Lastly, mage have access to a 40 yards silence on a 20 sec CD if you
        successfully interrupt a cast with{' '}
        <ItemLink item={spells['mage-counterspell']} /> thanks to{' '}
        <ItemLink item={spells['mage-quick_witted']} />.
      </Paragraph>
    </Section>
  )
}

export default Cc
