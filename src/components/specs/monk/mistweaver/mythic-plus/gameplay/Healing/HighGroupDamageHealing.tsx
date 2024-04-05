import Section from '../../../../../../shared/Section'
import ItemLink from '../../../../../../shared/Links/ItemLink'
import Rotation from '../../../../../../shared/rotation/Rotation'
import RotationSpell from '../../../../../../shared/rotation/RotationSpell'
import Paragraph from '../../../../../../shared/Paragraph'

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
        principe : Always Be Spinnin'.{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_cranekick_new.jpg"
          name="Spinning Crane Kick"
          link="https://www.wowhead.com/spell=101546/spinning-crane-kick"
        />{' '}
        is your best friend. In this configuration,{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cranegod.jpg"
          name="Chi-Ji"
          link="https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane"
        />{' '}
        is used differently from its standard utilization, it becomes a
        background heal CD. You can use it for its shield in prevention of a
        burst, or simply as additional healing. Therefore, during{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cranegod.jpg"
          name="Chi-Ji"
          link="https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane"
        />{' '}
        you should keep spinning and use the instant{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="EM"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
        />{' '}
        every 3rd{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_cranekick_new.jpg"
          name="SCK"
          link="https://www.wowhead.com/spell=101546/spinning-crane-kick"
        />
        . You can also use{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_staff_2h_artifactshaohao_d_01.jpg"
          name="Sheilun's Gift"
          link="https://www.wowhead.com/spell=399491/sheiluns-gift"
        />{' '}
        if a big burst of healing is needed while{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cranegod.jpg"
          name="Chi-Ji"
          link="https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane"
        />{' '}
        is down.
      </Paragraph>
      <Paragraph>
        For encounters with fewer enemies, you have 3 options that you can
        rotate between. First and strongest one is obviously{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cranegod.jpg"
          name="Chi-Ji"
          link="https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane"
        />
        . And it's very easy to misuse it. It's very important to respect
        carefully a specific rotation. Depending on the nature of the damage,
        the moment you will start the setup changes. If the damage is a big
        burst such as{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_vehicle_sonicshockwave.jpg"
          name="Deafening Screech"
          link="https://www.wowhead.com/spell=377004/deafening-screech"
        />{' '}
        from Crawth in Algeth'ar Academy, you will start the setup sooner, so{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cranegod.jpg"
          name="Chi-Ji"
          link="https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane"
        />{' '}
        is pressed before the damage and you profit from the shield. Otherwise,
        for long and sustained damage such as{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_nature_eyeofthestorm.jpg"
          name="Eye of the Storm"
          link="https://www.wowhead.com/spell=200901/eye-of-the-storm"
        />{' '}
        from Hyrja in Halls of Valor, you will start the setup later so that you
        can have something to heal while the shield is tanking. But in both
        cases, the rotation is the same and as follows:
      </Paragraph>
      <Rotation className="space-top">
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_ardenweald_monk.jpg"
          name="Faeline Stomp"
          link="https://www.wowhead.com/spell=388193/jadefire-stomp"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="Tiger Palm"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cranegod.jpg"
          name="Chi-Ji"
          link="https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="Blackout Kick"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="Enveloping Mist"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="Rising Sun Kick"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="Tiger Palm"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="Blackout Kick"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="Enveloping Mist"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="Tiger Palm"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="Blackout Kick"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="Enveloping Mist"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="Rising Sun Kick"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="Tiger Palm"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="Blackout Kick"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        <RotationSpell
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="Enveloping Mist"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
        />
      </Rotation>
      <Paragraph>
        It's probably hard to understand this rotation looking at it, but I can
        assure you it makes a lot of sense and is actually very straightforward.
        Let's break it down together :
      </Paragraph>
      <Paragraph>
        We first cast{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_ardenweald_monk.jpg"
          name="Faeline Stomp"
          link="https://www.wowhead.com/spell=388193/jadefire-stomp"
        />{' '}
        but it is important to hit as many allies as possible with it. The
        reason is that we want the{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_essencefont.jpg"
          name="EF"
          link="https://www.wowhead.com/spell=191837/essence-font"
        />{' '}
        on them so our Chi-Ji gets his heals doubled on those targets (actually
        it is for the moment bugged on FS and doesn't work, but it's reported
        and hopefully hotfixed very soon). Optionally we can use{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_essencefont.jpg"
          name="EF"
          link="https://www.wowhead.com/spell=191837/essence-font"
        />{' '}
        itself if the allies are not grouped and won't all get hit by the{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_ardenweald_monk.jpg"
          name="Faeline"
          link="https://www.wowhead.com/spell=388193/jadefire-stomp"
        />
        . The second reason is to make sure we will have{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_book_07.jpg"
          name="AT"
          link="https://www.wowhead.com/spell=388023/ancient-teachings"
        />{' '}
        for the whole duration of{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cranegod.jpg"
          name="Chi-Ji"
          link="https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane"
        />
        .
      </Paragraph>{' '}
      <Paragraph>
        Then we cast a{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="TP"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />{' '}
        to build 2{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/passive_monk_teachingsofmonastery.jpg"
          name="TotM"
          link="https://www.wowhead.com/spell=116645/teachings-of-the-monastery"
        />
        . We can then cast{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cranegod.jpg"
          name="Chi-Ji"
          link="https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane"
        />{' '}
        followed by{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="BoK"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        , which will allow us to cast a free and instant{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="EM"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
        />
        . We use{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="RSK"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />{' '}
        next to extend the duration of all the HoTs. Then we repeat{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_tigerpalm.jpg"
          name="TP"
          link="https://www.wowhead.com/spell=100780/tiger-palm"
        />
        ,{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="BoK"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />
        ,{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="EM"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
        />{' '}
        until the end of{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cranegod.jpg"
          name="Chi-Ji"
          link="https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane"
        />{' '}
        throwing couple{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_risingsunkick.jpg"
          name="RSK"
          link="https://www.wowhead.com/spell=107428/rising-sun-kick"
        />{' '}
        here and there to extend everything. And there you have it, a perfect
        Chi-Ji rotation.
      </Paragraph>
      <Paragraph>
        But will this really be enough to heal through an entire{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_nature_eyeofthestorm.jpg"
          name="Eye of the Storm"
          link="https://www.wowhead.com/spell=200901/eye-of-the-storm"
        />{' '}
        from a 27 Tyrannical Hyrja ? Yes, not without defensives but it has a
        insane healing potential. With this rotation, you and your allies will
        first be shielded by{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_pet_cranegod.jpg"
          name="Chi-Ji"
          link="https://www.wowhead.com/spell=325197/invoke-chi-ji-the-red-crane"
        />{' '}
        for a fair amount. Then for its whole duration, you will be healed by{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_misc_book_07.jpg"
          name="AT"
          link="https://www.wowhead.com/spell=388023/ancient-teachings"
        />
        , 2 targets will be healed by{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/monk_stance_redcrane.jpg"
          name="Chi-Ji's Gust of Mists"
          link="https://www.wowhead.com/spell=343819/gust-of-mists"
        />{' '}
        for each{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_roundhousekick.jpg"
          name="BoK"
          link="https://www.wowhead.com/spell=100784/blackout-kick"
        />{' '}
        hits. You add to that{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/spell_monk_envelopingmist.jpg"
          name="EM"
          link="https://www.wowhead.com/spell=124682/enveloping-mist"
        />{' '}
        on the targets you choose, which will get a massive 40% healing increase
        and{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_jadeserpentbreath.jpg"
          name="Enveloping Breath"
          link="https://www.wowhead.com/spell=325209/enveloping-breath"
        />{' '}
        that will be applied to everyone. All of this combined makes it the most
        powerful healing CD in M+ for sustained damage intake.
      </Paragraph>
      <Paragraph>
        Nothing prevents you from using{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/inv_staff_2h_artifactshaohao_d_01.jpg"
          name="Sheilun's Gift"
          link="https://www.wowhead.com/spell=399491/sheiluns-gift"
        />{' '}
        on fights where you don't need to rotate between the 2.
      </Paragraph>
      <Paragraph>
        Ah yes ! Last option.. Well it's not very appealing but you can always
        do a normal{' '}
        <ItemLink
          icon="https://wow.zamimg.com/images/wow/icons/large/ability_monk_soothingmists.jpg"
          name="SooM"
          link="https://www.wowhead.com/spell=115175/soothing-mist?spellModifier=137024"
        />{' '}
        rotation. It won't heal as much as the other 2 but it can still come in
        handy.
      </Paragraph>
    </Section>
  )
}
export default HighGroupDamageHealing
