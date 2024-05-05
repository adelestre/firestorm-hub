import Section from '@shared/Section'
import AOERotation from './AOERotation'
import ST_rotation from './ST_rotation'
import FirePlaystyle from './FirePlaystyle'
import ST_opener from './ST_opener'

function Damaging() {
  return (
    <Section name="Dealing damage as a fire mage">
      <FirePlaystyle />
      <ST_rotation />
      <ST_opener />
      <AOERotation />
    </Section>
  )
}

export default Damaging
