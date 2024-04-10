import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import TextLink from '@shared/Links/TextLink'
import List from '@shared/list/List'
import ListElement from '@shared/list/ListElement'
import Paragraph from '@shared/Paragraph'

function Cons() {
  return (
    <Section name="Enchantments / Consumables">
      <Section name="Gems">
        <Paragraph>
          As seen with Lariat, it is advised to run either{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_air_cut_blue.jpg"
            name="Energized Malygite"
            link="https://www.wowhead.com/item=192935/energized-malygite"
          />{' '}
          or{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_air_cut_red.jpg"
            name="Crafty Alexstraszite"
            link="https://www.wowhead.com/item=192919/crafty-alexstraszite"
          />{' '}
          to get haste procs with{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_necklace_necklace1_color3.jpg"
            name="Elemental Lariat"
            link="https://www.wowhead.com/item=193001/elemental-lariat"
          />
          . If you don't have this embellishment, you can equip gems for their
          stats depending on your needs.
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
          I personnaly run 7{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_air_cut_blue.jpg"
            name="Energized Malygite"
            link="https://www.wowhead.com/item=192935/energized-malygite"
          />{' '}
          and 1{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem3primal_cut_blue.jpg"
            name="Resplendent Illimited Diamond"
            link="https://www.wowhead.com/item=192991/resplendent-illimited-diamond"
          />{' '}
          (so instead of having Lariat proc last 13 sec (5 sec baseline + 1 sec
          per gem) it only lasts 12 sec). I also think that since I reached the
          soft cap on haste, it would be best to swap to{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting_gem2standard_fire_cut_blue.jpg"
            name="Radiant Malygite"
            link="https://www.wowhead.com/item=192932/radiant-malygite"
          />{' '}
          to get more stats overall.
        </Paragraph>
      </Section>
      <Section name="Back / Wrists">
        <Paragraph>
          Avoidance is overall the best tertiary stat. As long as you don't hit
          the hard cap of 20%, you should enchants your cloak with{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg"
            name="Fortified Avoidance"
            link="https://www.wowhead.com/item=200031/enchant-cloak-graceful-avoidance"
          />{' '}
          and your bracers with{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg"
            name="Devotion of Avoidance"
            link="https://www.wowhead.com/item=200021/enchant-bracer-devotion-of-avoidance"
          />
          . If you hit the hard cap, you should enchant your cloak with{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg"
            name="Regenerative Leech"
            link="https://www.wowhead.com/item=200033/enchant-cloak-regenerative-leech"
          />{' '}
          and your bracers with{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg"
            name="Devotion of Leech"
            link="https://www.wowhead.com/item=200022/enchant-bracer-devotion-of-leech"
          />
        </Paragraph>
      </Section>
      <Section name="Chest">
        <Paragraph>
          For the chest, you should enchant it with{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg"
            name="Waking Stats"
            link="https://www.wowhead.com/item=200030/enchant-chest-waking-stats"
          />
          . It's the best option for both damage and healing output.
        </Paragraph>
      </Section>
      <Section name="Legs">
        <Paragraph>
          For the legs, you have 2 options, the best for M+ is{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_tailoring_craftingoptionalreagent_enhancedspellthread_color1.jpg"
            name="Temporal Spellthread"
            link="https://www.wowhead.com/item=194016/temporal-spellthread"
          />
          , but if you also want to raid, you should go for{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_tailoring_craftingoptionalreagent_enhancedspellthread_color2.jpg"
            name="Frozen Spellthread"
            link="https://www.wowhead.com/item=194013/frozen-spellthread"
          />{' '}
          instead as it's mandatory for raiding.
        </Paragraph>
      </Section>
      <Section name="Feet">
        <Paragraph>
          Not many good options for boots, we don't need mobility so we take{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg"
            name="Watchers' Loam"
            link="https://www.wowhead.com/item=200020/enchant-boots-watchers-loam"
          />
          .
        </Paragraph>
      </Section>
      <Section name="Fingers">
        <Paragraph>
          For rings we just take whatever stat we need most,{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg"
            name="Devotion of Haste"
            link="https://www.wowhead.com/item=200038/enchant-ring-devotion-of-haste"
          />
          ,{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg"
            name="Devotion of Versatility"
            link="https://www.wowhead.com/item=200040/enchant-ring-devotion-of-versatility"
          />{' '}
          or{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg"
            name="Devotion of Critical Strike"
            link="https://www.wowhead.com/item=200037/enchant-ring-devotion-of-critical-strike"
          />
        </Paragraph>
      </Section>
      <Section name="Weapons">
        <Paragraph>
          For weapons, you should go for{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_enchantedscroll.jpg"
            name="Sophic Devotion"
            link="https://www.wowhead.com/item=200054/enchant-weapon-sophic-devotion"
          />
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
            <ItemLink
              icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_bottle_shape2_black.jpg"
              name="Phial of Tepid Versatility"
              link="https://www.wowhead.com/item=191341/phial-of-tepid-versatility"
            />
          </ListElement>
          <ListElement className="text-left">
            <ItemLink
              icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_legion_seedbatteredfishplate.jpg"
              name="Timely Demise"
              link="https://www.wowhead.com/item=197778/timely-demise"
            />{' '}
            /{' '}
            <ItemLink
              icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_159_fish_82.jpg"
              name="Seamoth Surprise"
              link="https://www.wowhead.com/item=197780/seamoth-surprise"
            />{' '}
            /{' '}
            <ItemLink
              icon="https://wow.zamimg.com/images/wow/icons/large/inv_cooking_10_draconicdelicacies.jpg"
              name="Hoard of Draconic Delicacies"
              link="https://www.wowhead.com/item=197795/hoard-of-draconic-delicacies"
            />
          </ListElement>
          <ListElement>
            <ItemLink
              icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_rune_05.jpg"
              name="Howling Rune"
              link="https://www.wowhead.com/item=194820/howling-rune"
            />
          </ListElement>
          <ListElement>
            <ItemLink
              icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_jewelcrafting3_rainbowprism_color2.jpg"
              name="Dracomic Augment Rune"
              link="https://www.wowhead.com/item=201325/draconic-augment-rune"
            />
          </ListElement>
        </List>
        <Paragraph>
          As for combat potions, the best option is{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/inv_10_alchemy_bottle_shape1_violet.jpg"
            name="Potion of Shocking Disclosure"
            link="https://www.wowhead.com/item=191401/potion-of-shocking-disclosure"
          />{' '}
          as it is an important damage output in AoE. You could use the{' '}
          <ItemLink
            icon="https://wow.zamimg.com/images/wow/icons/large/trade_alchemy_dpotion_b20.jpg"
            name="Elemental Potion of Ultimate Power"
            link="https://www.wowhead.com/item=191383/elemental-potion-of-ultimate-power"
          />{' '}
          instead if you want a more versatile choice.
        </Paragraph>
      </Section>
    </Section>
  )
}

export default Cons
