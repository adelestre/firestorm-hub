import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import List from '@shared/list/List'
import ListElement from '@shared/list/ListElement'
import Paragraph from '@shared/Paragraph'
import items from '@shared/items.json'

function Trinkets() {
  return (
    <Section name="Trinkets">
      <Paragraph>
        For Mythic+ there are several viable options for trinkets. Here are the
        best ones :
      </Paragraph>
      <List className="list-disc">
        <ListElement>
          <span className="font mb-1">Passive Trinkets :</span>
          <List className="list-disc">
            <ListElement>
              <ItemLink className="font-semibold" item={items['oce']} /> - Very
              Insane haste permanent buff and gives intellect. There's not a
              better stat trinket in the game
            </ListElement>
            <ListElement>
              <ItemLink className="font-semibold" item={items['rashok']} /> -
              Best healer trinket of all time. When it procs, it gives mana
              back, heals or gives an insane vers buff to everyone if full hp.
            </ListElement>
            <ListElement>
              <ItemLink className="font-semibold" item={items['neltCallDom']} />{' '}
              Very good trinket, sadly overshadowed by the other two. It gives a
              very very strong Celestial window by giving a ridiculous amount of
              intellect.
            </ListElement>
          </List>
        </ListElement>
        <ListElement>
          <span className="mb-1">On-use Trinkets :</span>
          <List className="list-disc">
            <ListElement>
              <ItemLink className="font-semibold" item={items['talisman']} /> -
              A very strong defensive trinket on a very low cooldown.
            </ListElement>
            <ListElement>
              <ItemLink className="font-semibold" item={items['ward']} /> A
              decent external on 2 min CD. It can be very good in some situaions
            </ListElement>
          </List>
        </ListElement>
      </List>
      <Paragraph>
        I usually run <ItemLink className="font-semibold" item={items['oce']} />{' '}
        and <ItemLink className="font-semibold" item={items['rashok']} />. I
        really like{' '}
        <ItemLink className="font-semibold" item={items['talisman']} /> but
        since we're already extremely tanky, especially with{' '}
        <ItemLink className="font-semibold" item={items['sporecloak']} />, I
        wouldn't run it every key.
      </Paragraph>
    </Section>
  )
}

export default Trinkets
