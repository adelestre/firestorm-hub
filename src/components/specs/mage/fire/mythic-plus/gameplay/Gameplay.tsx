import Role from './Role'
import Damaging from './damaging/Damaging'
import Section from '@shared/Section'
import Defensives from './utility/Defensives'
import MageTools from './utility/MageTools'

function Gameplay() {
  return (
    <Section name="Gameplay">
      <Role />
      <Damaging />
      <Defensives />
      <MageTools />
    </Section>
  )
}

export default Gameplay
