type Props = {
  children: React.ReactNode
  onClick: () => void
  tooltip?: {
    content: string
    placement: 'top' | 'right' | 'bottom' | 'left'
  }
  fullHeight?: boolean
  className?: string
}

function IconButton({
  children,
  onClick,
  tooltip,
  fullHeight,
  className,
}: Readonly<Props>) {
  return (
    <button
      data-tooltip-id="tooltip"
      data-tooltip-content={tooltip?.content}
      data-tooltip-place={tooltip?.placement}
      onClick={onClick}
      className={`relative${fullHeight ? ' h-full' : ''}`}
    >
      <div
        className={`anim hover:bg-primary-3 peer flex ${fullHeight ? 'h-full' : 'h-12'} w-12 items-center justify-center rounded-md p-2 text-3xl ${className}`}
      >
        {children}
      </div>
    </button>
  )
}

export default IconButton
