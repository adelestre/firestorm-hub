import ItemLink from '@shared/Links/ItemLink'
import ClipboardCopyButton from '@shared/ClipboardCopyButton'
import Section from '@shared/Section'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'

function Talents() {
  return (
    <Section name="Talents">
      <div className="relative flex w-full flex-col items-center justify-center">
        <img
          className="rounded-sm"
          src="/assets/raid-class-talent-tree.png"
          alt=""
        />
        <div className="absolute inset-0 rounded-sm shadow-img"></div>
      </div>
      <ClipboardCopyButton text="B4QAK5xc05YQdq4E+VOLrE2vp2iCSkoVKNCpESSJKJSTAAAAAAAAAAAAAJNJNkIJRpAaRSjkEBAAA" />
      <Paragraph>
        There's not much to say about that tree. Most of the nodes are
        mandatory, there's not much we can swap around. I won't go into more
        details.
      </Paragraph>
      <div className="space-top relative flex w-full flex-col items-center justify-center">
        <img
          className="rounded-sm"
          src="/assets/raid-spec-talent-tree.png"
          alt=""
        />
        <div className="absolute inset-0 rounded-sm shadow-img"></div>
      </div>
      <ClipboardCopyButton text="B4QAK5xc05YQdq4E+VOLrE2vp2iCSkoVKNCpESSJKJSTAAAAAAAAAAAAAJNJNkIJRpAaRSjkEBAAA" />
      <Paragraph>
        First part of the tree is a no brainer. Second part we will start by
        improving our <ItemLink item={spells['mw-lc']} /> with the left side.
        Then reduce the CD of <ItemLink item={spells['mw-rev']} /> with{' '}
        <ItemLink item={spells['mw-uplifted']} /> and select{' '}
        <ItemLink item={spells['mw-yulon']} />.
        <Paragraph>
          The last section of the tree will help us make better use of{' '}
          <ItemLink item={spells['mw-yulon']} /> with stats buffs and also
          improve our ramps with <ItemLink item={spells['mw-cf']} />. More
          notably, we will select <ItemLink item={spells['mw-rm']} /> that will
          be at the core of our playstyle.
        </Paragraph>
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
