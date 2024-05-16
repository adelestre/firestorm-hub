import Section from '@shared/Section'
import GearPiece from '@shared/GearPiece'
import Paragraph from '@shared/Paragraph'
import items from '@shared/items.json'

function FullBuild() {
  return (
    <Section name="Full Build Example">
      <Paragraph>
        Below you will find a possible item build for both raid and M+. Keep in
        mind that it's just an example of a combination of items, my personal
        advices are to go heavy on haste and versa for both raid and M+. On all
        crafted gear (ex ring) we obviously go Haste & Vers.
      </Paragraph>
      <div className="space-top px-4 sm:grid sm:grid-cols-2">
        <div className="flex flex-col gap-1 ">
          <GearPiece
            item={{
              name: "Crystal Scholar's Cowl",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_cloth_raidmageprimalist_d_01_helm.jpg',
              link: 'https://www.wowhead.com/item=200318/crystal-scholars-cowl',
              ilvl: 424,
            }}
            gems={[items['quickYsemerald']]}
          />
          <GearPiece
            item={{
              name: 'Elemental Lariat',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_necklace_necklace1_color3.jpg',
              link: 'https://www.wowhead.com/item=193001/elemental-lariat?bonus=8792:9365:8846:9404',
              ilvl: 418,
            }}
            gems={[
              items['quickYsemerald'],
              items['quickYsemerald'],
              items['quickYsemerald'],
            ]}
          />
          <GearPiece
            item={{
              name: "Crystal Scholar's Beacons",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_cloth_raidmageprimalist_d_01_shoulder.jpg',
              link: 'https://www.wowhead.com/item=200320/crystal-scholars-beacons',
              ilvl: 424,
            }}
          />
          <GearPiece
            item={{
              name: "Decorated Commander's Cindercloak",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_cape_leather_raidmonkprimalist_d_01.jpg',
              link: 'https://www.wowhead.com/item=195482/decorated-commanders-cindercloak',
              ilvl: 415,
            }}
            enchant={items['gracefulAvoidance']}
          />
          <GearPiece
            item={{
              name: "Crystal Scholar's Tunic",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_cloth_raidmageprimalist_d_01_chest.jpg',
              link: 'https://www.wowhead.com/item=200315/crystal-scholars-tunic',
              ilvl: 421,
            }}
            enchant={items['wakingStats']}
          />
          <GearPiece
            item={{
              name: 'Vibrant Wildercloth Wristwraps',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_cloth_dragonpvp_d_01_bracer.jpg',
              link: 'https://www.wowhead.com/item=193510/vibrant-wildercloth-wristwraps',
              ilvl: 418,
            }}
            gems={[items['quickYsemerald']]}
            enchant={items['devoAvoidance']}
          />
          <GearPiece
            item={{
              name: "Tz'onna, Fear-Striker",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_sword_1h_drakonid_c_01.jpg',
              link: 'https://www.wowhead.com/item=193632/tzonna-fear-striker',
              ilvl: 421,
            }}
            enchant={items['sophicDevo']}
          />
          <GearPiece
            item={{
              name: 'Scripture of Primal Devotion',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_offhand_1h_primalistraid_d_01.jpg',
              link: 'https://www.wowhead.com/item=195513/scripture-of-primal-devotion',
              ilvl: 421,
            }}
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <GearPiece
            item={{
              name: "Crystal Scholar's Pageturners",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_cloth_raidmageprimalist_d_01_glove.jpg',
              link: 'https://www.wowhead.com/item=200317/crystal-scholars-pageturners',
              ilvl: 421,
            }}
          />
          <GearPiece
            item={{
              name: "Crystal Scholar's Cinch",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_cloth_raidmageprimalist_d_01_belt.jpg',
              link: 'https://www.wowhead.com/item=200321/crystal-scholars-cinch',
              ilvl: 418,
            }}
            gems={[items['quickYsemerald']]}
          />
          <GearPiece
            item={{
              name: 'Suramar Magistrate Leggings',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_pant_cloth_legiondungeon_c_01.jpg',
              link: 'https://www.wowhead.com/item=137496/suramar-magistrate-leggings',
              ilvl: 421,
            }}
            enchant={items['frozenSpellthread']}
          />
          <GearPiece
            item={{
              name: 'Sandals of the Wild Sovereign',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_cloth_raidmageprimalist_d_01_boot.jpg',
              link: 'Sandals of the Wild Sovereign',
              ilvl: 424,
            }}
            enchant={items['plainsRunnerBreeze']}
          />
          <GearPiece
            item={{
              name: 'Signet of Titanic Insight',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_rings_ring2_color3.jpg',
              link: 'https://www.wowhead.com/item=192999/signet-of-titanic-insight',
              ilvl: 418,
            }}
            gems={[items['quickYsemerald']]}
            enchant={items['devoCrit']}
          />
          <GearPiece
            item={{
              name: "Emissary's Flamewrought Seal",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_dungeonjewelry_primalist_ring_1_fire.jpg',
              link: 'https://www.wowhead.com/item=201992/emissarys-flamewrought-seal?bonus=1498',
              ilvl: 421,
            }}
            gems={[items['quickYsemerald']]}
            enchant={items['devoCrit']}
          />
          <GearPiece
            item={{
              name: 'Idol of the Dreamer',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_trinket_stonedragon1_color2.jpg',
              link: 'https://www.wowhead.com/item=193005/idol-of-the-dreamer',
              ilvl: 418,
            }}
          />
          <GearPiece
            item={{
              name: 'Alacritous Alchemist Stone',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_alchemystone_color1.jpg',
              link: 'https://www.wowhead.com/item=191492/alacritous-alchemist-stone',
              ilvl: 421,
            }}
          />
        </div>
      </div>
    </Section>
  )
}

export default FullBuild
