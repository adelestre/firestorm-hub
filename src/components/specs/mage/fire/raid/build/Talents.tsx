import ItemLink from '@shared/Links/ItemLink'
import ClipboardCopyButton from '@shared/ClipboardCopyButton'
import Section from '@shared/Section'
import Paragraph from '@shared/Paragraph'
import spells from '@shared/spells.json'

function Talents() {
  return (
    <Section name="Talents">
      <div className="flex flex-row justify-end">
        <p className="flex flex-row gap-1"></p>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center">
        <img
          className="w-full rounded-sm"
          src="/assets/mage/fire/FireMageGeneralTreeST.PNG"
          alt=""
        />
        <div className="absolute inset-0 rounded-sm shadow-img"></div>
      </div>
      <ClipboardCopyButton text="B8DArSxcnei16P8xFL3rzzOyRSESRDJSSKCIJERSIJAAAAAAAAAIChElkUSSSSSSSaAAAgQA" />
      <Paragraph>
        Our general tree is up to personnal preference on some defensives, but I
        recommend taking every dps increase talents such as{' '}
        <ItemLink item={spells['mage-antonidas_tome']} /> or{' '}
        <ItemLink item={spells['mage-rhonins_tome']} /> etc. <br />
        Please make sure to take <ItemLink item={spells['mage-2dbl']} /> as it
        is what allows mages to have a double lust and greatly improves our dps.
      </Paragraph>
      <Paragraph>
        We also get strong defensives that we never switch off as they are too
        powerfull such as <ItemLink item={spells['mage-greater_invis']} />,{' '}
        <ItemLink item={spells['mage-ice_cold']} />,{' '}
        <ItemLink item={spells['mage-alter_time']} />. Do not forget about{' '}
        <ItemLink item={spells['mage-dragons_breath']} /> as it's an AOE damage
        ability that 100% crits with our fire talents and contribute to{' '}
        <ItemLink item={spells['fm-HotStreak']} /> generation.
      </Paragraph>
      <Paragraph>
        As fire we have to play different talents than on Retail at least for
        Season 1 as <ItemLink item={spells['fm-hyperthermia']} /> is different
        than in Retail. On Firestorm usually these kind of buffs proc right at
        the start of a fight which increases it's value.
        <br /> <ItemLink item={spells['fm-meteor']} /> isn't worth to take on
        most scenarios.
      </Paragraph>
      <Paragraph>
        The following talent page is the most consistent to deal a very big
        amount of single target damage in my opinion.<br></br>
        <br></br>
      </Paragraph>
      <div className="relative flex w-full flex-col items-center justify-center">
        <img
          className="w-full rounded-sm"
          src="/assets/mage/fire/FireTalentsST.PNG"
          alt=""
        />
        <div className="absolute inset-0 rounded-sm shadow-img"></div>
      </div>
      <ClipboardCopyButton text="B8DArSxcnei16P8xFL3rzzOyRSESRDJSSKCIJERSIJAAAAAAAAAIChElkUSSSSSSSaAAAgQA" />
    </Section>
  )
}

export default Talents
