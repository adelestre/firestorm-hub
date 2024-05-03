import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Definitions from '@shared/list/Definitions'
import List from '@shared/list/List'
import ListElement from '@shared/list/ListElement'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'

function Stats() {
  return (
    <Section name="Stats">
      <Paragraph>In Mythic+, each stat has a use :</Paragraph>
      <Definitions
        defs={[
          {
            key: 'mast',
            abbreviation: 'Mastery',
            definition: (
              <span>
                Increase significantly your ST healing output and{' '}
                <ItemLink item={spells['mw-chiji']} />
                's power.
              </span>
            ),
          },
          {
            key: 'vers',
            abbreviation: 'Versatility',
            definition:
              'Increase your damage and healing output as well as reducing the damage received.',
          },
          {
            key: 'crit',
            abbreviation: 'Crit',
            definition: 'Increase both your damage and healing output.',
          },
          {
            key: 'haste',
            abbreviation: 'Haste',
            definition:
              'Increase your damage and healing output, your reactiveness and the tickrate of your HoTs.',
          },
        ]}
      />
      <Paragraph>
        For Mythic+ we look at 4 major things : damage output, healing ouput,
        damage reduction and reactiveness. So your stats priority will logically
        look like :
      </Paragraph>
      <List className="list-decimal">
        <ListElement>
          <span>Haste</span>
        </ListElement>
        <ListElement>
          <span>Versatility</span>
        </ListElement>
        <ListElement>
          <span>Critical Strike</span>
        </ListElement>
        <ListElement>
          <span>Mastery</span>
        </ListElement>
      </List>
      <Paragraph>
        Our stats are really close in effectiveness, therefore while gearing all
        you need to remember is trying to max your stats more or less following
        the order above while maximizing your primary stat over all. Only
        mastery is really behind the others and should always be prioritized
        last. Why is Mastery bad could you ask ? Well Mastery only works on your
        current target or with <ItemLink item={spells['mw-rev']} /> and{' '}
        <ItemLink item={spells['mw-chiji']} />. So basically it's not incredible
        outside CDs since it will only increase your spot healing and unlike all
        the other stats it doesn't amplify damage. So it is not a complete
        waste, but definitely worse than the others.
      </Paragraph>
      <Paragraph>
        Versatility increases in value the higher you go in keys, as it will
        help you survive better. I think that a good rule of thumb is to have
        around 1% per key level. So for +15 keys you should aim around 15%.
      </Paragraph>
      <Paragraph>
        It is worth mentioning that Critical Strikes gets more value when mana
        becomes an issue (which isn't really the case in M+ but it's good to
        know), first because unlike haste, it doesn't increase your mana
        consumption, and secondly because of its synergy with{' '}
        <ItemLink item={spells['mw-mt']} />. It increases stack generation
        depending on your crit chance.
      </Paragraph>
      <Paragraph>
        As an example, here are my stats from gear and consummables :
      </Paragraph>
      <Definitions
        defs={[
          {
            key: 'my-ilvl',
            abbreviation: 'Item lvl',
            definition: '420.6',
          },
          {
            key: 'my-int',
            abbreviation: 'Intelligence ',
            definition: '9148',
          },
          {
            key: 'my-crit',
            abbreviation: 'Critical Strike',
            definition: '10% (811)',
          },
          {
            key: 'my-haste',
            abbreviation: 'Haste',
            definition: '29% (4967)',
          },
          {
            key: 'my-mast',
            abbreviation: 'Mastery',
            definition: '44% (445)',
          },
          {
            key: 'my-vers',
            abbreviation: 'Versatility',
            definition: '25% | 12% (5116)',
          },
        ]}
      />
    </Section>
  )
}

export default Stats
