import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import SpellRotation from '@shared/spell-rotation/SpellRotation'
import SpellRotationElement from '@shared/spell-rotation/SpellRotationElement'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'
import SpellRotationIcon from '@shared/spell-rotation/SpellRotationIcon'

function STRotation() {
  return (
    <Section name="ST damage rotation">
      <Paragraph>
        Our ST damage rotation is only composed of 3 spells :{' '}
        <ItemLink item={spells['monk-tp']} />
        , <ItemLink item={spells['monk-bok']} /> and{' '}
        <ItemLink item={spells['monk-rsk']} />. The goal is to get as many{' '}
        <ItemLink item={spells['monk-rsk']} /> as possible since it is our
        biggest damaging ability. In order to do so, we need to fish for resets
        with <ItemLink item={spells['mw-totm']} /> and cast it as soon as it
        comes off CD. The rotation will be as follow :
      </Paragraph>
      <SpellRotation className="space-top">
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-rsk']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-tp']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-bok']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-tp']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-bok']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-tp']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-tp']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-rsk']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-bok']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-rsk']} />
        </SpellRotationElement>
      </SpellRotation>
      <Paragraph>
        Now, this is an example where you get no reset before 2nd{' '}
        <ItemLink item={spells['monk-rsk']} /> (it has a CD exactly equal to 8
        GCD). If you notice, at the end, since it will soon come off CD, we use
        2 <ItemLink item={spells['monk-tp']} /> so we are able to get more
        chance to reset, since getting a reset at this point would be useless.
        Then we are able to get a reset instantly. Obviously if you're very
        lucky, rotation will look like :
      </Paragraph>
      <SpellRotation className="space-top">
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-rsk']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-tp']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-bok']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-rsk']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-tp']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-bok']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-rsk']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-tp']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-bok']} />
        </SpellRotationElement>
        <SpellRotationElement>
          <SpellRotationIcon item={spells['monk-rsk']} />
        </SpellRotationElement>
      </SpellRotation>
      <Paragraph>
        It is very simple, but mastering this makes a lot of difference.
      </Paragraph>
    </Section>
  )
}

export default STRotation
