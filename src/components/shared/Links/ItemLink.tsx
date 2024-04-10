import TextLink from './TextLink'

type Props = {
  item: {
    icon: string
    name: string
    link: string
  }
  className?: string
}

function ItemLink({ item, className }: Readonly<Props>) {
  return (
    <a
      href={item.link}
      className={`relative inline-flex items-baseline text-nowrap leading-none ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="peer absolute left-px top-1/2 -translate-y-1/2">
        <img
          className="border-primary-4 w-5 -translate-y-px rounded-sm border"
          src={item.icon}
          alt={item.name}
        />
      </span>
      <span className="ml-6">
        <TextLink text={item.name} />
      </span>
    </a>
  )
}

export default ItemLink
