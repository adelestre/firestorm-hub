import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Paragraph from '@shared/Paragraph'
import items from '@shared/items.json'
import spells from '@shared/spells.json'

function Embellishments() {
  return (
    <Section name="Embellishments">
      <Paragraph>
        <ItemLink item={items['lariat']} /> is the best option by far. Lariat is
        a very strong stat proc that you can control with your socketed gems. As
        we usually want haste procs, you will have to equip only air gems. If
        you get gems to proc different bonuses, you lose a ton of uptime overall
        and especially uptime on your bis stat.<br></br>
        <Paragraph>
          I did a ton of testing as for <ItemLink item={items['lariat']} /> on
          fire mage and it's much stronger imo to run{' '}
          <ItemLink item={items['quickYsemerald']} />
          on your sockets to stack a crazy amount of haste, rather than
          bi-elemental gems as you do on most specs. Haste has very good value
          on fire and we NEED our <ItemLink item={items['lariat']} /> to proc
          haste buff.
          <br></br>Again, on firestorm the buff procs as soon as you pull on
          most scenarios which makes it even more valuable as it makes your
          burst stronger and also the damage that follows, are you will have
          much more <ItemLink item={spells['fm-skb']} /> stacks and more{' '}
          <ItemLink item={spells['fm-combustion']} /> though{' '}
          <ItemLink item={spells['fm-kindling']} />.
        </Paragraph>
      </Paragraph>
      <Paragraph>
        As for the second embellishment, the only viable option for now even tho
        it's not that strong is <ItemLink item={items['blueSilkenLining']} />,
        other options are weaker.{' '}
        <ItemLink item={items['potionAbsorptionInhibitor']} /> could probably be
        much better especially if you equip{' '}
        <ItemLink item={items['alacritousAlchemistStone']} />, but it's bugged
        for now and doesn't work on Firestorm, the potion duration isn't
        increased at all.
      </Paragraph>
    </Section>
  )
}

export default Embellishments
