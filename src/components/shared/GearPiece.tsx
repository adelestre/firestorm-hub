type Gem = {
  name: string
  icon: string
  link: string
}

type Props = {
  item: {
    name: string
    icon: string
    link: string
    ilvl: number
  }
  gems?: Gem[]
  enchant?: {
    name: string
    link: string
  }
}

function GearPiece({ item, gems, enchant }: Readonly<Props>) {
  return (
    <div className="flex max-w-full flex-row items-end gap-1">
      <a
        href={item.link}
        className="relative w-12 flex-shrink-0"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="w-12 -translate-y-px rounded-md border-2 border-purple-900"
          src={item.icon}
          alt={item.name}
        />
      </a>
      <div className="mb-1 flex min-w-0 flex-1 flex-col">
        {enchant && (
          <a
            className="truncate leading-none text-green-600"
            href={enchant.link}
          >
            {enchant.name}
          </a>
        )}
        <span className="flex flex-row items-center gap-2 font-bold text-purple-900">
          <p className="h-5">{item.ilvl}</p>
          <div className="flex flex-row">
            {gems?.map((gem, index) => (
              <a key={gem.name + index} href={gem.link}>
                <img
                  className="w-4 border border-black"
                  src={gem.icon}
                  alt={gem.name}
                />
              </a>
            ))}
          </div>
        </span>
      </div>
    </div>
  )
}

export default GearPiece
