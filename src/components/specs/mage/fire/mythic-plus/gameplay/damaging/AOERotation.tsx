import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'
import items from '@shared/items.json'
import SpellRotationElement from '@shared/spell-rotation/SpellRotationElement'
import SpellRotation from '@shared/spell-rotation/SpellRotation'
import SpellRotationIcon from '@shared/spell-rotation/SpellRotationIcon'

function AOERotation() {
  return (
    <Section name="AoE damage rotation">
      <Paragraph>
        AoE rotation is better on 3-4+ targets. If you mastered ST rotation,
        they you are ready to go you will basically just switch every{' '}
        <ItemLink item={spells['fm-pyro']} /> cast by{' '}
        <ItemLink item={spells['fm-fs']} /> instead.
      </Paragraph>
      <Paragraph>
        The difference outside of switching pyro for flamestrike, will be that
        you also generate a ton more <ItemLink item={spells['fm-pf']} /> and{' '}
        <ItemLink item={spells['fm-fireblast']} /> charges because of our
        talents <ItemLink item={spells['fm-phoenix_reborn']} /> and{' '}
        <ItemLink item={spells['fm-fervent_flickering']} /> that procs much more
        as you ignite a lot of targets.
      </Paragraph>
      <Paragraph>
        Also if <ItemLink item={spells['fm-hyperthermia']} /> procs in an AOE
        scenario, you obviously spam <ItemLink item={spells['fm-fs']} /> and not
        pyro.
      </Paragraph>
      <Paragraph>
        I heavely suggest playing a macro to cast flamestrike instantly at your
        cursor position which will make you much faster especially during double
        lust, as long as playing with a Weak Aura to help you track your mouse
        position. I will provide some usefull macros and Weak auras in the end
        of this guide.<br></br>
        <br></br>
      </Paragraph>
      <SpellRotationElement channeled>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement channeled duration={0}>
        <SpellRotationIcon />
        <SpellRotationIcon item={spells['fm-combustion']} offset={-0.5} />
        <SpellRotationIcon item={spells['fm-pf']} offset={-0.25} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
        <SpellRotationIcon item={spells['mage-bl']} offset={-0.1} />
        <SpellRotationIcon item={spells['mage-bl']} offset={-0.1} />
        <SpellRotationIcon item={items['ultimatePowerPotion']} offset={-0.1} />
        <SpellRotationIcon item={items['hornOfValor']} offset={-0.1} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pf']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pf']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement channeled>
        <SpellRotationIcon item={spells['fm-scorch']} />
        <SpellRotationIcon item={spells['fm-fireblast']} offset={0.5} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement channeled duration={3}>
        <SpellRotationIcon item={spells['fm-skb']} />
        <SpellRotationIcon item={spells['fm-pf']} offset={2.95} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pf']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement channeled>
        <SpellRotationIcon item={spells['fm-scorch']} />
        <SpellRotationIcon item={spells['fm-fireblast']} offset={0.5} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['mage-dragons_breath']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement channeled duration={3}>
        <SpellRotationIcon item={spells['mage-shifting_power']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pf']} />
        <SpellRotationIcon item={spells['fm-fireblast']} offset={0.25} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement channeled duration={3}>
        <SpellRotationIcon item={spells['fm-skb']} />
        <SpellRotationIcon item={spells['fm-pf']} offset={2.95} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement channeled>
        <SpellRotationIcon item={spells['fm-scorch']} />
        <SpellRotationIcon item={spells['fm-fireblast']} offset={0.5} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fireblast']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-fs']} />
      </SpellRotationElement>
    </Section>
  )
}

export default AOERotation
