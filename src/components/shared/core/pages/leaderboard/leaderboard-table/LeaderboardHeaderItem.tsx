type Props = {
  title: string
  secondLast?: boolean
  last?: boolean
}

function LeaderboardHeaderItem({ title, secondLast, last }: Readonly<Props>) {
  return (
    <th
      className={`${last ? 'hidden sm:block' : ''} text-accent-2 text-size-3 relative justify-center p-4 font-bold`}
    >
      {title}
      {!last && (
        <div
          className={`${secondLast ? 'hidden sm:block' : ''} bg-primary-4 absolute right-1 top-1/2 h-8 w-px -translate-y-1/2 rounded-md`}
        ></div>
      )}
    </th>
  )
}

export default LeaderboardHeaderItem
