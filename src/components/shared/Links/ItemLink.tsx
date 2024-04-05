import TextLink from './TextLink'

type Props = {
  icon: string
  name: string
  link: string
  className?: string
}

function ItemLink({ icon, name, link, className }: Readonly<Props>) {
  return (
    <a
      href={link}
      className={`relative inline-flex items-baseline text-nowrap leading-none ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="peer absolute left-px top-1/2 -translate-y-1/2">
        <img
          className="border-primary-4 w-5 -translate-y-px rounded-sm border"
          src={icon}
          alt={name}
        />
      </span>
      <span className="ml-6">
        <TextLink text={name} />
      </span>
    </a>
  )
}

export default ItemLink
