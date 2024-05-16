import Section from '@shared/Section'
import AOERotation from './AOERotation'
import FirePlaystyle from './FirePlaystyle'
import STOpener from './STOpener'
import STRotation from './STRotation'

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
