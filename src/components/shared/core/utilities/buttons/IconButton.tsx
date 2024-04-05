import { TooltipProps } from '../types/tooltip'
import Tooltip from '../../../Tooltip'

type Props = {
  children: React.ReactNode
  onClick: () => void
  tooltip?: TooltipProps
}

function IconButton({ children, onClick, tooltip }: Readonly<Props>) {
  return (
    <button onClick={onClick}>
      <div className="anim hover:bg-primary-3 peer relative rounded-md p-2 text-3xl">
        {children}
      </div>
      {tooltip && <Tooltip {...tooltip} />}
    </button>
  )
}

export default IconButton
