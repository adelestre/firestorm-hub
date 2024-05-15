import Abbreviations from './Abbreviations'
import Section from '@shared/Section'
import IntroductionTitle from './IntroductionTitle'
import Paragraph from '@shared/Paragraph'
import Code from '@shared/Code'
import Tabs from '@shared/tabs/Tabs'
import TabElement from '@shared/tabs/TabElement'
import ClipboardCopyButton from '@shared/ClipboardCopyButton'

function Introduction() {
  return (
    <Section name="Introduction" CustomTitle={IntroductionTitle}>
      <Code
        text={`/use [mod:ctrl,@focus] Explosion pyrotechnique; Explosion pyrotechnique
        /use [@mouseover, exists] Explosion pyrotechnique; Explosion pyrotechnique`}
      />
      <ClipboardCopyButton file="/assets/cpy.txt" />
      <Tabs>
        <TabElement id="basic1" name="Basic 1">
          <Section name="test">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem
            corrupti molestias impedit nostrum maiores aut doloribus vero
            commodi mollitia iusto nesciunt ullam quas quaerat facilis tenetur
            cupiditate, architecto repudiandae amet laudantium, eligendi nemo
            dolorum? Velit ratione, nobis adipisci doloribus autem rerum laborum
            praesentium voluptatibus repudiandae magni, iste voluptates ad
            provident suscipit, eum perspiciatis vitae nemo id. Veniam molestiae
            dolores quidem officiis maiores. Reiciendis dicta doloribus atque
            quae earum. Accusantium animi nulla saepe aliquid libero facere
            exercitationem neque, adipisci cumque, ratione voluptates ullam
            laborum officia nihil deleniti, magni fugiat possimus. Tempore
            tempora molestiae repellat quisquam at doloremque quaerat eligendi
            vel facilis? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Mollitia sunt quod fugit fugiat accusantium. Accusamus commodi
            minus dignissimos tempora labore quae harum eligendi repudiandae
            possimus, consectetur magni vel ullam fugiat consequatur, totam
            exercitationem ut quos ducimus! Praesentium maxime tempora at atque
            neque veniam accusamus ab odit minima doloribus eos, officia
            consequuntur quam! Fugit odio doloremque tenetur nihil accusamus
            optio esse ipsam molestias impedit quasi? Repudiandae aut quos
            impedit cum assumenda vel ducimus minima quisquam, tenetur pariatur
            totam cumque sapiente temporibus reprehenderit vitae exercitationem
            cupiditate voluptatibus porro, tempora rerum voluptas sed velit?
            Odio, nulla expedita sapiente, voluptatem cumque adipisci voluptas
            rerum molestiae tenetur exercitationem minus quidem, excepturi
            numquam aliquam. Quasi, consequatur fugit! Repellendus earum
            perferendis vero eos necessitatibus, nesciunt fugiat aspernatur quis
            nihil eum, illo tempore obcaecati? Nihil, dolorum nesciunt aliquid
            dicta animi ipsa alias iure consectetur nostrum omnis magnam maxime
            dolor voluptate impedit, officia non in adipisci sapiente culpa odit
            exercitationem similique? Doloremque, itaque iusto vitae
            necessitatibus harum tempore ratione rerum ipsa non vero natus
            cupiditate temporibus sed eius ut consequuntur! Dolorum perferendis
            explicabo, debitis reprehenderit alias architecto totam qui magni
            quae sit iusto odio omnis vitae ad veritatis beatae veniam, quod
            molestiae ratione fuga natus perspiciatis autem voluptatibus?
            Consequuntur.
          </Section>
        </TabElement>
        <TabElement id="advanced1" name="Advanced 1">
          <Section name="test2">
            <Paragraph>
              Hello ! My name is Senniya and I'm a MW main since BFA. I do all
              PvE contents at a fairly high level since SL.
            </Paragraph>
            <Paragraph>
              I have spent a lot of time theorycrafting and testing the spec,
              and I have considered many different playstyles and builds. I am
              also curently the Mistweaver QA for Firestorm.
            </Paragraph>
            <Paragraph>
              In this guide I will cover all the information you need to get
              started with the spec, and then give you some advanced information
              so you can become an expert at Mistweaver too.
            </Paragraph>
          </Section>
        </TabElement>
      </Tabs>
      <Tabs>
        <TabElement id="basic2" name="Basic 2">
          <Section name="test3">
            <Paragraph>
              Hello ! My name is Senniya and I'm a MW main since BFA. I do all
              PvE contents at a fairly high level since SL.
            </Paragraph>
            <Paragraph>
              I have spent a lot of time theorycrafting and testing the spec,
              and I have considered many different playstyles and builds. I am
              also curently the Mistweaver QA for Firestorm.
            </Paragraph>
            <Paragraph>
              In this guide I will cover all the information you need to get
              started with the spec, and then give you some advanced information
              so you can become an expert at Mistweaver too.
            </Paragraph>
          </Section>
        </TabElement>
        <TabElement id="advanced2" name="Advanced 2">
          <Section name="test4">
            <Paragraph>
              Hello ! My name is Senniya and I'm a MW main since BFA. I do all
              PvE contents at a fairly high level since SL.
            </Paragraph>
            <Paragraph>
              I have spent a lot of time theorycrafting and testing the spec,
              and I have considered many different playstyles and builds. I am
              also curently the Mistweaver QA for Firestorm.
            </Paragraph>
            <Paragraph>
              In this guide I will cover all the information you need to get
              started with the spec, and then give you some advanced information
              so you can become an expert at Mistweaver too.
            </Paragraph>
          </Section>
        </TabElement>
      </Tabs>
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
