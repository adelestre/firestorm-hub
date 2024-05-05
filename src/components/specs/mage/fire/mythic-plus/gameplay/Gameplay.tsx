import Role from './Role'
import Damaging from './damaging/Damaging'
import Section from '@shared/Section'

function Gameplay() {
  return (
    <Section name="Gameplay">
      <Role />
      <Damaging />
    </Section>
  )
}

export default Gameplay
