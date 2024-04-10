import { FaStarOfLife } from 'react-icons/fa'
import ItemLink from '@shared/Links/ItemLink'
import ClipboardCopyButton from '@shared/ClipboardCopyButton'
import Section from '@shared/Section'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'

function Talents() {
  return (
    <Section name="Talents">
      <div className="flex flex-row justify-end">
        <p className="flex flex-row gap-1">
          <FaStarOfLife /> = switchable nodes
        </p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center">
        <img
          className="rounded-sm"
          src="/assets/mythicplus-class-talent-tree.png"
          alt=""
        />
        <div className="absolute inset-0 rounded-sm shadow-img"></div>
      </div>
      <ClipboardCopyButton text="B4QAK5xc05YQdq4E+VOLrE2vp2SKFJJElSLCpERSDSJFBAAAAAAAAAAAAIkUSSikEtCSaRSDCHAAAB" />
      <Paragraph>
        The tree is pretty locked and isn't easy to navigate through. On the
        first section of the tree, we upgrade{' '}
        <ItemLink item={spells['monk-viv']} /> and take{' '}
        <ItemLink item={spells['monk-para']} /> . We can't afford to take much
        more. <ItemLink item={spells['monk-improvedDetox']} /> can be taken in
        some dungeons with poison and diseases effects, I usually swap out{' '}
        <ItemLink item={spells['monk-bounceBack']} /> for it.
      </Paragraph>
      <Paragraph>
        Second part of the tree we take{' '}
        <ItemLink item={spells['monk-chiBurst']} /> which is mainly used to
        reset our <ItemLink item={spells['mw-faeline']} /> since each hit has a
        chance to reset its cooldown (on FS it's not that easy lol). We also
        take mandatory nodes such as <ItemLink item={spells['monk-shs']} />
        , <ItemLink item={spells['monk-rop']} />,{' '}
        <ItemLink item={spells['monk-dh']} /> and{' '}
        <ItemLink item={spells['monk-fb']} />.{' '}
        <ItemLink item={spells['monk-dm']} /> is a very strong option but so is{' '}
        <ItemLink item={spells['monk-grace']} />. Personnaly I default to{' '}
        <ItemLink item={spells['monk-grace']} /> and switch to{' '}
        <ItemLink item={spells['monk-dm']} /> in certain dungeons with strong
        magic bursts.
      </Paragraph>
      <Paragraph>
        Last section, we need the team buffs (
        <ItemLink item={spells['monk-cth']} /> and{' '}
        <ItemLink item={spells['monk-gp']} />
        ). Then we have 2 crucial nodes to inscrease our healing and damage
        output : <ItemLink item={spells['monk-sta']} />,{' '}
        <ItemLink item={spells['monk-rf']} />. I am always very sad when I see
        people sleeping on <ItemLink item={spells['monk-rf']} />, it's around
        15% of my DPS in keys which is colossal. The last point is also a debate
        between passive defense with{' '}
        <ItemLink item={spells['monk-bounceBack']} /> and active defense with{' '}
        <ItemLink item={spells['monk-expeFort']} />. In M+, no final keystones
        are worth taking.
      </Paragraph>
      <div className="space-top relative flex w-full flex-col items-center justify-center">
        <img
          className="rounded-sm"
          src="/assets/mythicplus-spec-talent-tree.png"
          alt=""
        />
        <div className="absolute inset-0 rounded-sm shadow-img"></div>
      </div>
      <ClipboardCopyButton text="B4QAK5xc05YQdq4E+VOLrE2vp2SKFJJElSLCpERSDSJFBAAAAAAAAAAAAIkUSSikEtCSaRSDCHAAAB" />
      <Paragraph>
        First part of the tree is a no brainer. Second part is packed with bad
        nodes, everything not taken is useless for Mythic+ and sadly so is{' '}
        <ItemLink item={spells['mw-zp']} /> /{' '}
        <ItemLink item={spells['mw-er']} />
        . It's a very small DPS gain and Tank heal burst, but it's better than
        other options. We buff <ItemLink item={spells['mw-lc']} /> through{' '}
        <ItemLink item={spells['mw-mol']} /> and{' '}
        <ItemLink item={spells['mw-chrys']} /> to get a huge external on a small
        CD. <ItemLink item={spells['mw-chiji']} />,{' '}
        <ItemLink item={spells['mw-mw']} /> and the right side of the tree are
        obvious choices.
      </Paragraph>
      <Paragraph>
        Last part of the tree is very locked as there are a lot of very strong
        talents but for some reason we need to spend 4 points just to be able to
        heal with <ItemLink item={spells['monk-sck']} /> and 3 points to make{' '}
        <ItemLink item={spells['mw-sheilun']} /> heal the whole group. This and
        <ItemLink item={spells['mw-at']} /> represents the major part of our
        healing output in M+. It's all about being able to deal damage and
        passively heal. <ItemLink item={spells['mw-chiji']} /> on a 1min CD is
        also a no brainer.
      </Paragraph>
    </Section>
  )
}

export default Talents
