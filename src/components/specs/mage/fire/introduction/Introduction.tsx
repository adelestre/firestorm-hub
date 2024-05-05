import Section from '@shared/Section'
import Paragraph from '@shared/Paragraph'
import Abbreviations from './Abbreviations'
import IntroductionTitle from './IntroductionTitle'

function Introduction() {
  return (
    <Section name="Introduction" CustomTitle={IntroductionTitle}>
      <Paragraph>
        Hi, I have changed my nickname several times on Firestorm, but the main
        ones have been Jinwoo and Escanor.
      </Paragraph>
      <Paragraph>
        I have played a lot of mage since childhood across all expansions since
        WotLK. I'm doing all PVE content and part of Fanatic's main raiding
        core, i also like to push high M+ keys, and train to get better
        everytime.
      </Paragraph>
      <Paragraph>
        In this guide, I will cover all the information you need to get started
        with the specialization as well as to reach an advanced level. I will
        provide every tip and trick I have learned over time so you can become
        an expert at using Fire too.
      </Paragraph>
      <Abbreviations />
    </Section>
  )
}

export default Introduction
