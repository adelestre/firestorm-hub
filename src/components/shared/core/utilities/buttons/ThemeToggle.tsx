import { MdNightlightRound, MdLightMode } from 'react-icons/md'
import IconButton from './IconButton'
import { useThemeContext } from '@shared/core/contexts/Contexts'

function ThemeToggle() {
  const theme = useThemeContext()
  return theme ? (
    <IconButton
      onClick={theme.toggle}
      tooltip={{
        content: 'Theme mode',
        placement: 'bottom',
      }}
    >
      <div className={`${!theme.state && '-rotate-[30deg]'}`}>
        {theme.state ? <MdLightMode /> : <MdNightlightRound />}
      </div>
    </IconButton>
  ) : null
}

export default ThemeToggle
