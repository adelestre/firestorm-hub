import Section from '../../../../../shared/Section'
import ItemLink from '../../../../../shared/Links/ItemLink'
import TextLink from '../../../../../shared/Links/TextLink'
import Definitions from '../../../../../shared/list/Definitions'
import List from '../../../../../shared/list/List'
import ListElement from '../../../../../shared/list/ListElement'
import Paragraph from '../../../../../shared/Paragraph'

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
                <ItemLink
                  icon="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cranegod.jpg"
                  name="Chi-Ji"
                  link="https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane"
                />
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
        the order above while never reaching the soft cap on any of them. Only
        mastery is really behind the others and should alawys be prioritized
        last. Why is Mastery bad could you ask ? Well Mastery only works on your
        current target or with{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_revival.jpg"
          name="Revival"
          link="https://www.wowhead.com/spell=115310/revival"
        />{' '}
        and{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cranegod.jpg"
          name="Chi-Ji"
          link="https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane"
        />
        . So basically it's not incredible outside CDs since it will only
        increase your spot healing and unlike all the other stats it doesn't
        amplify damage. So it is not a complete waste, but definitely worse than
        the others.
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
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/monk_ability_cherrymanatea.jpg"
          name="Mana Tea"
          link="https://www.wowhead.com/spell=115869/mana-tea"
        />
        . It increases stack generation depending on your crit chance.
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
            definition: '420.1',
          },
          {
            key: 'my-int',
            abbreviation: 'Intelligence ',
            definition: '9120',
          },
          {
            key: 'my-crit',
            abbreviation: 'Critical Strike',
            definition: '16% (2049 / 5400)',
          },
          {
            key: 'my-haste',
            abbreviation: 'Haste',
            definition: '31% (5013 / 5100)',
          },
          {
            key: 'my-mast',
            abbreviation: 'Mastery',
            definition: '44% (438 / 5400)',
          },
          {
            key: 'my-vers',
            abbreviation: 'Versatility',
            definition: '27% | 12.24% (5542 / 6150)',
          },
        ]}
      />
      <Paragraph>
        As you can see, I try not to reach any soft cap. Though my Lariat gives
        me Versa procs (I wish I could change that) I won't hit the cap with it.
      </Paragraph>
    </Section>
  )
}

export default Stats
