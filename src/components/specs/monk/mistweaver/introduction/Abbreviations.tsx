import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Definitions from '@shared/list/Definitions'
import spells from '@shared/spells.json'

function Abbreviations() {
  return (
    <div>
      <Section name="Abbreviations">
        <span className="flex flex-col flex-wrap md:flex-row">
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
                definition: <ItemLink item={spells['monk-soom']} />,
              },
              {
                key: 'rem',
                abbreviation: 'ReM',
                definition: <ItemLink item={spells['mw-rem']} />,
              },
              {
                key: 'em',
                abbreviation: 'EM',
                definition: <ItemLink item={spells['mw-em']} />,
              },
              {
                key: 'ef',
                abbreviation: 'EF',
                definition: <ItemLink item={spells['mw-ef']} />,
              },
              {
                key: 'tp',
                abbreviation: 'TP',
                definition: <ItemLink item={spells['monk-tp']} />,
              },
              {
                key: 'bok',
                abbreviation: 'BoK',
                definition: <ItemLink item={spells['monk-bok']} />,
              },
              {
                key: 'sck',
                abbreviation: 'SCK',
                definition: <ItemLink item={spells['monk-sck']} />,
              },
            ]}
          />
          <Definitions
            defs={[
              {
                key: 'tft',
                abbreviation: 'TFT',
                definition: <ItemLink item={spells['mw-tft']} />,
              },
              {
                key: 'si',
                abbreviation: 'SI',
                definition: <ItemLink item={spells['mw-si']} />,
              },
              {
                key: 'rm',
                abbreviation: 'RM',
                definition: <ItemLink item={spells['mw-rm']} />,
              },
              {
                key: 'at',
                abbreviation: 'AT',
                definition: <ItemLink item={spells['mw-at']} />,
              },
              {
                key: 'totm',
                abbreviation: 'TotM',
                definition: <ItemLink item={spells['mw-totm']} />,
              },
              {
                key: 'tom',
                abbreviation: 'ToM',
                definition: <ItemLink item={spells['mw-tom']} />,
              },
            ]}
          />
        </span>
      </Section>
    </div>
  )
}

export default Abbreviations
