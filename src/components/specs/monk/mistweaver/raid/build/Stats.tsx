import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import TextLink from '@shared/Links/TextLink'
import Definitions from '@shared/list/Definitions'
import List from '@shared/list/List'
import ListElement from '@shared/list/ListElement'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'

function Stats() {
  return (
    <Section name="Stats">
      <Paragraph>In raids, each stat has a use :</Paragraph>
      <Definitions
        defs={[
          {
            key: 'mast',
            abbreviation: 'Mastery',
            definition: (
              <span>
                Increase significantly your ST healing output. Please understand
                that the only AoE gain from mastery is through{' '}
                <ItemLink item={spells['mw-rev']} />. There are no other AoE
                interactions with mastery.
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
        For raids, damage doesn't matter as much as in Mythic+ but AoE healing
        do a lot more. Therefore mastery remains a lot worse than other stats.
        Then, because Monk is a very tanky class, you can cut on damage
        reduction, making vers less appealing than in Mythic+. Lastly, Critical
        Strike helps increasing healing output without increasing mana
        consumption. Even better, it increases the amount of stacks you get from{' '}
        <ItemLink item={spells['mw-mt']} />. So your stats priority will
        logically look like :
      </Paragraph>
      <List className="list-decimal">
        <ListElement>
          <span>Haste</span>
        </ListElement>
        <ListElement>
          <span>Critical Strike</span>
        </ListElement>
        <ListElement>
          <span>Versatility</span>
        </ListElement>
        <ListElement>
          <span>Mastery</span>
        </ListElement>
      </List>
      <Paragraph>
        Our stats are really close in effectiveness, therefore while gearing all
        you need to remember is trying to max your stats more or less following
        the order above while never reaching the soft cap on any of them. Only
        mastery is really behind the others and should always be prioritized
        last.
      </Paragraph>
      <Paragraph>
        Don't forget about{' '}
        <TextLink
          link={
            'https://www.wowhead.com/fr/guide/diminishing-returns-on-secondary-stats-in-world-of-warcraft'
          }
          text="diminishing returns"
        />
        , you don't want to lose too many points as it is usually better to put
        more points in another stat. As an example, after reaching the soft cap
        on haste it's always better to get versatility or crit.
      </Paragraph>
      <Paragraph>
        As an example, here are my stats from gear and consummables :
      </Paragraph>
      <Definitions
        defs={[
          {
            key: 'my-ilvl',
            abbreviation: 'Item lvl',
            definition: '421',
          },
          {
            key: 'my-int',
            abbreviation: 'Intelligence ',
            definition: '9273',
          },
          {
            key: 'my-crit',
            abbreviation: 'Critical Strike',
            definition: '26% (3838 / 5400)',
          },
          {
            key: 'my-haste',
            abbreviation: 'Haste',
            definition: '33% (5372 / 5100)',
          },
          {
            key: 'my-mast',
            abbreviation: 'Mastery',
            definition: '48% (630 / 5400)',
          },
          {
            key: 'my-vers',
            abbreviation: 'Versatility',
            definition: '15% |7% (3045 / 6150)',
          },
        ]}
      />
      <Paragraph>
        As you can see, I am losing a bit of haste from diminishing returns,
        it's not optimal but it's very light.
      </Paragraph>
    </Section>
  )
}

export default Stats
