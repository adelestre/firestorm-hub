import { forwardRef } from 'react'

type Props = {
  children: React.ReactNode
  pclass?: string
}

const LeaderboardRow = forwardRef(function LeaderboardRow(
  { children, pclass }: Readonly<Props>,
  ref: React.Ref<HTMLTableRowElement>
) {
  return (
    <tr
      ref={ref}
      className={`text-size-2 odd:bg-primary-2 even:bg-primary-1 ${pclass ? 'hover:!bg-primary-3 hover:!bg-opacity-40' : ''} border-primary-3 border-b text-center font-bold even:!bg-opacity-20`}
      spec-theme={pclass}
    >
      {children}
    </tr>
  )
})

export default LeaderboardRow
