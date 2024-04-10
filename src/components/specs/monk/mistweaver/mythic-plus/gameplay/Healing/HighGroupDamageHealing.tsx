import Section from '@shared/Section'
import ItemLink from '@shared/Links/ItemLink'
import Rotation from '@shared/rotation/Rotation'
import RotationSpell from '@shared/rotation/RotationSpell'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'

function HighGroupDamageHealing() {
  return (
    <Section name="Healing heavy group damage">
      <Paragraph>
        Heavy group damage can be scary for most healers, but as MW I can assure
        you, there's absolutely nothing to worry about as long as you have
        everything planned in your head. Plannification is the key.
      </Paragraph>
      <Paragraph>
        For big packs of trash (6+), your safest bet is to apply the ABS
        principe : Always Be Spinnin'. <ItemLink item={spells['monk-sck']} /> is
        your best friend. In this configuration,{' '}
        <ItemLink item={spells['mw-chiji']} /> is used differently from its
        standard utilization, it becomes a background heal CD. You can use it
        for its shield in prevention of a burst, or simply as additional
        healing. Therefore, during <ItemLink item={spells['mw-chiji']} /> you
        should keep spinning and use the instant{' '}
        <ItemLink item={spells['mw-em']} /> every 3rd{' '}
        <ItemLink item={spells['monk-sck']} />. You can also use{' '}
        <ItemLink item={spells['mw-sheilun']} /> if a big burst of healing is
        needed while <ItemLink item={spells['mw-chiji']} /> is down.
      </Paragraph>
      <Paragraph>
        For encounters with fewer enemies, you have 3 options that you can
        rotate between. First and strongest one is obviously{' '}
        <ItemLink item={spells['mw-chiji']} />. And it's very easy to misuse it.
        It's very important to respect carefully a specific rotation. Depending
        on the nature of the damage, the moment you will start the setup
        changes. If the damage is a big burst such as{' '}
        <ItemLink
          item={{
            icon: 'https://wow.zamimg.com/images/wow/icons/large/ability_vehicle_sonicshockwave.jpg',
            name: 'Deafening Screech',
            link: 'https://www.wowhead.com/spell=377004/deafening-screech',
          }}
        />{' '}
        from Crawth in Algeth'ar Academy, you will start the setup sooner, so{' '}
        <ItemLink item={spells['mw-chiji']} /> is pressed before the damage and
        you profit from the shield. Otherwise, for long and sustained damage
        such as{' '}
        <ItemLink
          item={{
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_eyeofthestorm.jpg',
            name: 'Eye of the Storm',
            link: 'https://www.wowhead.com/spell=200901/eye-of-the-storm',
          }}
        />{' '}
        from Hyrja in Halls of Valor, you will start the setup later so that you
        can have something to heal while the shield is tanking. But in both
        cases, the rotation is the same and as follows:
      </Paragraph>
      <Rotation className="space-top">
        <RotationSpell item={spells['mw-faeline']} />
        <RotationSpell item={spells['monk-tp']} />
        <RotationSpell item={spells['mw-chiji']} />
        <RotationSpell item={spells['monk-bok']} />
        <RotationSpell item={spells['mw-em']} />
        <RotationSpell item={spells['monk-rsk']} />
        <RotationSpell item={spells['monk-tp']} />
        <RotationSpell item={spells['monk-bok']} />
        <RotationSpell item={spells['mw-em']} />
        <RotationSpell item={spells['monk-tp']} />
        <RotationSpell item={spells['monk-bok']} />
        <RotationSpell item={spells['mw-em']} />
        <RotationSpell item={spells['monk-rsk']} />
        <RotationSpell item={spells['monk-tp']} />
        <RotationSpell item={spells['monk-bok']} />
        <RotationSpell item={spells['mw-em']} />
      </Rotation>
      <Paragraph>
        It's probably hard to understand this rotation looking at it, but I can
        assure you it makes a lot of sense and is actually very straightforward.
        Let's break it down together :
      </Paragraph>
      <Paragraph>
        We first cast <ItemLink item={spells['mw-faeline']} /> but it is
        important to hit as many allies as possible with it. The reason is that
        we want the <ItemLink item={spells['mw-ef']} /> on them so our Chi-Ji
        gets his heals doubled on those targets (actually it is for the moment
        bugged on FS and doesn't work, but it's reported and hopefully hotfixed
        very soon). Optionally we can use <ItemLink item={spells['mw-ef']} />{' '}
        itself if the allies are not grouped and won't all get hit by the{' '}
        <ItemLink item={spells['mw-faeline']} />. The second reason is to make
        sure we will have <ItemLink item={spells['mw-at']} /> for the whole
        duration of <ItemLink item={spells['mw-chiji']} />.
      </Paragraph>{' '}
      <Paragraph>
        Then we cast a <ItemLink item={spells['monk-tp']} /> to build 2{' '}
        <ItemLink item={spells['mw-totm']} />
        . We can then cast <ItemLink item={spells['mw-chiji']} /> followed by{' '}
        <ItemLink item={spells['monk-bok']} />, which will allow us to cast a
        free and instant <ItemLink item={spells['mw-em']} />. We use{' '}
        <ItemLink item={spells['monk-rsk']} /> next to extend the duration of
        all the HoTs. Then we repeat <ItemLink item={spells['monk-tp']} />,{' '}
        <ItemLink item={spells['monk-bok']} />
        , <ItemLink item={spells['mw-em']} /> until the end of{' '}
        <ItemLink item={spells['mw-chiji']} /> throwing couple{' '}
        <ItemLink item={spells['monk-rsk']} /> here and there to extend
        everything. And there you have it, a perfect Chi-Ji rotation.
      </Paragraph>
      <Paragraph>
        But will this really be enough to heal through an entire{' '}
        <ItemLink
          item={{
            icon: 'https://wow.zamimg.com/images/wow/icons/large/spell_nature_eyeofthestorm.jpg',
            name: 'Eye of the Storm',
            link: 'https://www.wowhead.com/spell=200901/eye-of-the-storm',
          }}
        />{' '}
        from a 27 Tyrannical Hyrja ? Yes, not without defensives but it has a
        insane healing potential. With this rotation, you and your allies will
        first be shielded by <ItemLink item={spells['mw-chiji']} /> for a fair
        amount. Then for its whole duration, you will be healed by{' '}
        <ItemLink item={spells['mw-at']} />, 2 targets will be healed by{' '}
        <ItemLink
          item={{
            icon: 'https://wow.zamimg.com/images/wow/icons/large/monk_stance_redcrane.jpg',
            name: "Chi-Ji's Gust of Mists",
            link: 'https://www.wowhead.com/spell=343819/gust-of-mists',
          }}
        />{' '}
        for each <ItemLink item={spells['monk-bok']} /> hits. You add to that{' '}
        <ItemLink item={spells['mw-em']} /> on the targets you choose, which
        will get a massive 40% healing increase and{' '}
        <ItemLink item={spells['mw-eb']} /> that will be applied to everyone.
        All of this combined makes it the most powerful healing CD in M+ for
        sustained damage intake.
      </Paragraph>
      <Paragraph>
        Nothing prevents you from using <ItemLink item={spells['mw-sheilun']} />{' '}
        on fights where you don't need to rotate between the 2.
      </Paragraph>
      <Paragraph>
        Ah yes ! Last option.. Well it's not very appealing but you can always
        do a normal <ItemLink item={spells['monk-soom']} /> rotation. It won't
        heal as much as the other 2 but it can still come in handy.
      </Paragraph>
    </Section>
  )
}
export default HighGroupDamageHealing
