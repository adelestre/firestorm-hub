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
          As seen with Lariat, you should run{' '}
          <ItemLink item={items['quickYsemerald']} /> gems only to get haste
          procs with <ItemLink item={items['lariat']} />.
        </Paragraph>
        <Paragraph>
          You should also consider equipping 1 Primalist gem (the{' '}
          <TextLink
            link="https://www.wowhead.com/item=192985/fierce-illimited-diamond"
            text={<i>fierce Illimited Diamonds</i>}
          />
          ), but keep in mind that it's not considered an elemental gem and will
          make you lose uptime on Lariat compared to a normal gem. This is why i
          personnally find it better to go with full{' '}
          <ItemLink item={items['quickYsemerald']} />.
        </Paragraph>
        <Paragraph>
          I personnaly run 8 <ItemLink item={items['quickYsemerald']} /> which
          not only allows to proc <ItemLink item={items['lariat']} /> for 13
          sec, it also makes <ItemLink item={items['idolOfTheDreamer']} /> much
          stronger.
        </Paragraph>
      </Section>
      <Section name="Back / Wrists">
        <Paragraph>
          Avoidance is overall the best tertiary stat to reduce the incoming
          damage and prevent some one shots. You should enchants your cloak with{' '}
          <ItemLink item={items['fortAvoidance']} /> and your bracers with{' '}
          <ItemLink item={items['devoAvoidance']} />.
        </Paragraph>
      </Section>
      <Section name="Chest">
        <Paragraph>
          For the chest, you should enchant it with{' '}
          <ItemLink item={items['wakingStats']} />.
        </Paragraph>
      </Section>
      <Section name="Legs">
        <Paragraph>
          For the legs you should go for either{' '}
          <ItemLink item={items['frozenSpellthread']} />.
        </Paragraph>
      </Section>
      <Section name="Feet">
        <Paragraph>
          For the feets <ItemLink item={items['plainsRunnerBreeze']} /> or{' '}
          <ItemLink item={items['watchersLoam']} /> based on personnal
          preference. I rather go for{' '}
          <ItemLink item={items['plainsRunnerBreeze']} /> as 130 stamina is low
          imo since i already have more than 20 000, speed can be handy and is
          my personal choice as for this part.
        </Paragraph>
      </Section>
      <Section name="Fingers">
        <Paragraph>
          For rings we just take haste stat as it's by far better:{' '}
          <ItemLink item={items['devoHaste']} />.
        </Paragraph>
      </Section>
      <Section name="Weapons">
        <Paragraph>
          For weapons, you should go for <ItemLink item={items['sophicDevo']} />
          . It's the best option damage-wise.
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
            <ItemLink item={items['phialVers']} /> - It is our best flask
            damage-wise and makes ur tankier. It also makes our barriers
            stronger.
          </ListElement>
          <ListElement className="text-left">
            <ItemLink item={items['timelyDemise']} /> /{' '}
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
          <ItemLink item={items['ultimatePowerPotion']} />.
        </Paragraph>
      </Section>
    </Section>
  )
}

export default Cons
