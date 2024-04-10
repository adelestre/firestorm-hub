import { Navigate } from 'react-router-dom'
import * as specs from '@specs/index'
import { useSpecContext } from '../guide/GuideContext'
import { useMemo } from 'react'

function GuideRouter() {
  const specContext = useSpecContext()
  const loadGuide = useMemo(() => {
    if (!specContext) return null
    switch (specContext.job + '-' + specContext.spec) {
      case 'deathknight-blood':
        return <specs.Blood />
      case 'deathknight-frost':
        return <specs.FrostDK />
      case 'deathknight-unholy':
        return <specs.Unholy />
      case 'demonhunter-havoc':
        return <specs.Havoc />
      case 'demonhunter-vengeance':
        return <specs.Vengeance />
      case 'druid-balance':
        return <specs.Balance />
      case 'druid-feral':
        return <specs.Feral />
      case 'druid-guardian':
        return <specs.Guardian />
      case 'druid-restoration':
        return <specs.Restoration />
      case 'hunter-beastmastery':
        return <specs.Beastmastery />
      case 'hunter-marksmanship':
        return <specs.Marksmanship />
      case 'hunter-survival':
        return <specs.Survival />
      case 'mage-arcane':
        return <specs.Arcane />
      case 'mage-fire':
        return <specs.Fire />
      case 'mage-frost':
        return <specs.FrostMage />
      case 'monk-brewmaster':
        return <specs.Brewmaster />
      case 'monk-mistweaver':
        return <specs.Mistweaver />
      case 'monk-windwalker':
        return <specs.Windwalker />
      case 'paladin-holy':
        return <specs.HolyPaladin />
      case 'paladin-protection':
        return <specs.ProtectionPaladin />
      case 'paladin-retribution':
        return <specs.Retribution />
      case 'priest-discipline':
        return <specs.Discipline />
      case 'priest-holy':
        return <specs.HolyPriest />
      case 'priest-shadow':
        return <specs.Shadow />
      case 'rogue-assassination':
        return <specs.Assassination />
      case 'rogue-outlaw':
        return <specs.Outlaw />
      case 'rogue-subtlety':
        return <specs.Subtlety />
      case 'shaman-elemental':
        return <specs.Elemental />
      case 'shaman-enhancement':
        return <specs.Enhancement />
      case 'shaman-restoration':
        return <specs.RestorationShaman />
      case 'warlock-affliction':
        return <specs.Affliction />
      case 'warlock-demonology':
        return <specs.Demonology />
      case 'warlock-destruction':
        return <specs.Destruction />
      case 'warrior-arms':
        return <specs.Arms />
      case 'warrior-fury':
        return <specs.Fury />
      case 'warrior-protection':
        return <specs.ProtectionWarrior />
      default:
        return <Navigate to="/" />
    }
  }, [specContext])
  return loadGuide
}

export default GuideRouter
