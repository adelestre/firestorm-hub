import { TooltipProps } from '../types/tooltip'
import Tooltip from '../../../Tooltip'

type Props = {
  children: React.ReactNode
  onClick: () => void
  tooltip?: TooltipProps
}

function IconButton({ children, onClick, tooltip }: Readonly<Props>) {
  return (
    <button onClick={onClick} className="relative">
      <div className="anim hover:bg-primary-3 peer flex h-12 w-12 items-center justify-center rounded-md p-2 text-3xl">
        {children}
      </div>
      {tooltip && <Tooltip {...tooltip} />}
    </button>
  )
}

export default IconButton
