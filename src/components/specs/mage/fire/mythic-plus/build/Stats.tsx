import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Definitions from '@shared/list/Definitions'
import List from '@shared/list/List'
import ListElement from '@shared/list/ListElement'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'
//import TextLink from '@shared/Links/TextLink'

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
                Increase your ignite damage, healing output and{' '}
                <ItemLink item={spells['fm-ignite']} />
                's power. <br /> Basically,{' '}
                <ItemLink item={spells['fm-ignite']} /> will deal a portion
                equal to your mastery % damage over 9 seconds everytime you
                damage an enemy with most of your fire spells (
                <ItemLink item={spells['fm-fireball']} />,
                <ItemLink item={spells['fm-pf']} />,{' '}
                <ItemLink item={spells['fm-pyro']} />,{' '}
                <ItemLink item={spells['fm-fs']} />
                ...).
                <br />
                <br />
                Ignite will contribute both to your ST damage as it is a free
                dot damage over your target, and even more on AOE as not only it
                it free damage ST, it also spreads to nearby targets thoughout
                your rotation.
              </span>
            ),
          },
          {
            key: 'vers',
            abbreviation: 'Versatility',
            definition:
              'Increase your raw damage output as well as reducing the damage received.',
          },
          {
            key: 'crit',
            abbreviation: 'Crit',
            definition: (
              <span>
                Increase your crit chance, but also your mastery in a way, since{' '}
                <ItemLink item={spells['fm-combustion']} /> 75% of your crit
                stats is converted into mastery.
              </span>
            ),
          },
          {
            key: 'haste',
            abbreviation: 'Haste',
            definition: (
              <span>
                Increase greatly the smoothness of the spec as it reduces{' '}
                <ItemLink item={spells['fm-fireblast']} /> cooldown / refund
                speed. <br />
                It also lowers your GCD which allows you to weave in more spells
                during important burst windows (
                <ItemLink item={spells['fm-combustion']} /> or{' '}
                <ItemLink item={spells['fm-skb']} />
                ), and reset your combustion faster (
                <ItemLink item={spells['fm-kindling']} />
                ).
                <br />
                It also reduces the travel time of some spells (ex{' '}
                <ItemLink item={spells['fm-pf']} />,{' '}
                <ItemLink item={spells['fm-meteor']} />
                ...) and reduces your cast times.
              </span>
            ),
          },
        ]}
      />
      <Paragraph>
        As a fire mage we will look mainly for damage output aswell as damage
        reduction, especially in higher keys where every bit of damage reduction
        matters.
      </Paragraph>
      <List className="list-decimal">
        <ListElement>
          <span>Intellect</span>
        </ListElement>
        <ListElement>
          <span>Haste</span>
        </ListElement>
        <ListElement>
          <span>Versatility</span>
        </ListElement>
        <ListElement>
          <span>Mastery</span>
        </ListElement>
        <ListElement>
          <span>Critical Strike</span>
        </ListElement>
      </List>
      <Paragraph>
        Our stats are pretty straight forward, we go for as much ilvl as we can
        as intellect is our best stat, but Haste also has insane value.
        <br />
        Versa also scales very well for Fire mage in our current patch (10.1.5),
        this is very good as Versa makes us tankier which is pretty good for
        high M+ keys.
        <br />
        In some scenarios it's actually better to prioritize a gear with high
        haste on it (especially if it also has Versa) rather than having a small
        increase in ilvl/intellect.
        <br />
        It could for exemple be much better to go for a Haste/Vers Chest 415
        rather than a Mastery/Vers gear 418.
        <br />
        <br />
        To give you a rough idea on our stats worth, my personnal stat weights
        as Fire is 8.81 Int, 4.50 Haste, 3.56 Vers, 3.02 Mastery, 2.74 Crit.
        Every char will sim different but it still gives you a rough idea.
      </Paragraph>
      <Paragraph>
        It is worth mentioning that Critical Strikes gets even weaker value as
        you get more haste and play better. Also the more target there is, the
        least value it has. This can be explained because of some talents (ex{' '}
        <ItemLink item={spells['fm-phoenix_reborn']} />, as on big AOE you get a
        ton of ignites and a ton of resets, you get a lot of{' '}
        <ItemLink item={spells['fm-pf']} /> refunds. Same goes for{' '}
        <ItemLink item={spells['fm-fireblast']} /> with{' '}
        <ItemLink item={spells['fm-fervent_flickering']} />
        ).
      </Paragraph>
      <Paragraph>
        As an example, here are my stats from gear and consummables :
      </Paragraph>
      <Definitions
        defs={[
          {
            key: 'my-ilvl',
            abbreviation: 'Item lvl',
            definition: '420',
          },
          {
            key: 'my-int',
            abbreviation: 'Intelligence ',
            definition: '9799',
          },
          {
            key: 'my-crit',
            abbreviation: 'Critical Strike',
            definition: (
              <span>
                12% (927), this is with 0 points into{' '}
                <ItemLink item={spells['fm-critical_mass']} />, depending on
                which talents i run it increases.
              </span>
            ),
          },
          {
            key: 'my-haste',
            abbreviation: 'Haste',
            definition: '42.21% (6693)',
          },
          {
            key: 'my-mast',
            abbreviation: 'Mastery',
            definition: '10% (1379)',
          },
          {
            key: 'my-vers',
            abbreviation: 'Versatility',
            definition: '18.40% (3771)',
          },
        ]}
      />
    </Section>
  )
}

export default Stats
