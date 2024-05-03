import LowHealing from './LowHealing'
import HealingBasics from './HealingBasics'
import HighSTHealing from './HighSTHealing'
import HighGroupHealing from './HighGroupHealing'
import Section from '@shared/Section'

function Healing() {
  return (
    <Section name="Healing damage patterns">
      <HealingBasics />
      <LowHealing />
      <HighSTHealing />
      <HighGroupHealing />
    </Section>
  )
}

export default Healing
