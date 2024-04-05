import Section from '../../../../../shared/Section'
import GearPiece from '../../../../../shared/GearPiece'
import Paragraph from '../../../../../shared/Paragraph'

function FullBuild() {
  return (
    <Section name="Full Build Example">
      <Paragraph>
        Below you will find a possible items build for high end M+. Keep in mind
        that it's just an example of a combination of items and is not the only
        possibility. It is very high Versatility and low on Critical Strike and
        therefore aims for survavibility instead of raw output. Also, this is a
        M+ build only and will not be the most competitive build for raiding.
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
            gems={[
              {
                name: 'Resplendent Illimited Diamond',
                icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem3primal_cut_blue.jpg',
                link: 'https://www.wowhead.com/item=192991/resplendent-illimited-diamond',
              },
            ]}
          />
          <GearPiece
            item={{
              name: 'Elemental Lariat',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_necklace_necklace1_color3.jpg',
              link: 'https://www.wowhead.com/item=193001/elemental-lariat?bonus=8792:9365:8846:9404',
              ilvl: 418,
            }}
            gems={[
              {
                name: 'Radiant Malygite',
                icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_fire_cut_blue.jpg',
                link: 'https://www.wowhead.com/item=192932/radiant-malygite',
              },
              {
                name: 'Radiant Malygite',
                icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_fire_cut_blue.jpg',
                link: 'https://www.wowhead.com/item=192932/radiant-malygite',
              },
              {
                name: 'Radiant Malygite',
                icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_fire_cut_blue.jpg',
                link: 'https://www.wowhead.com/item=192932/radiant-malygite',
              },
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
              name: 'Potion-Stained Cloak',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_leather_dragondungeon_c_01_cape.jpg',
              link: 'https://www.wowhead.com/item=193712/potion-stained-cloak?bonus=1594',
              ilvl: 421,
            }}
            enchant={{
              name: 'Graceful Avoidance',
              link: 'https://www.wowhead.com/item=200031/enchant-cloak-graceful-avoidance',
            }}
          />
          <GearPiece
            item={{
              name: 'Chestwrap of the Waking Fist',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_chest_leather_raidmonkprimalist_d_01.jpg',
              link: 'https://www.wowhead.com/item=200360/chestwrap-of-the-waking-fist?bonus=1498',
              ilvl: 421,
            }}
            enchant={{
              name: 'Waking Stats',
              link: 'https://www.wowhead.com/item=200030/enchant-chest-waking-stats',
            }}
          />
          <GearPiece
            item={{
              name: 'Life-Bound Bindings',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_bracer_leather_dragonpvp_d_01.jpg',
              link: 'https://www.wowhead.com/item=193419/life-bound-bindings?bonus=8846:8792',
              ilvl: 418,
            }}
            gems={[
              {
                name: 'Radiant Malygite',
                icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_fire_cut_blue.jpg',
                link: 'https://www.wowhead.com/item=192932/radiant-malygite',
              },
            ]}
            enchant={{
              name: 'Devotion of Avoidance',
              link: 'https://www.wowhead.com/item=200021/enchant-bracer-devotion-of-avoidance',
            }}
          />
          <GearPiece
            item={{
              name: 'Scepter of Drastic Measures',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_mace_1h_primalistraid_d_02.jpg',
              link: 'https://www.wowhead.com/item=195481/scepter-of-drastic-measures',
              ilvl: 421,
            }}
            enchant={{
              name: 'Sophic Devotion',
              link: 'https://www.wowhead.com/item=200054/enchant-weapon-sophic-devotion',
            }}
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
              name: 'Life-Bound Gloves',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_glove_leather_dragonpvp_d_01.jpg',
              link: 'https://www.wowhead.com/item=193418/life-bound-gloves?bonus=8846:8792',
              ilvl: 418,
            }}
          />
          <GearPiece
            item={{
              name: 'Life-Bound Belt',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_belt_leather_dragonpvp_d_01.jpg',
              link: 'https://www.wowhead.com/item=193407/life-bound-belt?bonus=8846:8792',
              ilvl: 418,
            }}
            gems={[
              {
                name: 'Radiant Malygite',
                icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_fire_cut_blue.jpg',
                link: 'https://www.wowhead.com/item=192932/radiant-malygite',
              },
            ]}
          />
          <GearPiece
            item={{
              name: 'Legguards of the Waking Fist',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_pant_leather_raidmonkprimalist_d_01.jpg',
              link: 'https://www.wowhead.com/item=200364/legguards-of-the-waking-fist?bonus=1498',
              ilvl: 415,
            }}
            enchant={{
              name: 'Frozen Spellthread',
              link: 'https://www.wowhead.com/item=194013/frozen-spellthread',
            }}
          />
          <GearPiece
            item={{
              name: 'Toxic Thorn Footwraps',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_leather_dragondungeon_c_01_boot.jpg',
              link: 'https://www.wowhead.com/item=193452/toxic-thorn-footwraps?bonus=9404:8846',
              ilvl: 418,
            }}
            enchant={{
              name: "Watcher's Loam",
              link: 'https://www.wowhead.com/item=200020/enchant-boots-watchers-loam',
            }}
          />
          <GearPiece
            item={{
              name: 'Crystallized Droplet',
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_jewelry_ring_131.jpg',
              link: 'https://www.wowhead.com/item=144112/crystallized-droplet',
              ilvl: 421,
            }}
            gems={[
              {
                name: 'Radiant Malygite',
                icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_fire_cut_blue.jpg',
                link: 'https://www.wowhead.com/item=192932/radiant-malygite',
              },
            ]}
            enchant={{
              name: 'Devotion of Critical Strike',
              link: 'https://www.wowhead.com/item=200037/enchant-ring-devotion-of-critical-strike',
            }}
          />
          <GearPiece
            item={{
              name: "Emissary's Flamewrought Seal",
              icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_dungeonjewelry_primalist_ring_1_fire.jpg',
              link: 'https://www.wowhead.com/item=201992/emissarys-flamewrought-seal?bonus=1498',
              ilvl: 421,
            }}
            gems={[
              {
                name: 'Radiant Malygite',
                icon: 'https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_fire_cut_blue.jpg',
                link: 'https://www.wowhead.com/item=192932/radiant-malygite',
              },
            ]}
            enchant={{
              name: 'Devotion of Critical Strike',
              link: 'https://www.wowhead.com/item=200037/enchant-ring-devotion-of-critical-strike',
            }}
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
