import Role from './Role'
import DamagingToHeal from './DamagingToHeal'
import Damaging from './damaging/Damaging'
import Healing from './Healing/Healing'
import Section from '../../../../../shared/Section'

function Gameplay() {
  return (
    <Section name="Gameplay">
      <Role />
      <DamagingToHeal />
      <Damaging />
      <Healing />
    </Section>
  )
}

export default Gameplay
