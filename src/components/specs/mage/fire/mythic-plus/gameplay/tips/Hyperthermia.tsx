import Paragraph from '@shared/Paragraph'
import ItemLink from '@shared/Links/ItemLink'
import spells from '@shared/spells.json'

function Hyperthermia() {
  return (
    <>
      <Paragraph>
        As for Shifting Power, make sure to use your a{' '}
        <ItemLink item={spells['fm-fireblast']} /> everytime you are about to
        reach 3 stacks to not overcap, especially in high haste scenarios where
        you will get your <ItemLink item={spells['fm-fireblast']} /> charge back
        before <ItemLink item={spells['fm-hyperthermia']} /> ends anyway.
      </Paragraph>
      <Paragraph>
        With experience, you will be abble to recognize some patterns where{' '}
        <ItemLink item={spells['fm-hyperthermia']} /> often procs. This usually
        happens after you finish big bursts windows (Especially at pull with
        double lust where you use a combust, then 2 SKB, there is high chances{' '}
        <ItemLink item={spells['fm-hyperthermia']} /> will proc after the first{' '}
        <ItemLink item={spells['fm-HotStreak']} /> consumed.)
      </Paragraph>
      <Paragraph>
        It also happens on pull if you don't want to burst as soon as the fight
        starts, especially in M+ scenarios, you can use{' '}
        <ItemLink item={spells['fm-pf']} />,{' '}
        <ItemLink item={spells['fm-fireblast']} /> (or any GC to generate an Hot
        Streak), then <ItemLink item={spells['fm-pyro']} /> or{' '}
        <ItemLink item={spells['fm-fs']} /> to consume your{' '}
        <ItemLink item={spells['fm-HotStreak']} /> and you will most of the
        times proc Hyperthermia which is very valuable.
      </Paragraph>
      <Paragraph>
        Adding a sound on <ItemLink item={spells['fm-hyperthermia']} /> proc
        helps as you will often need to react fast, during burst with high
        enough haste most of the times you get Hyperthermia to proc after your
        burst when you want to use{' '}
        <ItemLink item={spells['mage-shifting_power']} />, on our last
        Pyro/Flamestrike sent. Common mistake will be you send your spell then
        instantly cast <ItemLink item={spells['mage-shifting_power']} /> and
        unfortunately, Hyperthermia procs as soon as you send your last Hot
        Streak. So you either have to cancel{' '}
        <ItemLink item={spells['mage-shifting_power']} /> and waste it, or lose{' '}
        precious <ItemLink item={spells['fm-hyperthermia']} /> uptime. I will
        provide my WA in the end of the guide if you want the sound part.
      </Paragraph>
      <Paragraph>
        On some scenarios on M+ you will find yourself with a few seconds left
        to send <ItemLink item={spells['fm-pyro']} /> or{' '}
        <ItemLink item={spells['fm-fs']} /> to trigger{' '}
        <ItemLink item={spells['fm-skb']} />, and Hyperthermia procs, which
        prevents you from hardcasting Pyro or FS, and you will waste a SKB which
        is pretty bad. In these scenarios remove your Hyperthermia buff with a
        macro (/cancelaura) or by right clicking it (even tho i don't recommand
        right clicking it but going for a macro instead, it can save you a
        bind).
      </Paragraph>
    </>
  )
}

export default Hyperthermia
