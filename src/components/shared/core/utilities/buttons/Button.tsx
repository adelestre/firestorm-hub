type Props = {
  children: React.ReactNode
  active?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

function Button({ children, active, ...props }: Readonly<Props>) {
  let classes =
    (props.className ? props.className + ' ' : '') +
    'anim px-4 py-2 border-2 text-2xl sm:text-3xl rounded-md font-eco font-semibold flex items-center justify-center'
  classes +=
    ' ' +
    (active
      ? 'bg-accent-3 border-accent-1 cursor-default text-zinc-900 font-extrabold'
      : 'bg-primary-1 hover:bg-primary-3 border-primary-4')
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  )
}

export default Button
