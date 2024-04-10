import Section from '@shared/Section'
import Cons from './Cons'
import Embellishments from './Embellishments'
import FullBuild from './FullBuild'
import Stats from './Stats'
import Talents from './Talents'
import Trinkets from './Trinkets'

function Build() {
  return (
    <Section name="Build">
      <Stats />
      <Talents />
      <Trinkets />
      <Embellishments />
      <Cons />
      <FullBuild />
    </Section>
  )
}

export default Build
