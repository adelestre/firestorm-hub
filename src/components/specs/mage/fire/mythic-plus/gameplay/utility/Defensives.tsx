import Section from '@shared/Section'
import Paragraph from '@shared/Paragraph'
import ItemLink from '@shared/Links/ItemLink'
import spells from '@shared/spells.json'

function Defensives() {
  return (
    <Section name="Defensives">
      <Paragraph>
        In my opinion, Mage has insane defensives even tho their value will
        heavely rely on how good they are used as most of them are proactive and
        not reactive, you need to know what is going on to make the best use out
        of them.
      </Paragraph>
      <Paragraph>
        This part aims to make sure you don't forget any of them as you have a
        ton of tools to survive as a mage and a beginner could easely miss on
        some amazing tools.
      </Paragraph>
      <Paragraph>
        The most important ones are our CDs that heavely reduce incoming damage.{' '}
        <ItemLink item={spells['mage-ice_cold']} /> allows us to reduce incoming
        damage by 70% and on top of that you can heal yourself 80% of your max
        HP though <ItemLink item={spells['mage-cryofreeze']} />. <br></br>
        <ItemLink item={spells['mage-greater_invis']} /> also allows us to
        reduce incoming damage by 60%. An important thing to not about greater
        invis is that on some scenarios, it's much better to sit invisible and
        don't cast any spell so you don't cancel invis. This allows you to keep
        that 60% DR for as long as you need. Invis lasts 20 sec, and the DR
        lasts 3 seconds after invis breaks, which allows you to have a massive
        DR from 3 to 20 seconds if needed.<br></br>
        We also have <ItemLink item={spells['mage-mirror_images']} /> that
        allows us to have 20% DR.
      </Paragraph>
      <Paragraph>
        We can also mention our barriers{' '}
        <ItemLink item={spells['fm-fire_barrier']} /> and{' '}
        <ItemLink item={spells['mage-mass_barrier']} /> that can absorb arround
        100.000 damage. Take care, they do not stack.
      </Paragraph>
      <Paragraph>
        <ItemLink item={spells['mage-alter_time']} /> is an insane ability that
        has a ton of use, one of which is to get back to full HP if you can
        predict when you will take damage. <br></br>
        Do not forget to use healing potion if needed as it increases your HP %
        just before casting Alter, which will allow you to get back to this
        amount of HP after the second cast.
      </Paragraph>
      <Paragraph>
        Lastly, fire mages have access to a baseline cheat death though{' '}
        <ItemLink item={spells['fm-cauterize']} />.
      </Paragraph>
    </Section>
  )
}

export default Defensives
