import Section from '../../../../../../shared/Section'
import ItemLink from '../../../../../../shared/Links/ItemLink'
import Paragraph from '../../../../../../shared/Paragraph'

function FaelineStomp() {
  return (
    <Section name="Faeline Stomp">
      <Paragraph>
        For the entierity of the damage section of this guide, you are
        considered at all time to be on your{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_ardenweald_monk.jpg"
          name="Faeline"
          link="https://www.wowhead.com/spell=388193/jadefire-stomp"
        />
        . It is tremendously ineficient not to have the buff while using
        damaging spells. The way it works is that everytime you step on it, you
        get an 8 sec aura that will buff your damaging spells. You don't need to
        stay on it at all cost, but you need to refresh it at least every 8 sec.
        Understand that if the mobs are too far from it, it will be very
        difficult for you to deal damage and heal. So be aware of any incoming
        movement from your tank. The only tip I have is using Chi Burst while on
        it since it is a very good spell to refresh the CD (each ally and each
        enemy counts as 1 spell casted).
      </Paragraph>
    </Section>
  )
}

export default FaelineStomp
