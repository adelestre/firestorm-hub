import { Player } from '@shared/core/types/leaderboard'
import LeaderboardRow from './LeaderboardRow'
import { useThemeContext } from '@shared/core/contexts/Contexts'
import MostPlayedRoles from './MostPlayedRoles'
import { getIoColor } from '../ioColor'
import { useCallback } from 'react'

type Props = {
  player: Player
  handleClickPlayer: (player: Player) => void
  idx: number | undefined
}

function LeaderboardItem({ player, handleClickPlayer, idx }: Readonly<Props>) {
  const themeContext = useThemeContext()
  const ioColor = getIoColor(player.fsio, themeContext?.state)
  const handleClick = useCallback(() => {
    handleClickPlayer(player)
  }, [handleClickPlayer, player])
  return (
    <LeaderboardRow
      pclass={player.pclass}
      key={player.pid}
      handleClickPlayer={handleClick}
    >
      <td className={`relative p-4${idx !== undefined ? ' pr-4' : ''}`}>
        {idx !== undefined ? idx : player.rank ?? '> 2000'}
        {idx !== undefined && (
          <span className="text-primary-4 absolute pl-1">
            {' '}
            ({player.rank ?? '> 2000'})
          </span>
        )}
      </td>
      <td
        style={{
          textShadow:
            player.pclass === 'priest' ||
            (player.pclass === 'rogue' && !themeContext?.state)
              ? '0px 1px 2px black'
              : 'none',
        }}
        className="text-accent-3 p-4 font-assistant"
      >
        <div className="flex flex-row items-center justify-center">
          {player.name}
          <MostPlayedRoles player={player} />
        </div>
      </td>
      <td className="p-4" style={{ color: ioColor }}>
        {player.fsio}
      </td>
      <td className="hidden p-4 sm:block">{player.runCount}</td>
    </LeaderboardRow>
  )
}

export default LeaderboardItem
