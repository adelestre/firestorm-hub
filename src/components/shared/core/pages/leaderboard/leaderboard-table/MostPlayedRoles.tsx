import { Player } from '@shared/core/types/leaderboard'
import React from 'react'

type Props = {
  player: Player
}

function MostPlayedRoles({ player }: Readonly<Props>) {
  return (
    player.roles && (
      <div className="ml-2 mt-1 flex flex-row gap-1">
        {player.roles.map((role) => (
          <img
            key={player.pid + role}
            src={`/assets/${role}.svg`}
            alt={role}
            className="h-3 w-3"
          />
        ))}
      </div>
    )
  )
}

export default MostPlayedRoles
