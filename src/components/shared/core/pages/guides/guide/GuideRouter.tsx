import { Navigate } from 'react-router-dom'
import * as specs from '@specs/index'
import { useSpecContext } from '../../../contexts/Contexts'
import { Suspense, useMemo } from 'react'
import { routes } from '@shared/core/routes'

function GuideRouter() {
  const specContext = useSpecContext()
  const loadGuide = useMemo(() => {
    if (!specContext) return null
    let element = null
    switch (specContext.job + '-' + specContext.spec) {
      case 'deathknight-blood':
        element = <specs.Blood />
        break
      case 'deathknight-frost':
        element = <specs.FrostDK />
        break
      case 'deathknight-unholy':
        element = <specs.Unholy />
        break
      case 'demonhunter-havoc':
        element = <specs.Havoc />
        break
      case 'demonhunter-vengeance':
        element = <specs.Vengeance />
        break
      case 'druid-balance':
        element = <specs.Balance />
        break
      case 'druid-feral':
        element = <specs.Feral />
        break
      case 'druid-guardian':
        element = <specs.Guardian />

        break
      case 'druid-restoration':
        element = <specs.Restoration />
        break
      case 'hunter-beastmastery':
        element = <specs.Beastmastery />
        break
      case 'hunter-marksmanship':
        element = <specs.Marksmanship />
        break
      case 'hunter-survival':
        element = <specs.Survival />
        break
      case 'mage-arcane':
        element = <specs.Arcane />
        break
      case 'mage-fire':
        element = <specs.Fire />
        break
      case 'mage-frost':
        element = <specs.FrostMage />
        break
      case 'monk-brewmaster':
        element = <specs.Brewmaster />
        break
      case 'monk-mistweaver':
        element = <specs.Mistweaver />
        break
      case 'monk-windwalker':
        element = <specs.Windwalker />
        break
      case 'paladin-holy':
        element = <specs.HolyPaladin />
        break
      case 'paladin-protection':
        element = <specs.ProtectionPaladin />
        break
      case 'paladin-retribution':
        element = <specs.Retribution />
        break
      case 'priest-discipline':
        element = <specs.Discipline />
        break
      case 'priest-holy':
        element = <specs.HolyPriest />
        break
      case 'priest-shadow':
        element = <specs.Shadow />
        break
      case 'rogue-assassination':
        element = <specs.Assassination />
        break
      case 'rogue-outlaw':
        element = <specs.Outlaw />
        break
      case 'rogue-subtlety':
        element = <specs.Subtlety />
        break
      case 'shaman-elemental':
        element = <specs.Elemental />
        break
      case 'shaman-enhancement':
        element = <specs.Enhancement />
        break
      case 'shaman-restoration':
        element = <specs.RestorationShaman />
        break
      case 'warlock-affliction':
        element = <specs.Affliction />
        break
      case 'warlock-demonology':
        element = <specs.Demonology />
        break
      case 'warlock-destruction':
        element = <specs.Destruction />
        break
      case 'warrior-arms':
        element = <specs.Arms />
        break
      case 'warrior-fury':
        element = <specs.Fury />
        break
      case 'warrior-protection':
        element = <specs.ProtectionWarrior />
        break
      default:
        return <Navigate to={routes.home} />
    }
    return <Suspense>{element}</Suspense>
  }, [specContext])
  return loadGuide
}

export default GuideRouter
