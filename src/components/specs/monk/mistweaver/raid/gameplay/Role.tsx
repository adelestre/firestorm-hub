import ItemLink from '@shared/Links/ItemLink'
import Paragraph from '@shared/Paragraph'
import Section from '@shared/Section'
import spells from '@shared/spells.json'

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
        <ItemLink item={spells['monk-rop']} /> or{' '}
        <ItemLink item={spells['monk-sweep']} /> comes to mind first, but you
        shouldn't underestimate other spells such as{' '}
        <ItemLink item={spells['monk-para']} />,{' '}
        <ItemLink item={spells['monk-prov']} /> or{' '}
        <ItemLink item={spells['monk-tl']} />. Knowing when to use this
        cooldowns effectively is the biggest step towards mastering Mistweaver.
        I will give more details about each of these spells later in this guide.
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
