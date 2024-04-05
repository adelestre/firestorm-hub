import { MdNightlightRound, MdLightMode } from 'react-icons/md'
import IconButton from './IconButton'
import { useThemeContext } from '../../home/ThemeContext'

function ThemeToggle() {
  const theme = useThemeContext()
  return theme ? (
    <IconButton
      onClick={theme.toggle}
      tooltip={{
        text: theme.state ? 'Light Theme' : 'Dark Theme',
        bottom: true,
      }}
    >
      <div className={`${!theme.state && '-rotate-[30deg]'}`}>
        {theme.state ? <MdLightMode /> : <MdNightlightRound />}
      </div>
    </IconButton>
  ) : null
}

export default ThemeToggle
