import Abbreviations from './Abbreviations'
import Section from '@shared/Section'
import IntroductionTitle from './IntroductionTitle'
import Paragraph from '@shared/Paragraph'
import Tabs from '@shared/tabs/Tabs'
import TabElement from '@shared/tabs/TabElement'

function Introduction() {
  return (
    <Section name="Introduction" CustomTitle={IntroductionTitle}>
      <Tabs className="space-top" defaultTab="section3">
        <TabElement
          name="un nom de section 1 très long pour voir comment ça se comporte avec un nom de section très long"
          id="section1"
        >
          Du contenu
        </TabElement>
        <TabElement name="section 2" id="section2">
          Beaucoup de contenu Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Esse harum voluptatum explicabo! Quasi quod repellat pariatur
          quaerat suscipit labore atque enim eos numquam totam! Beatae totam
          obcaecati laborum ipsum voluptates fugit autem, tempora repudiandae
          fuga facere impedit quia! Voluptates, laudantium. Error id eaque
          nostrum veritatis nihil voluptas corrupti enim at laborum deserunt ex,
          vero animi excepturi iste nisi magni perferendis magnam voluptates aut
          eveniet praesentium reiciendis quod iure! A ratione corporis laborum
          ea praesentium reiciendis aut et amet beatae! Excepturi quos omnis
          sint quis ex optio necessitatibus blanditiis adipisci illo, eveniet
          voluptatem amet tenetur cupiditate ipsam ullam. Sit, maiores dolores!
        </TabElement>
        <TabElement name="section 3" id="section3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          perferendis, sed tenetur praesentium rerum totam autem facere
          accusantium. Officiis quaerat porro, tempora sapiente distinctio dolor
          accusamus explicabo velit eum quia libero beatae sequi laudantium,
          natus fuga et rem voluptates voluptatibus! Iste temporibus dolores
          esse possimus eaque unde odit, incidunt nobis! Quis itaque nisi hic
          cum earum maiores labore delectus nemo eveniet esse doloremque
          pariatur molestias dicta reiciendis dolor sequi quo obcaecati omnis,
          unde voluptatem non distinctio. Fuga nostrum, vero omnis culpa, nisi
          doloribus recusandae et earum odio reiciendis alias consequuntur! Unde
          expedita cum dignissimos! In qui veritatis eius ipsa commodi, quia
          nihil culpa numquam modi blanditiis doloremque doloribus ex
          consequuntur quo! Enim tempora excepturi, iste iusto maiores nam
          fugiat rerum impedit ipsam facere? Ex excepturi molestiae adipisci
          culpa in quis, magni aperiam sapiente harum cum possimus deleniti et
          veniam debitis dolores vero corrupti dignissimos. Incidunt veniam quos
          tenetur sit sed quia vitae saepe, consequatur, corporis dolor
          necessitatibus minima. Deserunt hic magni cupiditate dolorum doloribus
          quaerat soluta ex, vel tempora quod quasi, sapiente aspernatur nostrum
          neque omnis maxime perferendis impedit! Laudantium non, praesentium
          unde itaque adipisci aliquid a alias sint quidem mollitia iste omnis
          saepe ut ducimus laborum. Maxime, quaerat a?
        </TabElement>
        <TabElement name="section 4" id="section4">
          Du contenu
        </TabElement>
        <TabElement name="section 5" id="section5">
          Du contenu
        </TabElement>
        <TabElement name="section 6" id="section6">
          Du contenu
        </TabElement>
        <TabElement name="section 7" id="section7">
          Du contenu
        </TabElement>
        <TabElement name="section 8" id="section8">
          Du contenu
        </TabElement>
        <TabElement name="section 9" id="section9">
          Du contenu
        </TabElement>
        <TabElement name="section 10" id="section10">
          Du contenu
        </TabElement>
        <TabElement name="section 11" id="section11">
          Du contenu
        </TabElement>
        <TabElement name="section 12" id="section12">
          Du contenu
        </TabElement>
        <TabElement name="section 13" id="section13">
          Du contenu
        </TabElement>
        <TabElement name="section 14" id="section14">
          Du contenu
        </TabElement>
        <TabElement name="section 15" id="section15">
          Du contenu
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
