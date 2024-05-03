import Section from '@shared/Section'
import GearPiece from '@shared/GearPiece'
import Paragraph from '@shared/Paragraph'
import items from '@shared/items.json'

function FullBuild() {
  return (
    <Section name="Full Build Example">
      <Paragraph>
        Below you will find a possible items build for raids. Keep in mind that
        it's just an example of a combination of items and is not the only
        possibility. It is very high on Haste and Critical Strike and therefore
        aims for raw throughput instead of survavibility. Also, this is a raid
        build only and will not be the most competitive build for Mythic+.
      </Paragraph>
      <div className="space-top px-4 sm:grid sm:grid-cols-2">
        <div className="flex flex-col gap-1 ">
          <GearPiece
            item={{
              name: 'Gaze of the Waking Fist',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_helm_leather_raidmonkprimalist_d_01.jpg',
              link: 'https://www.wowhead.com/item=200363/gaze-of-the-waking-fist?bonus=1498',
              ilvl: 424,
            }}
            gems={[items['fierceIlimitedDiam']]}
          />
          <GearPiece
            item={{
              name: 'Elemental Lariat',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_necklace_necklace1_color3.jpg',
              link: 'https://www.wowhead.com/item=193001/elemental-lariat?bonus=8792:9365:8846:9404',
              ilvl: 418,
            }}
            gems={[
              items['craftyAlexstrazite'],
              items['craftyAlexstrazite'],
              items['craftyAlexstrazite'],
            ]}
          />
          <GearPiece
            item={{
              name: 'Mantle of the Waking Fist',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_leather_raidmonkprimalist_d_01.jpg',
              link: 'https://www.wowhead.com/item=203539/mantle-of-the-waking-fist?bonus=1498',
              ilvl: 424,
            }}
          />
          <GearPiece
            item={{
              name: 'Cape of Entanglement',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_cape_pandaria_c_02.jpg',
              link: 'https://www.wowhead.com/item=81084/cape-of-entanglement',
              ilvl: 421,
            }}
            enchant={items['gracefulAvoidance']}
          />
          <GearPiece
            item={{
              name: 'Chestwrap of the Waking Fist',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_leather_raidmonkprimalist_d_01.jpg',
              link: 'https://www.wowhead.com/item=200360/chestwrap-of-the-waking-fist?bonus=1498',
              ilvl: 421,
            }}
            enchant={items['wakingStats']}
          />
          <GearPiece
            item={{
              name: "Adorned Guardian's Bracers",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_bracer_leather_legiondungeon_c_01.jpg',
              link: 'https://www.wowhead.com/item=133621/adorned-guardians-bracers',
              ilvl: 421,
            }}
            gems={[items['craftyAlexstrazite']]}
            enchant={items['devoLeech']}
          />
          <GearPiece
            item={{
              name: "Portal Ripper's Staff",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_staff_2h_draenordungeon_c_03.jpg',
              link: 'https://www.wowhead.com/item=110039/portal-rippers-staff',
              ilvl: 421,
            }}
            enchant={items['sophicDevo']}
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <GearPiece
            item={{
              name: 'Palms of the Waking Fist',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_glove_leather_raidmonkprimalist_d_01.jpg',
              link: 'https://www.wowhead.com/item=200362/palms-of-the-waking-fist',
              ilvl: 421,
            }}
          />
          <GearPiece
            item={{
              name: 'Belt of Burning Focus',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_leather_draenordungeon_c_01belt.jpg',
              link: 'https://www.wowhead.com/item=109829/belt-of-burning-focus',
              ilvl: 421,
            }}
            gems={[items['craftyAlexstrazite']]}
          />
          <GearPiece
            item={{
              name: 'Loathsome Thunderhosen',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_pant_leather_raidmonkprimalist_d_01.jpg',
              link: 'https://www.wowhead.com/item=195530/loathsome-thunderhosen',
              ilvl: 424,
            }}
            enchant={items['frozenSpellthread']}
          />
          <GearPiece
            item={{
              name: 'Toxic Thorn Footwraps',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_leather_dragondungeon_c_01_boot.jpg',
              link: 'https://www.wowhead.com/item=193452/toxic-thorn-footwraps?bonus=9404:8846',
              ilvl: 418,
            }}
            enchant={items['watchersLoam']}
          />
          <GearPiece
            item={{
              name: 'Signet of Dancing Jade',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_154.jpg',
              link: 'https://www.wowhead.com/item=144114/signet-of-dancing-jade',
              ilvl: 421,
            }}
            gems={[items['craftyAlexstrazite']]}
            enchant={items['devoCrit']}
          />
          <GearPiece
            item={{
              name: 'Onyx Annulet',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_dungeonjewelry_primalist_ring_4_omni.jpg',
              link: 'https://www.wowhead.com/item=203460/onyx-annulet',
              ilvl: 424,
            }}
            gems={[
              items['delugingWater'],
              items['exudingSteam'],
              items['wildSpirit'],
            ]}
          />
          <GearPiece
            item={{
              name: 'Horn of Valor',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_horn_03.jpg',
              link: 'https://www.wowhead.com/item=133642/horn-of-valor',
              ilvl: 421,
            }}
          />
          <GearPiece
            item={{
              name: 'Whispering Incarnate Icon',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_dungeonjewelry_primalist_necklace_1_omni.jpg',
              link: 'https://www.wowhead.com/item=194301/whispering-incarnate-icon?bonus=1498',
              ilvl: 421,
            }}
          />
        </div>
      </div>
    </Section>
  )
}

export default FullBuild
