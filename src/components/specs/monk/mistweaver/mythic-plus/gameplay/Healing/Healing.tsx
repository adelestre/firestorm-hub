import LowDamageHealing from './LowDamageHealing'
import HealingBasics from './HealingBasics'
import HighSTDamageHealing from './HighSTDamageHealing'
import HighGroupDamageHealing from './HighGroupDamageHealing'
import Section from '@shared/Section'

function Healing() {
  return (
    <Section name="Healing damage patterns">
      <HealingBasics />
      <LowDamageHealing />
      <HighSTDamageHealing />
      <HighGroupDamageHealing />
    </Section>
  )
}

export default Healing
