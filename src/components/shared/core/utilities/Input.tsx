import { ForwardedRef, ReactNode, forwardRef, useMemo, useRef } from 'react'

type Props = {
  type: 'email' | 'password' | 'text'
  value: string
  onChange: (value: string) => void
  placeholder: string
  fontSize?: string[]
  noLabel?: boolean
  disabled?: boolean
  important?: boolean
  sideAction?: ReactNode
}

const Input = forwardRef(function Input(
  {
    type,
    value,
    onChange,
    placeholder,
    fontSize,
    noLabel,
    disabled,
    important,
  }: Readonly<Props>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const actionRef = useRef<HTMLDivElement>(null)
  const containerClasses = useMemo(() => {
    let containerClasses =
      'border relative flex w-full flex-row items-center rounded-sm bg-transparent py-3'
    if (disabled) {
      containerClasses +=
        ' border-light-secondary-4 dark:border-dark-secondary-4'
    } else if (important) {
      containerClasses +=
        ' border-2 border-light-accent-3 dark:border-dark-accent-3'
    } else {
      containerClasses +=
        ' border-light-secondary-4 focus-within:border-light-accent-3 dark:border-dark-secondary-4 dark:focus-within:border-dark-accent-3'
    }
    return containerClasses
  }, [disabled, important])
  const placeholderClasses = useMemo(() => {
    let placeholderClasses =
      'pointer-events-none absolute -translate-y-1/2 bg-light-primary-1 px-1 duration-200 text-light-secondary-4 first-letter:uppercase dark:bg-dark-primary-1 dark:text-dark-secondary-4'
    if (fontSize) {
      placeholderClasses += fontSize[0] ? ' text-' + fontSize[0] : ' text-lg '
      placeholderClasses += fontSize[1] && ' sm:text-' + fontSize[1]
      placeholderClasses += fontSize[2] && ' md:text-' + fontSize[2]
    } else {
      placeholderClasses += ' text-lg'
    }
    if (noLabel) {
      placeholderClasses +=
        value?.length > 0 ? ' hidden' : ' peer-focus:hidden left-4 top-1/2'
    } else {
      placeholderClasses +=
        value?.length > 0
          ? ' peer-focus:text-light-accent-2 dark:peer-focus:text-dark-accent-2 left-2 top-0 peer-focus:text-sm'
          : ' peer-focus:text-light-accent-2 dark:peer-focus:text-dark-accent-2 left-4 top-1/2 peer-focus:left-2 peer-focus:top-0 peer-focus:text-sm'
    }
    return placeholderClasses
  }, [value, noLabel, fontSize])
  return (
    <div className={containerClasses}>
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={
          'peer w-full bg-transparent px-4 text-light-secondary-0 outline-none duration-200 placeholder:opacity-0 dark:text-dark-secondary-0' +
          (disabled ? ' pointer-events-none select-none' : '') +
          (fontSize?.[0] ? ' text-' + fontSize[0] : ' text-lg') +
          (fontSize?.[1] ? ' sm:text-' + fontSize[1] : ' text-lg') +
          (fontSize?.[2] ? ' md:text-' + fontSize[2] : ' text-lg')
        }
        disabled={disabled}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          paddingRight:
            (actionRef.current ? actionRef.current.clientWidth + 4 : 16) + 'px',
        }}
      />
      <div style={{ lineHeight: '1.1' }} className={placeholderClasses}>
        {placeholder}
      </div>
    </div>
  )
})

export default Input
