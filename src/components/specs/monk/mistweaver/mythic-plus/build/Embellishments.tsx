import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Paragraph from '@shared/Paragraph'
import items from '@shared/items.json'

function Embellishments() {
  return (
    <Section name="Embellishments">
      <Paragraph>
        As far as embellishments go, <ItemLink item={items['lariat']} /> is
        usually the best option. Lariat is a very strong stat proc that you can
        control with your socketed gems. As we usually want haste procs, you
        will have to equip only air gems, head to the gems section for more
        details. Lariat is only good if you are close to the maximum 8 socketed
        gems because its uptime decreases a lot for every missing gem. You
        should also not equip different types of gems as even 1 gem of a
        different will make you lose 50% of your haste procs.
      </Paragraph>
      <Paragraph>
        Equipping <ItemLink item={items['radiantMalygite']} /> or{' '}
        <ItemLink item={items['craftyYsemerald']} /> to get Crit proc instead
        are viable options if you hit the haste diminishing returns soft cap.
      </Paragraph>
      <Paragraph>
        To pair with Lariat, the very best by far is{' '}
        <ItemLink item={items['sporecloak']} />. It's an insane cheat death that
        will come in handy in M+
      </Paragraph>
    </Section>
  )
}

export default Embellishments
