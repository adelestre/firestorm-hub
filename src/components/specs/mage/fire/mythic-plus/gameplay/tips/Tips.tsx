import Paragraph from '@shared/Paragraph'
import Section from '@shared/Section'
import Tabs from '@shared/tabs/Tabs'
import TabElement from '@shared/tabs/TabElement'
import DoublePyro from './DoublePyro'
import ShiftingPower from './ShiftingPower'
import Hyperthermia from './Hyperthermia'
import CritCheat from './CritCheat'
import DelayedPyro from './DelayedPyro'

function Tips() {
  return (
    <Section name="Maximizing your damage">
      <Paragraph>
        This part will provide you with some advanced tips and tricks that will
        help you reach higher DPS and/or uptime DPS. There is a lot to cover
        here, this part is for people that already got the basics and want to
        get better.
      </Paragraph>
      <Tabs className="space-top" defaultTab={null}>
        <TabElement name="Double Pyro combo" id="section1">
          <DoublePyro />
        </TabElement>
        <TabElement name="Shifting Power" id="section2">
          <ShiftingPower />
        </TabElement>
        <TabElement name="Hyperthermia" id="section3">
          <Hyperthermia />
        </TabElement>
        <TabElement name='Crit "cheat"' id="section4">
          <CritCheat />
        </TabElement>
        <TabElement name="Delayed Pyro" id="section5">
          <DelayedPyro />
        </TabElement>
      </Tabs>
    </Section>
  )
}

export default Tips
