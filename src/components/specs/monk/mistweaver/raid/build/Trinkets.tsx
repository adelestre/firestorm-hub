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
        For Mythic+ there are several viable options for trinkets. Here's the
        better ones :
      </Paragraph>
      <List className="list-disc">
        <ListElement>
          <span className="font mb-1">Passive Trinkets :</span>
          <List className="list-disc">
            <ListElement>
              <ItemLink
                className="font-semibold"
                item={items['whisperingIcon']}
              />{' '}
              - Very strong passive haste and decent Vers/Crit proc.
            </ListElement>
            <ListElement>
              <ItemLink
                className="font-semibold"
                item={items['alacritousAlchemistStone']}
              />{' '}
              - Very strong Haste proc with a decent uptime.
            </ListElement>
            <ListElement>
              <ItemLink
                className="font-semibold"
                item={items['broodkeeperPromise']}
              />{' '}
              - Decent Vers for another melee player and strong passive healing.
            </ListElement>
          </List>
        </ListElement>
        <ListElement>
          <span className="mb-1">On-use Trinkets :</span>
          <List className="list-disc">
            <ListElement>
              <ItemLink className="font-semibold" item={items['hornOfValor']} />{' '}
              - Arguably the best stat on-use.
            </ListElement>
            <ListElement>
              <ItemLink
                className="font-semibold"
                item={items['conjuredChillglobe']}
              />{' '}
              - A decent option if you mana management issues.
            </ListElement>
          </List>
        </ListElement>
      </List>
    </Section>
  )
}

export default Trinkets
