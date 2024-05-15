import Abbreviations from './Abbreviations'
import Section from '@shared/Section'
import IntroductionTitle from './IntroductionTitle'
import Paragraph from '@shared/Paragraph'

function Introduction() {
  return (
    <Section name="Introduction" CustomTitle={IntroductionTitle}>
      <Paragraph>
        Hello ! My name is Senniya and I'm a MW main since BFA. I do all PvE
        contents at a fairly high level since SL.
      </Paragraph>
      <Paragraph>
        I have spent a lot of time theorycrafting and testing the spec, and I
        have considered many different playstyles and builds. I am also curently
        the Mistweaver QA for Firestorm.
      </Paragraph>
      <Paragraph>
        In this guide I will cover all the information you need to get started
        with the spec, and then give you some advanced information so you can
        become an expert at Mistweaver too.
      </Paragraph>
      <Abbreviations />
    </Section>
  )
}

export default Introduction
