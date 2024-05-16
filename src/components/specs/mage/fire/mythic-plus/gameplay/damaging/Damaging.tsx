import Section from '@shared/Section'
import AOERotation from './AOERotation'
import STRotation from './STRotation'
import FirePlaystyle from './FirePlaystyle'
import STOpener from './STOpener'

function Damaging() {
  return (
    <Section name="Dealing damage">
      <FirePlaystyle />
      <STRotation />
      <STOpener />
      <AOERotation />
    </Section>
  )
}

export default Damaging
