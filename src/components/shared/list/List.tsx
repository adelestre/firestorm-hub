import React from 'react'

type Props = {
  children: React.ReactNode
  ordered?: boolean
} & (
  | React.OlHTMLAttributes<HTMLOListElement>
  | React.OlHTMLAttributes<HTMLUListElement>
)

function List({ children, ordered, ...props }: Readonly<Props>) {
  const classes =
    (props.className ?? '') +
    ' space-top-half text-size-1 font-assistant font-normal !leading-6 ml-8 sm:ml-10 md:ml-12'
  return ordered ? (
    <ol {...props} className={classes}>
      {children}
    </ol>
  ) : (
    <ul {...props} className={classes}>
      {children}
    </ul>
  )
}

export default List
