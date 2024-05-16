import Paragraph from '@shared/Paragraph'
import ItemLink from '@shared/Links/ItemLink'
import spells from '@shared/spells.json'

function CritCheat() {
  return (
    <>
      <Paragraph>
        To use this trick you need to have a decent connexion as it requires
        fast reaction time. The trick is to send a spell (usually{' '}
        <ItemLink item={spells['fm-fireball']} /> or
        <ItemLink item={spells['fm-scorch']} />) when you are under{' '}
        <ItemLink item={spells['fm-heating']} /> AND low on{' '}
        <ItemLink item={spells['fm-fireblast']} /> and{' '}
        <ItemLink item={spells['fm-pf']} /> charges. <br></br>
        You will then find yourself in one of these scenarios :
      </Paragraph>
      <Paragraph>
        ➯{' '}
        <span style={{ textDecoration: 'underline' }}>
          Your spell failed to crit :
        </span>{' '}
        You lose your <ItemLink item={spells['fm-heating']} /> if you had one.
      </Paragraph>
      <Paragraph>
        ➯{' '}
        <span style={{ textDecoration: 'underline' }}>Your spell crits :</span>{' '}
        If you already had <ItemLink item={spells['fm-heating']} /> then you
        proc <ItemLink item={spells['fm-HotStreak']} />, if not then you only
        proc <ItemLink item={spells['fm-heating']} />.
      </Paragraph>
      <Paragraph>
        The trick allows you to not waste your{' '}
        <ItemLink item={spells['fm-heating']} /> and convert it to an{' '}
        <ItemLink item={spells['fm-HotStreak']} /> on our first scenario where
        you were about to lose your <ItemLink item={spells['fm-heating']} />.
      </Paragraph>
      <Paragraph>
        To perform it you will need to wait your fire spell to land and then
        instantly use a <ItemLink item={spells['fm-fireblast']} /> if you don't
        crit, to override the noncrit with a crit and get your{' '}
        <ItemLink item={spells['fm-HotStreak']} /> proc.
      </Paragraph>
      <Paragraph>
        I suggest practicing Fireball first rather than Scorch as i find Scorch
        timing harder to cancel, it has a shorter window.
      </Paragraph>
      <Paragraph>
        If you are in melee or have a mob in melee range, you can also do this
        trick with <ItemLink item={spells['mage-dragons_breath']} />.
      </Paragraph>
    </>
  )
}

export default CritCheat
