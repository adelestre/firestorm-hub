import { FaStarOfLife } from 'react-icons/fa'
import ItemLink from '@shared/Links/ItemLink'
import ClipboardCopyButton from '@shared/ClipboardCopyButton'
import Section from '@shared/Section'
import Paragraph from '@shared/Paragraph'

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
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_paralysis.jpg"
          name="Paralysis"
          link="https://www.wowhead.com/spell=115078/paralysis"
        />{' '}
        . We can't afford to take much more.{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_rogue_imrovedrecuperate.jpg"
          name="improved Detox"
          link="https://www.wowhead.com/spell=388874/improved-detox"
        />{' '}
        can be taken in some dungeons with poison and diseases effects, I
        usually swap out{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_butcher_heavyhanded.jpg"
          name="Bounce Back"
          link="https://www.wowhead.com/spell=389577/bounce-back"
        />{' '}
        for it.
      </Paragraph>
      <Paragraph>
        Second part of the tree we take{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_arcane_arcanetorrent.jpg"
          name="Chi Burst"
          link="https://www.wowhead.com/spell=123986/chi-burst"
        />{' '}
        which is mainly used to reset our{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_ardenweald_monk.jpg"
          name="Faeline Stomp"
          link="https://www.wowhead.com/spell=388193/jadefire-stomp"
        />{' '}
        since each hit has a chance to reset its cooldown (on FS it's not that
        easy lol). We also take mandatory nodes such as{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_spearhand.jpg"
          name="Spear Hand Strike"
          link="https://www.wowhead.com/spell=116705/spear-hand-strike"
        />
        ,{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_ringofpeace.jpg"
          name="Ring of Peace"
          link="https://www.wowhead.com/spell=116844/ring-of-peace"
        />
        ,{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_dampenharm.jpg"
          name="Dampen Harm"
          link="https://www.wowhead.com/spell=122278/dampen-harm"
        />{' '}
        and{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_fortifyingale_new.jpg"
          name="Fortifying Brew"
          link="https://www.wowhead.com/spell=115203/fortifying-brew"
        />
        .{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_diffusemagic.jpg"
          name="Diffuse Magic"
          link="https://www.wowhead.com/spell=122783/diffuse-magic"
        />{' '}
        is a very strong option but so is{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_dragonkick.jpg"
          name="Yu'lon's Grace"
          link="https://www.wowhead.com/spell=414131/yulons-grace"
        />
        . Personnaly I default to{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_dragonkick.jpg"
          name="Yu'lon's Grace"
          link="https://www.wowhead.com/spell=414131/yulons-grace"
        />{' '}
        and switch to{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_diffusemagic.jpg"
          name="Diffuse Magic"
          link="https://www.wowhead.com/spell=122783/diffuse-magic"
        />{' '}
        in certain dungeons with strong magic bursts.
      </Paragraph>
      <Paragraph>
        Last section, we need the team buffs (
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_offhand_1h_pvppandarias2_c_01.jpg"
          name="Close to Heart"
          link="https://www.wowhead.com/spell=389574/close-to-heart"
        />{' '}
        and{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_food_legion_goocaramel_bottle.jpg"
          name="Generous Pour"
          link="https://www.wowhead.com/spell=389575/generous-pour"
        />
        ). Then we have 2 crucial nodes to inscrease our healing and damage
        output :{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_weapon_hand_22.jpg"
          name="Save Them All"
          link="https://www.wowhead.com/spell=389579/save-them-all"
        />
        ,{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_weapon_hand_16.jpg"
          name="Resonant Fists"
          link="https://www.wowhead.com/spell=389578/resonant-fists"
        />
        . I am always very sad when I see people sleeping on{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_weapon_hand_16.jpg"
          name="Resonant Fists"
          link="https://www.wowhead.com/spell=389578/resonant-fists"
        />
        , it's around 15% of my DPS in keys which is colossal. The last point is
        also a debate between passive defense with{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_butcher_heavyhanded.jpg"
          name="Bounce Back"
          link="https://www.wowhead.com/spell=389577/bounce-back"
        />{' '}
        and active defense with{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_fortifyingale_new.jpg"
          name="Expeditious Fortification"
          link="https://www.wowhead.com/spell=388813/expeditious-fortification"
        />
        . In M+, no final keystones are worth taking.
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
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_forcesphere.jpg"
          name="Zen Pulse"
          link="https://www.wowhead.com/spell=124081/zen-pulse"
        />{' '}
        /{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_legacyoftheemperor.jpg"
          name="Echoing Reverberation"
          link="https://www.wowhead.com/spell=388604/echoing-reverberation"
        />
        . It's a very small DPS gain and Tank heal burst, but it's better than
        other options. We buff <ItemLink item={spells['mw-lc']} /> through{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_shoulder__inv_leather_raidmonkmythic_s_01.jpg"
          name="Mists of Life"
          link="https://www.wowhead.com/spell=388548/mists-of-life"
        />{' '}
        and{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_domeofmist.jpg"
          name="Chrysalis"
          link="https://www.wowhead.com/spell=202424/chrysalis"
        />{' '}
        to get a huge external on a small CD.{' '}
        <ItemLink item={spells['mw-chiji']} />,{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_pathofmists.jpg"
          name="Mist Wrap"
          link="https://www.wowhead.com/spell=197900/mist-wrap"
        />{' '}
        and the right side of the tree are obvious choices.
      </Paragraph>
      <Paragraph>
        Last part of the tree is very locked as there are a lot of very strong
        talents but for some reason we need to spend 4 points just to be able to
        heal with <ItemLink item={spells['monk-sck']} /> and 3 points to make{' '}
        <ItemLink item={spells['mw-sheilun']} /> heal the whole group. This and
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_book_07.jpg"
          name="Ancient Teachings"
          link="https://www.wowhead.com/spell=388023/ancient-teachings"
        />{' '}
        represents the major part of our healing output in M+. It's all about
        being able to deal damage and passively heal.{' '}
        <ItemLink item={spells['mw-chiji']} /> on a 1min CD is also a no
        brainer.
      </Paragraph>
    </Section>
  )
}

export default Talents
