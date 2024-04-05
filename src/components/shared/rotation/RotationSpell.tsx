type Props = {
  icon: string
  link: string
  name: string
  channeled?: boolean
  duration?: number
}

function RotationSpell({
  icon,
  link,
  name,
  channeled,
  duration,
}: Readonly<Props>) {
  return (
    <span
      style={{ paddingRight: (duration ? 2 * duration : 2) + 'rem' }}
      className={`${channeled ? 'bg-accent-3' : 'bg-secondary-4'} inline-flex ${!channeled ? 'last:!pr-0' : ''}`}
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="h-8 w-8"
      >
        <img
          className="border-primary-4 rounded-sm border"
          src={icon}
          alt={name}
        />
      </a>
    </span>
  )
}

export default RotationSpell
