import Paragraph from '@shared/Paragraph'
import ItemLink from '@shared/Links/ItemLink'
import spells from '@shared/spells.json'

function DelayedPyro() {
  return (
    <>
      <Paragraph>
        This trick aims to both proc more{' '}
        <ItemLink item={spells['fm-hyperthermia']} /> and at better timings to
        have the most value out of it and help us get more{' '}
        <ItemLink item={spells['fm-combustion']} /> and{' '}
        <ItemLink item={spells['fm-skb']} />. Is it experimental and is
        something i don't have in common with other mages, as it will cause you
        to trade a spell benefiting from Combustion for better chances to proc{' '}
        <ItemLink item={spells['fm-hyperthermia']} /> (and at better timings
        most importantly).
      </Paragraph>
      <Paragraph>
        This trick is pretty simple to explain but requires some practice.
        <br></br>
        You will find yourself in scenarios where you are at your last GCD in
        combust, most mages try to fit in a Pyro right before combust ends which
        is very good practice, as your pyro will crit if its cast before your
        combust ends, even if the pyro lands when you aren't in combust anymore.
      </Paragraph>
      <Paragraph>
        Instead of sending this pyro, delay it by a bit so you send it out of
        combust which allows Hyperthermia to proc on it. This is especially
        usefull on burst as you chain Combust with two SKB and your chances to
        proc Hyperthermia on your next{' '}
        <ItemLink item={spells['fm-HotStreak']} /> consumed are very high.
      </Paragraph>
      <Paragraph>
        Not only i think it's a big dps gain to proc Hyperthermia, is allows to
        crit much more as if you didnt as Hyperthermia is 100% crit Pyros/FS,
        which translates into reaching your next SKB faster and reducing your
        combust CD though <ItemLink item={spells['fm-kindling']} />.
      </Paragraph>
    </>
  )
}

export default DelayedPyro
