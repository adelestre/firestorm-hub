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
          src="/assets/mage/fire/fireMageGeneralTree.PNG"
          alt=""
        />
        <div className="absolute inset-0 rounded-sm shadow-img"></div>
      </div>
      <ClipboardCopyButton text="B8DArSxcnei16P8xFL3rzzOyRKRIFNk4AJpIgkQEJhkAAAAAAAAAgkEhElkUSSSSSSiGAAAIE" />
      <Paragraph>
        Our general tree is up to personnal preference on some defensives, but I
        recommend taking every dps increase talents such as{' '}
        <ItemLink item={spells['mage-antonidas_tome']} /> or{' '}
        <ItemLink item={spells['mage-rhonins_tome']} /> etc. <br />
        Please make sure to take <ItemLink item={spells['mage-2dbl']} /> as it
        is what allows mages to have a double lust and greatly improves our dps.
      </Paragraph>
      <Paragraph>
        My personnal take is to only change{' '}
        <ItemLink item={spells['mage-spell_steal']} /> and{' '}
        <ItemLink item={spells['mage-remove_curse']} /> when they aren't needed
        on a specific key for extra defensives such as{' '}
        <ItemLink item={spells['mage-diverted_energy']} /> for exemple, up to
        personnal preference.
      </Paragraph>
      <Paragraph>
        What's pretty important on the tree outside of dps increase talents are
        CC which are part of Mage's strengths, luckily we have a ton of mass CC
        which is very strong for M+ scenarios. Our tools for that are{' '}
        <ItemLink item={spells['mage-dragons_breath']} /> which goes along with{' '}
        <ItemLink item={spells['mage-time_manipulation']} />,{' '}
        <ItemLink item={spells['mage-blast_wave']} />,{' '}
        <ItemLink item={spells['mage-freezing_cold']} />/{' '}
        <ItemLink item={spells['mage-ice_ward']} /> or{' '}
        <ItemLink item={spells['mage-ring_of_frost']} /> if specced into it. We
        also get <ItemLink item={spells['mage-quick_witted']} /> to have more
        interrupts.
        <ItemLink item={spells['mage-shifting_power']} /> can also be very
        clutch for CC as allows you to get your CC or{' '}
        <ItemLink item={spells['mage-counterspell']} /> back for an important
        interrupt your team may need.
      </Paragraph>
      <Paragraph>
        We also get strong defensives that we never switch off as they are too
        powerfull such as <ItemLink item={spells['mage-greater_invis']} />,{' '}
        <ItemLink item={spells['mage-ice_cold']} />,{' '}
        <ItemLink item={spells['mage-alter_time']} />.
      </Paragraph>
      <div className="space-top relative flex w-full flex-col items-center justify-center">
        <img
          className="rounded-sm"
          src="/assets/mage/fire/FireMageTalentsM+.PNG"
          alt=""
        />
        <div className="absolute inset-0 rounded-sm shadow-img"></div>
      </div>
      <ClipboardCopyButton text="B8DArSxcnei16P8xFL3rzzOyRKRIFNk4AJpIgkQEJhkAAAAAAAAAgkEhElkUSSSSSSiGAAAIE" />
      <Paragraph>
        Here we have to play different talents than on Retail at least for
        Season 1 as <ItemLink item={spells['fm-hyperthermia']} /> is different
        than in Retail. On Firestorm usually these kind of buffs proc right at
        the start of a fight which increases it's value.
        <br /> <ItemLink item={spells['fm-meteor']} /> isn't worth to take on
        most scenarios outside of Heavy AOE dungeons and fortified weeks.
        <br />
        I basically run 3 different setups depending on the affixes (mainly
        Tyranical or Fortified).
        <br />
        The page displayed above is an overall good page to run on Tyranical
        weeks and low AOE keys.
      </Paragraph>
      <Paragraph>
        What usually changes is that we drop a bit of our ST to grab{' '}
        <ItemLink item={spells['fm-incendiary_eruptions']} /> as this talent
        increases drastically our AOE, it gets exponentially stronger as the
        number of targets increases. The downside to it is that we drop ST to
        get this point, by removing{' '}
        <ItemLink item={spells['fm-intensifying_flame']} />.<br />
      </Paragraph>
      <Paragraph>Lastly,</Paragraph>
      <Paragraph>
        My last setup as a firemage for keys is a retail-like page to increase
        our AOE dps (especially burst AOE thanks to{' '}
        <ItemLink item={spells['fm-meteor']} />) where we drop{' '}
        <ItemLink item={spells['fm-hyperthermia']} /> and get back{' '}
        <ItemLink item={spells['fm-meteor']} />,{' '}
        <ItemLink item={spells['fm-deflagration']} /> and a point into{' '}
        <ItemLink item={spells['fm-critical_mass']} />. <br />
        This setup gets our critical chance to have more value outside of{' '}
        <ItemLink item={spells['fm-combustion']} /> and{' '}
        <ItemLink item={spells['fm-skb']} /> as we don't have{' '}
        <ItemLink item={spells['fm-hyperthermia']} /> anymore to send free crits
        and help us skip our downtimes between{' '}
        <ItemLink item={spells['fm-skb']} /> and/or{' '}
        <ItemLink item={spells['fm-combustion']} />.<br />
        <br />
      </Paragraph>
      <div className="relative flex w-full flex-col items-center justify-center">
        <img
          className="rounded-sm"
          src="/assets/mage/fire/FireTalentsMaxAoe.PNG"
          alt=""
        />
        <div className="absolute inset-0 rounded-sm shadow-img"></div>
      </div>
      <ClipboardCopyButton text="B8DArSxcnei16P8xFL3rzzOyRKJIFNkQSKCIJREJhkAAAAAAAAAEJJRiElEFJJJJJJHoBAAACA" />
    </Section>
  )
}

export default Talents
