type Props = {
  name: string
  active?: boolean
  onClick: () => void
}

function TabHeaderElement({ name, active, onClick }: Readonly<Props>) {
  return (
    <button
      onClick={onClick}
      className={`max-w-64 flex-none border-b-2 px-3 py-2 font-semibold ${active ? 'border-accent-2' : 'border-transparent'} hover:bg-primary-2 rounded-t-md`}
    >
      <h1 className="text-size-2 line-clamp-2 !leading-7">{name}</h1>
    </button>
  )
}

export default TabHeaderElement
