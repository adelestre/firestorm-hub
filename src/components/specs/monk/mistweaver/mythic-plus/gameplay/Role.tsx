import ItemLink from '../../../../../shared/Links/ItemLink'
import Paragraph from '../../../../../shared/Paragraph'
import Section from '../../../../../shared/Section'

function Role() {
  return (
    <Section name="Role">
      <Paragraph>
        As a healer, and even more specificly as a Mistweaver, it's easy to
        think that everything is about healing and looking at your group's
        healthbars. I need to stress that healers job is to make the whole group
        survive, and obviously a lot of it comes from healing, but people tend
        to forget about preventing the damage in the first place.
      </Paragraph>
      <Paragraph>
        As a Mistweaver you have more tools that many people think for that.{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_ringofpeace.jpg"
          name="Ring of Peace"
          link="https://www.wowhead.com/spell=116844/ring-of-peace"
        />{' '}
        or{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_legsweep.jpg"
          name="Leg Sweep"
          link="https://www.wowhead.com/spell=119381/leg-sweep"
        />{' '}
        comes to mind first, but you shouldn't underestimate other spells such
        as{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_paralysis.jpg"
          name="Paralysis"
          link="https://www.wowhead.com/spell=115078/paralysis"
        />
        ,{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_provoke.jpg"
          name="Provoke"
          link="https://www.wowhead.com/spell=115546/provoke"
        />{' '}
        or{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerslust.jpg"
          name="Tiger's Lust"
          link="https://www.wowhead.com/spell=116841/tigers-lust"
        />
        . Knowing when to use this cooldowns effectively is the biggest step
        towards mastering Mistweaver. I will give more details about each of
        these spells later in this guide.
      </Paragraph>
      <Paragraph>
        Let's not forget that Mistweaver was made to be played melee and use
        damaging spells, therefore not using this part of the toolkit is greatly
        ineficient in M+ and is never a better option.
      </Paragraph>
    </Section>
  )
}

export default Role
