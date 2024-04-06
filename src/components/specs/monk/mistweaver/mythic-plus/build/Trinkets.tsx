import Section from '../../../../../shared/Section'
import ItemLink from '../../../../../shared/Links/ItemLink'
import List from '../../../../../shared/list/List'
import ListElement from '../../../../../shared/list/ListElement'
import Paragraph from '../../../../../shared/Paragraph'

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
                icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_dungeonjewelry_primalist_necklace_1_omni.jpg"
                name="Whispering Incarnate Icon"
                link="https://www.wowhead.com/item=194301/whispering-incarnate-icon"
              />{' '}
              - Very strong passive haste and decent Vers/Crit proc.
            </ListElement>
            <ListElement>
              <ItemLink
                className="font-semibold"
                icon="https://wow.zamimg.com/images/wow/icons/large/inv_alchemy_crystalvial.jpg"
                name="Flask of the Solemn Night"
                link="https://www.wowhead.com/item=137484/flask-of-the-solemn-night"
              />{' '}
              - Very strong Haste proc but low uptime.
            </ListElement>
            <ListElement>
              <ItemLink
                className="font-semibold"
                icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_dungeonjewelry_primalist_trinket_3_omni.jpg"
                name="Broodkeeper's Promise"
                link="https://www.wowhead.com/item=194307/broodkeepers-promise"
              />{' '}
              - Decent Vers for another melee player and strong passive healing.
            </ListElement>
          </List>
        </ListElement>
        <ListElement>
          <span className="mb-1">On-use Trinkets :</span>
          <List className="list-disc">
            <ListElement>
              <ItemLink
                className="font-semibold"
                icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_horn_03.jpg"
                name="Horn of Valor"
                link="https://www.wowhead.com/item=133642/horn-of-valor"
              />{' '}
              - Arguably the best stat on-use.
            </ListElement>
            <ListElement>
              <ItemLink
                className="font-semibold"
                icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_web_01.jpg"
                name="Iceblood Deathsnare"
                link="https://www.wowhead.com/item=194304/iceblood-deathsnare"
              />{' '}
              - Very strong AoE damage on-use.
            </ListElement>
            <ListElement>
              <ItemLink
                className="font-semibold"
                icon="https://wow.zamimg.com/images/wow/icons/large/paladin_holy.jpg"
                name="Mote of Sanctification"
                link="https://www.wowhead.com/item=133646/mote-of-sanctification"
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
