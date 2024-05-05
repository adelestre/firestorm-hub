import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import List from '@shared/list/List'
import ListElement from '@shared/list/ListElement'
import Paragraph from '@shared/Paragraph'
import items from '@shared/items.json'

function Trinkets() {
  return (
    <Section name="Trinkets">
      <Paragraph>
        For Mythic+ there are several viable options for trinkets. Here's the
        better ones :
      </Paragraph>
      <List className="list-disc">
        <ListElement>
          <span className="font mb-1">Passive Trinkets :</span>
          <List className="list-disc">
            <ListElement>
              <ItemLink
                className="font-semibold"
                item={items['alacritousAlchemistStone']}
              />{' '}
              - Very strong Intell proc with a good uptime (arround 38% for me) and a ton of free haste which is by far our best secondary stat.<br />
              This trinket is much stronger on Firestorm as it usually procs on pull (so you benefit from it during burst which increases its value). 
               <br />It also lowers your prepot cooldown everytime which is a good extra bonus.
            </ListElement>
            <ListElement>
              <ItemLink
                className="font-semibold"
                item={items['idolOfTheDreamer']}
              />{' '}
              - This  is in my opinion our bis fire mage trinket by far if you can get yourself a decent amount of gems. If you can get full gems this 
              trinket has insane value. <br />
              On top of this, it's use on Firestorm is even stronger as it has infinite duration until you don't proc the max bonus.<br />
              To provide more information, 99% of the times you will proc it as soon as you damage an ennemy on pull providing you free haste, that haste has no duration.
              You can for exemple send a spell to damage any creature before pulling a raid boss in order to start the fight with free haste.<br />
              Everytime it procs, you get increasing haste, until you reach max stacks (18) which then resets the buff after it ends. Until then you have 100% uptime.<br />
              Then it restarts to first stacks with infinite duration, until you proc max stats again.
            </ListElement>
            <ListElement>
              <ItemLink
                className="font-semibold"
                item={items['whisperingIcon']}
              />{' '}
              - Good versa/haste procs if your healer and tank also have it. It's imo weaker than the two previous options if you manage to get full gear and good stats (and gems).
            </ListElement>
          </List>
        </ListElement>
        <ListElement>
          <span className="mb-1">On-use Trinkets :</span>
          <List className="list-disc">
            <ListElement>
              <ItemLink className="font-semibold" item={items['hornOfValor']} />{' '}
              - Good stat on-use. Pretty good trinket that lines up pretty nicely with our bursts.
            </ListElement>
          </List>
        </ListElement>
      </List>
      <Paragraph>
        I usually default <ItemLink className="font-semibold"item={items['idolOfTheDreamer']}/>{' '} with <ItemLink className="font-semibold"item={items['alacritousAlchemistStone']}/>
        {' '}in most scenarios.
      </Paragraph>
    </Section>
  )
}

export default Trinkets
