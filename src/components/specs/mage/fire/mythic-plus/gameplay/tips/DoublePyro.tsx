import Paragraph from '@shared/Paragraph'
import ItemLink from '@shared/Links/ItemLink'
import spells from '@shared/spells.json'
import SpellRotationElement from '@shared/spell-rotation/SpellRotationElement'
import SpellRotationIcon from '@shared/spell-rotation/SpellRotationIcon'
import YoutubeEmbed from '@shared/YoutubeEmebed'

function DoublePyro() {
  return (
    <>
      <Paragraph>
        In order to maximize your damage, you need to get the most uptime
        possible on <ItemLink item={spells['fm-feelTheBurn']} />. We also have
        to maintain <ItemLink item={spells['fm-improved_scorch']} /> debuff as
        much as possible on our target in ST scenarios at it's a rough 12%
        damage buff.
      </Paragraph>
      <Paragraph>
        While it's easy to maintain <ItemLink item={spells['fm-feelTheBurn']} />{' '}
        during bursts as we have a lot of <ItemLink item={spells['fm-pf']} />{' '}
        and <ItemLink item={spells['fm-fireblast']} />, it's harder outside of
        these windows. <br></br>
        For this reason, the double Pyro is pretty useful.
      </Paragraph>
      <Paragraph>
        During SKBs or combustion, when you start to be low on GC resources (
        <ItemLink item={spells['fm-fireblast']} /> or{' '}
        <ItemLink item={spells['fm-pf']} />
        ), instead of doing GC, Pyro, GC, Pyro, GC, Pyro, etc. You should cast{' '}
        <ItemLink item={spells['fm-scorch']} /> +{' '}
        <ItemLink item={spells['fm-fireblast']} />. This is what it looks like :
        <br></br>
        <br></br>
      </Paragraph>
      <Paragraph>
        You can have a look at this video if you need to see what it looks like.
        Basically since you are in SKB or Combust, you already sent a crit Pyro
        which means you should have a <ItemLink item={spells['fm-heating']} />{' '}
        so you already have you first crit. Then we cast{' '}
        <ItemLink item={spells['fm-scorch']} /> , during which you cast{' '}
        <ItemLink item={spells['fm-fireblast']} />, and then spam Pyro when{' '}
        <ItemLink item={spells['fm-scorch']} /> casts ends. <br></br>
        You should have a first crit, fireblast should be your second crit, you
        may think that our scorch will be a wasted crit since we already proc{' '}
        <ItemLink item={spells['fm-HotStreak']} />, but if you send your Pyro
        fast enough you will still benefit from it as a crit scorch gives you
        some milliseconds before you actually get your crit registered.
      </Paragraph>
      <Paragraph>
        This combo is pretty much simple to do but it's hard to master when you
        should do it or not, it plays a big role in handeling your GC economy
        perfectly.<br></br>
        <br></br>
        It should look like that :<br></br>
      </Paragraph>
      <SpellRotationElement channeled duration={2}>
        <SpellRotationIcon item={spells['fm-scorch']} />
        <SpellRotationIcon item={spells['fm-fireblast']} offset={1.5} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <SpellRotationElement>
        <SpellRotationIcon item={spells['fm-pyro']} />
      </SpellRotationElement>
      <Paragraph>
        Here is a video of this combo so you can see what it looks like.
      </Paragraph>
      <YoutubeEmbed id="aqszsySXU1E" title="Double Pyro combo" />
    </>
  )
}

export default DoublePyro
