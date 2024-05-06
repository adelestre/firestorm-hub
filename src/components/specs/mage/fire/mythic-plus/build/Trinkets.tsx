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
              - Very strong Intell proc with a good uptime (arround 38% for me)
              and a ton of free haste which is by far our best secondary stat.
              <br />
              This trinket is much stronger on Firestorm as it usually procs on
              pull (so you benefit from it during burst which increases its
              value).
              <br />
              It also lowers your prepot cooldown everytime which is a good
              extra bonus.
            </ListElement>
            <ListElement>
              <ItemLink
                className="font-semibold"
                item={items['idolOfTheDreamer']}
              />{' '}
              - This is in my opinion our bis fire mage trinket by far if you
              can get yourself a decent amount of gems. If you can get full gems
              this trinket has insane value. <br />
              On top of this, it's use on Firestorm is even stronger as it has
              infinite duration until you don't proc the max bonus.
              <br />
              When you pull you will get X amount of stacks (each stack
              rewarding an amount of haste, and X is your number of socketed
              Ysemerald gems. In my case I proc 8 stacks everytime as I'm fully
              socketed). So as soon as I pull, I will go from 0 to 8 stacks,
              this lasts infinitely until I reach 18 stacks.
              <br />
              This can be used to proc it first on a creature to reach 8 stacks,
              so on your next pull you will start pulling going from 8 to 16
              stacks, which will provide a lot of haste for your burst.
            </ListElement>
            <ListElement>
              <ItemLink
                className="font-semibold"
                item={items['whisperingIcon']}
              />{' '}
              - Good versa/haste procs if your healer and tank also have it.
              It's imo weaker than the two previous options if you manage to get
              full gear and good stats (and gems).
            </ListElement>
          </List>
        </ListElement>
        <ListElement>
          <span className="mb-1">On-use Trinkets :</span>
          <List className="list-disc">
            <ListElement>
              <ItemLink className="font-semibold" item={items['hornOfValor']} />{' '}
              - Good stat on-use. Pretty good trinket that lines up pretty
              nicely with our bursts.
            </ListElement>
          </List>
        </ListElement>
      </List>
      <Paragraph>
        I usually default{' '}
        <ItemLink className="font-semibold" item={items['idolOfTheDreamer']} />{' '}
        with{' '}
        <ItemLink
          className="font-semibold"
          item={items['alacritousAlchemistStone']}
        />{' '}
        in most scenarios.
      </Paragraph>
    </Section>
  )
}

export default Trinkets
