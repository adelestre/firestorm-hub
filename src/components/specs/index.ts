import { lazy } from 'react'

const Blood = lazy(() => import('./deathknight/blood/Blood'))
const FrostDK = lazy(() => import('./deathknight/frost/Frost'))
const Unholy = lazy(() => import('./deathknight/unholy/Unholy'))
const Havoc = lazy(() => import('./demonhunter/havoc/Havoc'))
const Vengeance = lazy(() => import('./demonhunter/vengeance/Vengeance'))
const Balance = lazy(() => import('./druid/balance/Balance'))
const Feral = lazy(() => import('./druid/feral/Feral'))
const Guardian = lazy(() => import('./druid/guardian/Guardian'))
const Restoration = lazy(() => import('./druid/restoration/Restoration'))
const Beastmastery = lazy(() => import('./hunter/beastmastery/Beastmastery'))
const Marksmanship = lazy(() => import('./hunter/marksmanship/Marksmanship'))
const Survival = lazy(() => import('./hunter/survival/Survival'))
const Arcane = lazy(() => import('./mage/arcane/Arcane'))
const Fire = lazy(() => import('./mage/fire/Fire'))
const FrostMage = lazy(() => import('./mage/frost/Frost'))
const Brewmaster = lazy(() => import('./monk/brewmaster/Brewmaster'))
const Mistweaver = lazy(() => import('./monk/mistweaver/Mistweaver'))
const Windwalker = lazy(() => import('./monk/windwalker/Windwalker'))
const HolyPaladin = lazy(() => import('./paladin/holy/Holy'))
const ProtectionPaladin = lazy(() => import('./paladin/protection/Protection'))
const Retribution = lazy(() => import('./paladin/retribution/Retribution'))
const Discipline = lazy(() => import('./priest/discipline/Discipline'))
const HolyPriest = lazy(() => import('./priest/holy/Holy'))
const Shadow = lazy(() => import('./priest/shadow/Shadow'))
const Assassination = lazy(() => import('./rogue/assassination/Assassination'))
const Outlaw = lazy(() => import('./rogue/outlaw/Outlaw'))
const Subtlety = lazy(() => import('./rogue/subtlety/Subtlety'))
const Elemental = lazy(() => import('./shaman/elemental/Elemental'))
const Enhancement = lazy(() => import('./shaman/enhancement/Enhancement'))
const RestorationShaman = lazy(() => import('./shaman/restoration/Restoration'))
const Affliction = lazy(() => import('./warlock/affliction/Affliction'))
const Demonology = lazy(() => import('./warlock/demonology/Demonology'))
const Destruction = lazy(() => import('./warlock/destruction/Destruction'))
const Arms = lazy(() => import('./warrior/arms/Arms'))
const Fury = lazy(() => import('./warrior/fury/Fury'))
const ProtectionWarrior = lazy(() => import('./warrior/protection/Protection'))

export {
  Blood,
  FrostDK,
  Unholy,
  Havoc,
  Vengeance,
  Balance,
  Feral,
  Guardian,
  Restoration,
  Beastmastery,
  Marksmanship,
  Survival,
  Arcane,
  Fire,
  FrostMage,
  Brewmaster,
  Mistweaver,
  Windwalker,
  HolyPaladin,
  ProtectionPaladin,
  Retribution,
  Discipline,
  HolyPriest,
  Shadow,
  Assassination,
  Outlaw,
  Subtlety,
  Elemental,
  Enhancement,
  RestorationShaman,
  Affliction,
  Demonology,
  Destruction,
  Arms,
  Fury,
  ProtectionWarrior,
}
