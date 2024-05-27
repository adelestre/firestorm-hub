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
    sideAction,
  }: Readonly<Props>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const actionRef = useRef<HTMLDivElement>(null)
  const containerClasses = useMemo(() => {
    let containerClasses =
      'border relative flex w-full flex-row items-center rounded-sm bg-transparent py-3'
    if (disabled) {
      containerClasses += ' border-secondary-4'
    } else if (important) {
      containerClasses += ' border-2 border-accent-3'
    } else {
      containerClasses += ' border-secondary-4 focus-within:border-accent-3'
    }
    return containerClasses
  }, [disabled, important])
  const placeholderClasses = useMemo(() => {
    let placeholderClasses =
      'pointer-events-none absolute -translate-y-1/2 bg-primary-2 px-1 duration-200 text-secondary-4 first-letter:uppercase'
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
          ? ' peer-focus:text-accent-2 left-2 top-0 text-sm'
          : ' peer-focus:text-accent-2 left-4 top-1/2 peer-focus:left-2 peer-focus:top-0 peer-focus:text-sm'
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
          'text-secondary-0 peer w-full bg-transparent px-4 outline-none duration-200 placeholder:opacity-0' +
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
      {sideAction && (
        <div
          ref={actionRef}
          className="anim absolute right-0 mr-2 flex h-full flex-row items-center justify-center gap-1 py-2"
        >
          {sideAction}
        </div>
      )}
    </div>
  )
})

export default Input
