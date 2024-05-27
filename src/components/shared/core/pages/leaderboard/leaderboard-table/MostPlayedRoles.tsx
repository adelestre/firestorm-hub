import { Player } from '@shared/core/types/leaderboard'
import React from 'react'

function MostPlayedRoles({ player }: Readonly<{ player: Player }>) {
  const roles: { label: string; value: number }[] = []

  if (player.tank !== null && player.tank > 0)
    roles.push({ label: 'tank', value: player.tank })
  if (player.healer !== null && player.healer > 0)
    roles.push({ label: 'healer', value: player.healer })
  if (player.dps !== null && player.dps > 0)
    roles.push({ label: 'dps', value: player.dps })

  roles.sort((a, b) => b.value - a.value)
  roles.filter((role) => role.value >= roles[0].value * 0.8)

  return (
    <div className="ml-2 mt-1 flex flex-row gap-1">
      {roles.map((role) => (
        <img
          key={player.pid + role.label}
          src={`/assets/${role.label}.svg`}
          alt={role.label}
          className="h-3 w-3"
        />
      ))}
    </div>
  )
}

export default MostPlayedRoles
