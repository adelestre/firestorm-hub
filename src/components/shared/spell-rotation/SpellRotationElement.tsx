type Props = {
  children: React.ReactNode
  channeled?: boolean
  duration?: number
  offset?: number
}

function SpellRotationElement({
  children,
  channeled,
  duration,
}: Readonly<Props>) {
  return (
    <span
      style={{ width: (duration !== undefined ? 2 * duration : 2) + 2 + 'rem' }}
      className={`group relative inline-flex flex-col justify-start gap-0 ${!channeled ? 'last:!w-8' : ''}`}
    >
      {children}
      <div
        className={`absolute ${channeled ? 'bg-accent-3' : 'bg-primary-3'} h-8 w-full`}
      ></div>
    </span>
  )
}

export default SpellRotationElement
