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
                item={items['flaskSolemnNight']}
              />{' '}
              - Very strong Haste proc but low uptime.
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
              <ItemLink className="font-semibold" item={items['deathsnare']} />{' '}
              - Very strong AoE damage on-use.
            </ListElement>
            <ListElement>
              <ItemLink
                className="font-semibold"
                item={items['moteOfSanctification']}
              />{' '}
              - Strong on-use heal that can be viable in some keys with intense
              and recurring AoE damage (Fortified Ruby Life Pools for example).
            </ListElement>
          </List>
        </ListElement>
      </List>
      <Paragraph>
        I usually run Icon + Horn but any combination can be played depending on
        your needs.
      </Paragraph>
    </Section>
  )
}

export default Trinkets
