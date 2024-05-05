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
              {
                key: 'st',
                abbreviation: 'ST',
                definition: 'Single Target',
              },
              {
                key: 'aoe',
                abbreviation: 'AOE',
                definition: 'Area of effect',
              },
              {
                key: 'gcd',
                abbreviation: 'GCD',
                definition: 'Global Cooldown ',
              },
              {
                key: 'cc',
                abbreviation: 'CC',
                definition: 'Crowd Control ',
              },
              {
                key: 'skb',
                abbreviation: 'SKB',
                definition: <ItemLink item={spells['fm-skb']} />,
              },
              {
                key: 'gc',
                abbreviation: 'GC',
                definition: 'Guaranteed crit',
              },
            ]}
          />
          <Definitions className="mt-0 lg:mt-1" defs={[]} />
        </span>
      </Section>
    </div>
  )
}

export default Abbreviations
