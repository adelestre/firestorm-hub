import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import TextLink from '@shared/Links/TextLink'
import List from '@shared/list/List'
import ListElement from '@shared/list/ListElement'
import Paragraph from '@shared/Paragraph'
import items from '@shared/items.json'

function Cons() {
  return (
    <Section name="Enchantments / Consumables">
      <Section name="Gems">
        <Paragraph>
          As seen with Lariat, it is advised to run either{' '}
          <ItemLink item={items['energizedMalygite']} /> or{' '}
          <ItemLink item={items['craftyAlexstrazite']} /> to get haste procs
          with <ItemLink item={items['lariat']} /> (
          <ItemLink item={items['craftyYsemerald']} /> can also be good in you
          reached Haste soft cap). If you don't have this embellishment, you can
          equip gems for their stats depending on your needs.
        </Paragraph>
        <Paragraph>
          You should also consider equipping 1 Primalist gem (the{' '}
          <TextLink
            link="https://www.wowhead.com/items/gems/primordial-stone"
            text={<i>Illimited Diamonds</i>}
          />
          ), but keep in mind that it's not considered an elemental gem and will
          make you lose uptime on Lariat compared to a normal gem.
        </Paragraph>
        <Paragraph>
          I personnaly run 8 <ItemLink item={items['craftyYsemerald']} /> so my
          Lariat procs last 13 sec (5 sec baseline + 1 sec per gem). But Running{' '}
          <ItemLink item={items['fierceIlimitedDiam']} /> is also a very good
          option (maybe even better).
        </Paragraph>
      </Section>
      <Section name="Back / Wrists">
        <Paragraph>
          Avoidance is overall the best tertiary stat. As long as you don't hit
          the hard cap of 20%, you should enchants your cloak with{' '}
          <ItemLink item={items['fortAvoidance']} /> and your bracers with{' '}
          <ItemLink item={items['devoAvoidance']} />. If you hit the hard cap,
          you should enchant your cloak with{' '}
          <ItemLink item={items['writOfLeech']} /> and your bracers with{' '}
          <ItemLink item={items['devoLeech']} />
        </Paragraph>
      </Section>
      <Section name="Chest">
        <Paragraph>
          For the chest, you should enchant it with{' '}
          <ItemLink item={items['wakingStats']} />. It's the best option for
          both damage and healing output.
        </Paragraph>
      </Section>
      <Section name="Legs">
        <Paragraph>
          For the legs, you have 2 options, the best for M+ is{' '}
          <ItemLink item={items['tempSpellthread']} />, but if you also want to
          raid, you should go for <ItemLink item={items['frozenSpellthread']} />{' '}
          instead as it's mandatory for raiding.
        </Paragraph>
      </Section>
      <Section name="Feet">
        <Paragraph>
          Not many good options for boots, we don't need mobility so we take{' '}
          <ItemLink item={items['watchersLoam']} />.
        </Paragraph>
      </Section>
      <Section name="Fingers">
        <Paragraph>
          For rings we just take whatever stat we need most,{' '}
          <ItemLink item={items['devoHaste']} />,{' '}
          <ItemLink item={items['devoVers']} /> or{' '}
          <ItemLink item={items['devoCrit']} />
        </Paragraph>
      </Section>
      <Section name="Weapons">
        <Paragraph>
          For weapons, you should go for <ItemLink item={items['sophicDevo']} />
          . It's the best option for both damage and healing output, nothing
          else to say.
        </Paragraph>
      </Section>
      <Section name="Consumables">
        <Paragraph>
          There's a lot of ways to gain stats outside of gear, and that's
          through consumable. It is fairly expensive but it is very important to
          maximize your character. Here's all you can use :{' '}
        </Paragraph>
        <List className="list-disc font-semibold">
          <ListElement>
            <ItemLink item={items['phialVers']} />
          </ListElement>
          <ListElement className="text-left">
            <ItemLink item={items['timelyDemise']} /> /{' '}
            <ItemLink item={items['seamothSurprise']} /> /{' '}
            <ItemLink item={items['hoardDelicacies']} />
          </ListElement>
          <ListElement>
            <ItemLink item={items['howlingRune']} />
          </ListElement>
          <ListElement>
            <ItemLink item={items['draconicRune']} />
          </ListElement>
        </List>
        <Paragraph>
          As for combat potions, the best option is{' '}
          <ItemLink item={items['shockingDisclo']} /> as it is an important
          damage output in AoE. You could use the{' '}
          <ItemLink item={items['ultimatePowerPotion']} /> instead if you want a
          more versatile choice.
        </Paragraph>
      </Section>
    </Section>
  )
}

export default Cons
