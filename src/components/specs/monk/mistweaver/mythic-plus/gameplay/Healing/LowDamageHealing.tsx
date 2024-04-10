import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'

function LowDamageHealing() {
  return (
    <Section name="Healing low damage">
      <Paragraph>
        As you probably understand by now, our goal is to maximize damage, so as
        long as damage is not causing much of an issue, then you should let your
        passive heals carry. You can and should also make use of your{' '}
        <ItemLink item={spells['monk-viv']} /> to handle any low damage events.
      </Paragraph>
    </Section>
  )
}

export default LowDamageHealing
