import Section from '@shared/Section'
import GearPiece from '@shared/GearPiece'
import Paragraph from '@shared/Paragraph'
import items from '@shared/items.json'

function FullBuild() {
  return (
    <Section name="Full Build Example">
      <Paragraph>
        Below you will find a possible items build for high end raids. Keep in
        mind that it's just an example of a combination of items and is not the
        only possibility. It is very high on Versatility and low on Critical
        Strike and therefore aims for survavibility instead of raw output. Also,
        this is a M+ build only and will not be the most competitive build for
        raiding.
      </Paragraph>
      <div className="space-top px-4 sm:grid sm:grid-cols-2">
        <div className="flex flex-col gap-1 ">
          <GearPiece
            item={{
              name: 'Steelgazer Hide Hood',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_helm_leather_legionendgame_c_01.jpg',
              link: 'https://www.wowhead.com/item=134152/steelgazer-hide-hood?bonus=9021',
              ilvl: 447,
            }}
            gems={[items['fierceIlimitedDiam']]}
          />
          <GearPiece
            item={{
              name: 'Elemental Lariat',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_necklace_necklace1_color3.jpg',
              link: 'https://www.wowhead.com/item=193001/elemental-lariat?bonus=8792:9365:9376:9405',
              ilvl: 447,
            }}
            gems={[
              items['craftyYsemerald'],
              items['craftyYsemerald'],
              items['craftyYsemerald'],
            ]}
          />
          <GearPiece
            item={{
              name: 'Spines of the Vermillion Forge',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_shoulder_leather_raidmonkdragon_d_01.jpg',
              link: 'https://www.wowhead.com/item=202504/spines-of-the-vermillion-forge?bonus=9382:1507',
              ilvl: 450,
            }}
          />
          <GearPiece
            item={{
              name: 'Undulating Sporecloak',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/3752753.jpg',
              link: 'https://www.wowhead.com/item=205025/undulating-sporecloak?bonus=9366:9405:9376',
              ilvl: 447,
            }}
            enchant={items['writOfAvoidance']}
          />
          <GearPiece
            item={{
              name: 'Cuirass of the Vermillion Forge',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_leather_raidmonkdragon_d_01.jpg',
              link: 'https://www.wowhead.com/item=202509/cuirass-of-the-vermillion-forge?bonus=1501',
              ilvl: 450,
            }}
            enchant={items['wakingStats']}
          />
          <GearPiece
            item={{
              name: "Sea Dog's Cuffs",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_bracer_leather_kultirasdungeon_c_01.jpg',
              link: 'https://www.wowhead.com/item=158305/sea-dogs-cuffs?bonus=9024',
              ilvl: 447,
            }}
            gems={[items['craftyYsemerald']]}
            enchant={items['devoAvoidance']}
          />
          <GearPiece
            item={{
              name: 'Erethos, the Empty Promise',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_staff_2h_dragonraid_d_01.jpg',
              link: 'https://www.wowhead.com/item=202565/erethos-the-empty-promise?bonus=7981:1498',
              ilvl: 450,
            }}
            enchant={items['sophicDevo']}
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <GearPiece
            item={{
              name: 'Fists of the Vermillion Forge',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_glove_leather_raidmonkdragon_d_01.jpg',
              link: 'https://www.wowhead.com/item=202507/fists-of-the-vermillion-forge?bonus=1498',
              ilvl: 447,
            }}
          />
          <GearPiece
            item={{
              name: 'Blackbelt of the Vermillion Forge',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_belt_leather_raidmonkdragon_d_01.jpg',
              link: 'https://www.wowhead.com/item=202503/blackbelt-of-the-vermillion-forge?bonus=1507',
              ilvl: 450,
            }}
            gems={[items['craftyYsemerald']]}
          />
          <GearPiece
            item={{
              name: 'Pantaloons of the Vermillion Forge',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_pant_leather_raidmonkdragon_d_01.jpg',
              link: 'https://www.wowhead.com/item=202505/pantaloons-of-the-vermillion-forge?bonus=1504',
              ilvl: 447,
            }}
            enchant={items['frozenSpellthread']}
          />
          <GearPiece
            item={{
              name: 'Treads of Restored Order',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_leather_dragondungeon_c_01_boot.jpg',
              link: 'https://www.wowhead.com/item=193739/treads-of-restored-order?bonus=9635',
              ilvl: 447,
            }}
            enchant={items['watchersLoam']}
          />
          <GearPiece
            item={{
              name: 'Signet of Titanic Insight',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_rings_ring2_color3.jpg',
              link: 'https://www.wowhead.com/item=192999/signet-of-titanic-insight?bonus=9375:9405:8792',
              ilvl: 447,
            }}
            gems={[items['craftyYsemerald']]}
            enchant={items['devoHaste']}
          />
          <GearPiece
            item={{
              name: 'Circle of Ascended Frost',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_dungeonjewelry_primalist_ring_4_frost.jpg',
              link: 'https://www.wowhead.com/item=193731/circle-of-ascended-frost?bonus=9635',
              ilvl: 447,
            }}
            gems={[items['craftyYsemerald']]}
            enchant={items['devoHaste']}
          />
          <GearPiece
            item={{
              name: 'Ominous Chromatic Essence',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_orb_blue.jpg',
              link: 'https://www.wowhead.com/item=203729/ominous-chromatic-essence?bonus=1501',
              ilvl: 447,
            }}
          />
          <GearPiece
            item={{
              name: "Rashok's Molten Heart",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_trinket6oih_orb4.jpg',
              link: 'https://www.wowhead.com/item=202614/rashoks-molten-heart?bonus=1501',
              ilvl: 447,
            }}
          />
        </div>
      </div>
    </Section>
  )
}

export default FullBuild
