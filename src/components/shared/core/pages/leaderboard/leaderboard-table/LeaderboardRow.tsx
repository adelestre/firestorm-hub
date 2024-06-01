import { forwardRef } from 'react'

type Props = {
  children: React.ReactNode
  pclass?: string
  handleClickPlayer?: () => void
}

const LeaderboardRow = forwardRef(function LeaderboardRow(
  { children, pclass, handleClickPlayer }: Readonly<Props>,
  ref: React.Ref<HTMLTableRowElement>
) {
  return (
    <tr
      ref={ref}
      onClick={handleClickPlayer}
      className={`text-size-2 odd:bg-primary-2 even:bg-primary-1 ${handleClickPlayer !== undefined ? 'cursor-pointer ' : ''}${pclass ? 'hover:!bg-primary-3 hover:!bg-opacity-40' : ''} border-primary-3 border-b text-center font-bold even:!bg-opacity-20`}
      spec-theme={pclass}
    >
      {children}
    </tr>
  )
})

export default LeaderboardRow
