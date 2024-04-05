type Props = {
  noSpace?: boolean
}

function Separator({ noSpace }: Readonly<Props>) {
  return (
    <div
      className={`bg-accent-1 h-1 rounded-sm ${noSpace ? '' : 'my-6'}`}
    ></div>
  )
}

export default Separator
