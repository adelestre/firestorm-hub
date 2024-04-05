import { TooltipProps } from './core/utilities/types/tooltip'

function Tooltip({ text, fontSize, bottom, distance }: Readonly<TooltipProps>) {
  const d = distance ?? '-10%'
  return (
    <div
      role="tooltip"
      style={
        bottom
          ? {
              bottom: d,
              transform: `translate(50%,100%)`,
            }
          : {
              top: d,
              transform: `translate(50%,-100%)`,
            }
      }
      className="anim invisible absolute right-1/2 z-50 inline-block text-xs font-medium opacity-0 shadow-sm peer-hover:visible peer-hover:opacity-90 peer-hover:delay-300"
    >
      <div className="anim bg-primary-3 text-secondary-1 rounded p-2">
        <p
          className="text-center font-semibold"
          style={{ fontSize: fontSize ?? '0.8rem' }}
        >
          {text}
        </p>
        <div
          className={
            'anim bg-primary-3 absolute right-1/2 h-2 w-2 translate-x-1/2 rotate-45' +
            (bottom ? ' top-0 -translate-y-1/2' : ' bottom-0 translate-y-1/2')
          }
        ></div>
      </div>
    </div>
  )
}

export default Tooltip
