import Section from '../../../../shared/Section'
import ItemLink from '../../../../shared/Links/ItemLink'
import Definitions from '../../../../shared/list/Definitions'

function Abbreviations() {
  return (
    <div>
      <Section name="Abbreviations">
        <div className="space-top flex flex-col flex-wrap md:flex-row">
          <Definitions
            defs={[
              { key: 'mw', abbreviation: 'MW', definition: 'Mistweaver' },
              {
                key: 'hots',
                abbreviation: 'HoTs',
                definition: 'Heals Over Time',
              },
              {
                key: 'st',
                abbreviation: 'ST',
                definition: 'Single Target',
              },
              {
                key: 'soom',
                abbreviation: 'SooM',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_soothingmists.jpg"
                    name="Soothing Mist"
                    link="https://www.wowhead.com/spell=115175/soothing-mist?spellModifier=137024"
                  />
                ),
              },
              {
                key: 'rem',
                abbreviation: 'ReM',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_renewingmists.jpg"
                    name="Renewing Mist"
                    link="https://www.wowhead.com/spell=119611/renewing-mist"
                  />
                ),
              },
              {
                key: 'em',
                abbreviation: 'EM',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
                    name="Enveloping Mist"
                    link="https://www.wowhead.com/spell=124682/enveloping-mist"
                  />
                ),
              },
              {
                key: 'ef',
                abbreviation: 'EF',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_essencefont.jpg"
                    name="Essence Font"
                    link="https://www.wowhead.com/spell=191837/essence-font"
                  />
                ),
              },
              {
                key: 'tp',
                abbreviation: 'TP',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
                    name="Tiger Palm"
                    link="https://www.wowhead.com/spell=100780/tiger-palm"
                  />
                ),
              },
              {
                key: 'bok',
                abbreviation: 'BoK',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
                    name="Blackout Kick"
                    link="https://www.wowhead.com/spell=100784/blackout-kick"
                  />
                ),
              },
              {
                key: 'sck',
                abbreviation: 'SCK',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_cranekick_new.jpg"
                    name="Spinning Crane Kick"
                    link="https://www.wowhead.com/spell=101546/spinning-crane-kick"
                  />
                ),
              },
            ]}
          />
          <Definitions
            defs={[
              {
                key: 'tft',
                abbreviation: 'TFT',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_thunderfocustea.jpg"
                    name="Thunder Focus Tea"
                    link="https://www.wowhead.com/spell=116680/thunder-focus-tea"
                  />
                ),
              },
              {
                key: 'si',
                abbreviation: 'SI',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_chibrew.jpg"
                    name="Secret Infusion"
                    link="https://www.wowhead.com/spell=388491/secret-infusion"
                  />
                ),
              },
              {
                key: 'rm',
                abbreviation: 'RM',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_effuse.jpg"
                    name="Rising Mist"
                    link="https://www.wowhead.com/spell=274909/rising-mist"
                  />
                ),
              },
              {
                key: 'at',
                abbreviation: 'AT',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_book_07.jpg"
                    name="Ancient Teachings"
                    link="https://www.wowhead.com/spell=388023/ancient-teachings"
                  />
                ),
              },
              {
                key: 'totm',
                abbreviation: 'TotM',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/passive_monk_teachingsofmonastery.jpg"
                    name="Teachings of the Monastery"
                    link="https://www.wowhead.com/spell=116645/teachings-of-the-monastery"
                  />
                ),
              },
              {
                key: 'tom',
                abbreviation: 'ToM',
                definition: (
                  <ItemLink
                    icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_uplift.jpg"
                    name="Tears of Morning"
                    link="https://www.wowhead.com/spell=387991/tear-of-morning"
                  />
                ),
              },
            ]}
          />
        </div>
      </Section>
    </div>
  )
}

export default Abbreviations
