import { Player } from '@shared/core/types/leaderboard'
import ioGradient from './ioGradient.json'
import { useThemeContext } from '@shared/core/contexts/ThemeContext'

type Props = {
  player: Player
  index: number
  last?: boolean
}

function LeaderboardItem({ player, index, last }: Readonly<Props>) {
  const themeContext = useThemeContext()
  const ioColor = getIoColor(player.fsio, themeContext?.state)
  return (
    <tr
      className={`text-size-1 ${index % 2 == 0 ? 'bg-primary-2' : 'bg-primary-1 !bg-opacity-20'} border-primary-3 ${!last ? 'border-b' : ''} text-center font-bold *:p-4`}
      spec-theme={player.pclass}
    >
      <td className="">{index + 1}</td>
      <td className="text-accent-2 font-assistant">{player.name}</td>
      <td style={{ color: ioColor }}>{player.fsio}</td>
      <td className="hidden sm:block">{player.runCount}</td>
    </tr>
  )
}

export default LeaderboardItem

function getIoColor(fsio: number, theme: boolean | undefined) {
  for (const value of ioGradient) {
    if (fsio >= value.io) return theme ? value.colorDark : value.colorLight
  }
  return theme ? ioGradient[-1].colorDark : ioGradient[-1].colorLight
}
