import Section from '@shared/Section'
import AOERotation from './AOERotation'
import FaelineStomp from './FaelineStomp'
import STRotation from './STRotation'

function Damaging() {
  return (
    <Section name="Dealing damage">
      <FaelineStomp />
      <STRotation />
      <AOERotation />
    </Section>
  )
}

export default Damaging
