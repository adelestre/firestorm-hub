import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'
import items from '@shared/items.json'
import SpellRotationElement from '@shared/spell-rotation/SpellRotationElement'
import SpellRotationIcon from '@shared/spell-rotation/SpellRotationIcon'

function ST_opener() {
  return (
    <Section name="ST Opener">
      <Paragraph>
        We will now see an exemple of opener in an ST scenario (also up to 2
        targets, arguably 3 depending on our talents and how much movement we
        have in a fight).
      </Paragraph>
      <Paragraph>
        We will hardcast our <ItemLink item={spells['fm-pyro']} /> before
        pulling. We also use <ItemLink item={spells['fm-combustion']} /> during
        our initial cast as it can be casted during our spells, which is a very
        efficient way to use combust as it will guarantee our first{' '}
        <ItemLink item={spells['fm-pyro']} /> to crit.<br></br>
        You also either prequeue a <ItemLink item={spells['fm-pf']} /> (or spam
        it) so it it sent just after your <ItemLink item={spells['fm-pyro']} />{' '}
        cast ends.
      </Paragraph>
      <Paragraph>
        Now if done well, both your <ItemLink item={spells['fm-pyro']} /> and{' '}
        <ItemLink item={spells['fm-pf']} /> should be traveling and landing at
        the same time more or less. This is the perfect moment to use both our{' '}
        <ItemLink item={spells['mage-bl']} />, your on use trinket if you have
        one (ex <ItemLink item={items['hornOfValor']} />
        ) and <ItemLink item={items['ultimatePowerPotion']} />.<br></br>
        <br></br>
        Both spell will have 100% crit which will allow you to proc{' '}
        <ItemLink item={spells['fm-HotStreak']} /> as you'll get two crits in a
        row, this is the reason why you will send an instant{' '}
        <ItemLink item={spells['fm-pyro']} />. <br></br>
        Then here starts our rotation : always using your instant{' '}
        <ItemLink item={spells['fm-pyro']} /> followed by either{' '}
        <ItemLink item={spells['fm-fireblast']} /> or{' '}
        <ItemLink item={spells['fm-pf']} /> depending on your charges left.
        Since we use a <ItemLink item={spells['fm-pf']} /> right at start we are
        not sitting on 3 charges which means we can use all our{' '}
        <ItemLink item={spells['fm-fireblast']} /> charges in order to do a lot
        of damage as fast as possible.
      </Paragraph>
      <Paragraph>
        Not only <ItemLink item={spells['fm-fireblast']} /> is instant cast, can
        be cast during other spells, but also has no travel time, which makes it
        superior compared to <ItemLink item={spells['fm-pf']} />. This is why i
        often only use <ItemLink item={spells['fm-pf']} /> when i'm out of{' '}
        <ItemLink item={spells['fm-fireblast']} /> charges OR if i am sitting on
        3 charges of <ItemLink item={spells['fm-pf']} />. In that case as seen
        before, i send a <ItemLink item={spells['fm-pf']} /> just to not waste
        any charge.
      </Paragraph>
      <Paragraph>
        This is what looks our opener even tho some variations are possible:
        <br></br>
        <br></br>
      </Paragraph>
      <SpellRotationElement channeled>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement channeled duration={0}>
        <SpellRotationIcon />
        <SpellRotationIcon item={spells['fm-combustion']} offset={-0.5} />
        <SpellRotationIcon item={spells['fm-pf']} offset={-0.25} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
        <SpellRotationIcon item={spells['mage-bl']} offset={-0.1} />
        <SpellRotationIcon item={spells['mage-bl']} offset={-0.1} />
        <SpellRotationIcon item={items['ultimatePowerPotion']} offset={-0.1} />
        <SpellRotationIcon item={items['hornOfValor']} offset={-0.1} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pf']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <Paragraph>
        After this part, our goal is to consume 8 stacks of{' '}
        <ItemLink item={spells['fm-HotStreak']} /> in order to use our first
        <ItemLink item={spells['fm-skb']} />. You should reach your SKB during
        your initial <ItemLink item={spells['fm-combustion']} /> then hardcast a{' '}
        <ItemLink item={spells['fm-pyro']} /> to trigger SKB. Then we continue
        again our rotation until that 6 sec combustion is done.<br></br>
        Remember that once we run out of{' '}
        <ItemLink item={spells['fm-fireblast']} /> and{' '}
        <ItemLink item={spells['fm-pf']} /> charges, we can still use other GC
        like <ItemLink item={spells['mage-dragons_breath']} />, or use{' '}
        <ItemLink item={spells['fm-scorch']} /> to help us save some charges.
      </Paragraph>
      <Paragraph>
        Last thing to note is that there is windows where your{' '}
        <ItemLink item={spells['fm-hyperthermia']} /> can proc. When it does it
        makes the rotation braindead, you basically spam{' '}
        <ItemLink item={spells['fm-pyro']} /> until it runs out.
      </Paragraph>
      <Paragraph>
        This is what would look like a full opener including first{' '}
        <ItemLink item={spells['fm-combustion']} />, first{' '}
        <ItemLink item={spells['fm-skb']} /> followed by second{' '}
        <ItemLink item={spells['fm-skb']} />, and lastly we get our{' '}
        <ItemLink item={spells['fm-combustion']} /> back or almost back. It only
        happens when you reach enough haste tho but it may be much more
        consistent once we will reach season 2. <br></br>
        <br></br>
      </Paragraph>
      <SpellRotationElement channeled>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement channeled duration={0}>
        <SpellRotationIcon />
        <SpellRotationIcon item={spells['fm-combustion']} offset={-0.5} />
        <SpellRotationIcon item={spells['fm-pf']} offset={-0.25} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
        <SpellRotationIcon item={spells['mage-bl']} offset={-0.1} />
        <SpellRotationIcon item={spells['mage-bl']} offset={-0.1} />
        <SpellRotationIcon item={items['ultimatePowerPotion']} offset={-0.1} />
        <SpellRotationIcon item={items['hornOfValor']} offset={-0.1} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pf']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pf']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement channeled>
        <SpellRotationIcon item={spells['fm-scorch']} />
        <SpellRotationIcon item={spells['fm-fireblast']} offset={0.5} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement channeled duration={3}>
        <SpellRotationIcon item={spells['fm-skb']} />
        <SpellRotationIcon item={spells['fm-pf']} offset={2.95} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pf']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement channeled>
        <SpellRotationIcon item={spells['fm-scorch']} />
        <SpellRotationIcon item={spells['fm-fireblast']} offset={0.5} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['mage-dragons_breath']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement channeled duration={3}>
        <SpellRotationIcon item={spells['mage-shifting_power']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pf']} />
        <SpellRotationIcon item={spells['fm-fireblast']} offset={0.25} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement channeled duration={3}>
        <SpellRotationIcon item={spells['fm-skb']} />
        <SpellRotationIcon item={spells['fm-pf']} offset={2.95} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement channeled>
        <SpellRotationIcon item={spells['fm-scorch']} />
        <SpellRotationIcon item={spells['fm-fireblast']} offset={0.5} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
    </Section>
  )
}

export default ST_opener
