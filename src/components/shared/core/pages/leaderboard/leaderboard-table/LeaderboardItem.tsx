import { Player } from '@shared/core/types/leaderboard'
import ioGradient from '../ioGradient.json'
import LeaderboardRow from './LeaderboardRow'
import { useThemeContext } from '@shared/core/contexts/Contexts'
import MostPlayedRoles from './MostPlayedRoles'

type Props = {
  player: Player
}

function LeaderboardItem({ player }: Readonly<Props>) {
  const themeContext = useThemeContext()
  const ioColor = getIoColor(player.fsio, themeContext?.state)
  return (
    <LeaderboardRow pclass={player.pclass} key={player.pid}>
      <td className="p-4">{player.rank ?? '> 2000'}</td>
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

function getIoColor(fsio: number, theme: boolean | undefined) {
  for (const value of ioGradient) {
    if (fsio >= value.io) return theme ? value.colorDark : value.colorLight
  }
  return theme ? ioGradient[-1].colorDark : ioGradient[-1].colorLight
}
