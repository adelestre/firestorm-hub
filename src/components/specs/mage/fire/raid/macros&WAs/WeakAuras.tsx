import Paragraph from '@shared/Paragraph'
import ClipboardCopyButton from '@shared/ClipboardCopyButton'

function WeakAuras() {
  return (
    <>
      <Paragraph>
        In this part i will share my Weak Auras that you can import if you want
        to.
      </Paragraph>
      <Paragraph>
        My main WA tracks a ton of buffs, basically all you need to track on
        fire mage. It also has sound effect on Hyperthermia which helps me react
        faster but you can remove it if needed.
        <img
          className="mx-auto my-auto mt-6 rounded-sm"
          src="/assets/mage/fire/MainWA.png"
          alt=""
        />
        <ClipboardCopyButton file="/assets/mage/fire/mainWA.txt" />
      </Paragraph>
      <Paragraph>
        Additionnally, there is also this group of WeakAuras that track our bis
        trinkets proc, display their duration, and is especially usefull for
        Idols. It also has a sound effect when you get PI and displays its
        duration.
        <img
          className="mx-auto my-auto mt-6 rounded-sm"
          src="/assets/mage/fire/TrinketsWA.png"
          alt=""
        />
        <ClipboardCopyButton file="/assets/mage/fire/trinkets.txt" />
      </Paragraph>
      <Paragraph>
        Next WA is pretty straight forward, it displays when your target is out
        of range (40 yards).
        <img
          className="mx-auto my-auto mt-6 rounded-sm"
          src="/assets/mage/fire/OOR.png"
          alt=""
        />
        <ClipboardCopyButton file="/assets/mage/fire/outOfRange.txt" />
      </Paragraph>
      <Paragraph>
        This one is pretty handy and displays both your BL CD and BL debuff
        which allows you to plan both your lust easely.
        <img
          className="mx-auto my-auto mt-6 rounded-sm"
          src="/assets/mage/fire/BL.png"
          alt=""
        />
        <ClipboardCopyButton file="/assets/mage/fire/BL.txt" />
      </Paragraph>
      <Paragraph>
        Mandatory imo, get a mouse cursor WA so you can track your mouse
        position for Flamestrikes/Meteor casts especially.
        <img
          className="mx-auto my-auto mt-6 rounded-sm"
          src="/assets/mage/fire/Mouse.png"
          alt=""
        />
        <ClipboardCopyButton file="/assets/mage/fire/mouseCursor.txt" />
      </Paragraph>
      <Paragraph>
        Last one, pretty handy and important imo, i recommand it. It's a
        timeline bar that will display bosses abilities.
        <img
          className="mx-auto my-auto mt-6 rounded-sm"
          src="/assets/mage/fire/Timeline.png"
          alt=""
        />
        <ClipboardCopyButton file="/assets/mage/fire/timeline.txt" />
      </Paragraph>
    </>
  )
}

export default WeakAuras
