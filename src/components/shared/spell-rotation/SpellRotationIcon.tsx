type Props = {
  item?: { icon: string; link: string; name: string }
  offset?: number
}

function SpellRotationIcon({ item, offset }: Readonly<Props>) {
  return (
    <a
      href={item ? item.link : '#'}
      target="_blank"
      rel="noopener noreferrer"
      style={{ marginLeft: offset ? 2 * offset + 'rem' : '0' }}
      className="z-10 h-8 w-8"
    >
      {item && (
        <img
          className="border-primary-4 rounded-sm border"
          src={item.icon}
          alt={item.name}
        />
      )}
    </a>
  )
}

export default SpellRotationIcon
