import Section from '@shared/Section'
import Tabs from '@shared/tabs/Tabs'
import TabElement from '@shared/tabs/TabElement'
import WeakAuras from './WeakAuras'
import Macros from './Macros'

function MacrosandWAs() {
  return (
    <Section name="Macros & Weak Auras">
      <Tabs className="space-top" defaultTab={null}>
        <TabElement name="Macros" id="Macros">
          <Macros />
        </TabElement>
        <TabElement name="Weak Auras" id="WAs">
          <WeakAuras />
        </TabElement>
      </Tabs>
    </Section>
  )
}

export default MacrosandWAs
