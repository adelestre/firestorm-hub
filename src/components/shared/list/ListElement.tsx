type Props = {
  children: React.ReactNode
} & React.LiHTMLAttributes<HTMLLIElement>

function ListElement({ children, ...props }: Readonly<Props>) {
  const classes = (props.className ?? '') + ' mb-1'
  return (
    <li className={classes} {...props}>
      {children}
    </li>
  )
}

export default ListElement
