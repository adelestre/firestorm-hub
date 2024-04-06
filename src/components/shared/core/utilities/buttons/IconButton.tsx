type Props = {
  children: React.ReactNode
  onClick: () => void
  tooltip?: {
    content: string
    placement: 'top' | 'right' | 'bottom' | 'left'
  }
}

function IconButton({ children, onClick, tooltip }: Readonly<Props>) {
  return (
    <button
      data-tooltip-id="tooltip"
      data-tooltip-content={tooltip?.content}
      data-tooltip-place={tooltip?.placement}
      onClick={onClick}
      className="relative"
    >
      <div className="anim hover:bg-primary-3 peer flex h-12 w-12 items-center justify-center rounded-md p-2 text-3xl">
        {children}
      </div>
    </button>
  )
}

export default IconButton
