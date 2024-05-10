import Section from '@shared/Section'
import Paragraph from '@shared/Paragraph'
import ItemLink from '@shared/Links/ItemLink'
import spells from '@shared/spells.json'
// import ItemLink from '@shared/Links/ItemLink'
// import spells from '@shared/spells.json'
//import ItemLink from '@shared/Links/ItemLink'
//import items from '@shared/items.json'

function CC() {
  return (
    <Section name="Crowd Control">
      <Paragraph>
        Mage have access to a lot of CC which is a mandatory part to master if
        you want to perform in M+.<br></br>
        <ItemLink item={spells['mage-dragons_breath']} /> is probably our most
        powerfull CC, especially in combination with our talent{' '}
        <ItemLink item={spells['mage-time_manipulation']} />. While we are
        bursting we manage to cast a very nice amount of{' '}
        <ItemLink item={spells['fm-fireblast']} /> which allows us to reduce{' '}
        <ItemLink item={spells['mage-dragons_breath']} /> CD and cast several of
        them in a single pull.
      </Paragraph>
      <Paragraph>
        <ItemLink item={spells['mage-blast_wave']} /> is another mass CC that is
        pretty powerfull, also interesting for its positionning purposes as it
        allows you to remove adds from Sanguine affix for exemple, in these
        situation you can also bring the talent{' '}
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
        Mage also have a spammable <ItemLink item={spells['mage-polymorph']} />,
       be aware though that using sheep on a target or using{' '}
        <ItemLink item={spells['mage-ring_of_frost']} />, you will get in
        combat. You can still pull out some skips using sheep and running when you
        need to so your group can safely follow you without being in combat,
        then invis to reset the add. You can also sheep casters if there is
        important casts you need to stop and you have your silence on CD and no
        way to interrupt it, and even use it when adds are casting in sanguine
        pools for exemple.
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

export default CC
