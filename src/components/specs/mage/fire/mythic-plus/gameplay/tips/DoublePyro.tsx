import Paragraph from '@shared/Paragraph'
import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import spells from '@shared/spells.json'
// import items from '@shared/items.json'
// import SpellRotationElement from '@shared/spell-rotation/SpellRotationElement'
// import SpellRotationIcon from '@shared/spell-rotation/SpellRotationIcon'

function DoublePyro() {
  return (
    <Section name="Double Pyro combo">
      <Paragraph>
        In order to maximize your damage, you need to get the most uptime
        possible on <ItemLink item={spells['fm-feelTheBurn']} />. We also have
        to maintain <ItemLink item={spells['fm-improved_scorch']} /> debuff as
        much as possible on our target in ST scenarios at it's a rough 12%
        damage buff.
      </Paragraph>
      <Paragraph>
        While it's easy to maintain <ItemLink item={spells['fm-feelTheBurn']} />{' '}
        during bursts as we have a lot of <ItemLink item={spells['fm-pf']} />{' '}
        and <ItemLink item={spells['fm-fireblast']} />, it's harder
        outside of these windows. <br></br>
        For this reason, the double Pyro is pretty usefull.
      </Paragraph>
      <Paragraph>
        During SKBs or combustion, when you start to be low on GC ressources (
        <ItemLink item={spells['fm-fireblast']} /> or{' '}
        <ItemLink item={spells['fm-pf']} />
        ), instead of doing GC, Pyro, GC, Pyro, GC, Pyro, etc. You will instead
        cast <ItemLink item={spells['fm-scorch']} /> +{' '}
        <ItemLink item={spells['fm-fireblast']} />
      </Paragraph>
    </Section>
  )
}

export default DoublePyro
