import Paragraph from '@shared/Paragraph'
import Code from '@shared/Code'
import ItemLink from '@shared/Links/ItemLink'
import spells from '@shared/spells.json'

function WeakAuras() {
  return (
    <>
      {/* Targeted spells */}
      <Paragraph>
        In this part i will share my usefull macros that you can import if you
        want to.
      </Paragraph>
      <Paragraph>
        I will start with macros that allows me to cast my spell on any target
        without having to switch my initial target. <br></br>
        It provides multiple options, you can cast at your @focus target if you
        press ctrl modifier (you can change it with shift or alt if you want
        to).<br></br>
        If you mouseover an ennemy, it will cast the spell to this ennemy, if
        not, to your target by default.<br></br>I like to use that macro on a
        ton of spells, even damaging ones, but most importantly CCs (
        <ItemLink item={spells['mage-counterspell']} /> /{' '}
        <ItemLink item={spells['mage-polymorph']} />, but also{' '}
        <ItemLink item={spells['mage-slow_fall']} /> for exemple). It is also
        very usefull with <ItemLink item={spells['fm-scorch']} /> in order to
        cast it on ennemies below the 30% threshold.
        <Code
          text={`/use [mod:ctrl,@focus] Polymorph; Polymorph
        /use [@mouseover, exists] Polymorph; Polymorph`}
        />
        <Code
          text={`/use [mod:ctrl,@focus] Counterspell; Counterspell
        /use [@mouseover, exists] Counterspell; Counterspell`}
        />
      </Paragraph>
      {/* Focus */}
      <Paragraph>
        Next one is a macro to easely setup a focus target which is good for the
        first macro if you wanna play arround focus, but not mandatory. It will
        focus your mouseover if you have one, it will focus your target if you
        don't have a mouseover, and it will clear your focus if you don't have
        any target + no mouseover. <br></br>
        I usually use esc in order to clear my target then press this macro to
        remove my Focus easely and fast. Note that you can use shift + tab in
        order to go back to your previous target if you need to.
        <Code
          text={`/focus [@mouseover, exists];
          `}
        />
      </Paragraph>
      {/* Flamestrike/Meteor */}
      <Paragraph>
        Here is a mandatory macro fore fire mage, especially in M+. It will
        instantly cast <ItemLink item={spells['fm-fs']} /> or{' '}
        <ItemLink item={spells['fm-meteor']} /> at your cursor position.
        <Code
          text={`#showtooltip Flamestrike
          /cast [@cursor] Flamestrike
          `}
        />
        <Code
          text={`#showtooltip Meteor
        /cast [@cursor] Meteor`}
        />
      </Paragraph>
      <Paragraph>
        This one aims to use your on use trinket if you have one. You will need
        to change the slot to 14 if you have your trinket in 14th slot.
        <Code
          text={`#showtooltip
          /use 13`}
        />
      </Paragraph>
      {/* Ice Block */}
      <Paragraph>
        I suggest a weak aura to cancel{' '}
        <ItemLink item={spells['mage-ice_block']} /> faster, first use of this
        macro will cast iceblock and cancel your cast if you were casting
        something else in order to instantly block. As soon as you press the
        macro again, you remove iceblock to be abble to move again. This is
        usefull on scenarios you have to remove an important debuff, but it's
        mainly for PVP or raid fights. This macro works even if you have{' '}
        <ItemLink item={spells['mage-ice_cold']} /> so it's better to use it
        anyway as you have nothing to lose and will have a way to cancel your
        block easier when you need to.
        <Code
          text={`#showtooltip
        /stopcasting
        /cancelaura Ice Block
        /cast Ice Block
        `}
        />
      </Paragraph>
    </>
  )
}

export default WeakAuras
