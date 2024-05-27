import React, { Dispatch, SetStateAction } from 'react'
import { Option } from '@material-tailwind/react'

type Props = {
  value: string | undefined
  current: string | undefined
  children: string | undefined
  setter: Dispatch<SetStateAction<string | undefined>>
  accent?: boolean
  placeholder?: boolean
}

function LeaderboardSelectOption({
  value,
  current,
  children,
  setter,
  accent,
  placeholder,
}: Readonly<Props>) {
  const active = value === current
  return placeholder ? (
    <p
      className={`hover:bg-primary-3 rounded-md ${accent ? 'text-accent-3 hover:text-accent-3 focus:text-accent-3' : 'text-secondary-2 hover:text-secondary-2 focus:text-secondary-2'} text-md mt-1 bg-transparent px-3 py-1 first:mt-0 focus:bg-transparent lg:text-xl`}
      onClick={() => setter(value)}
      spec-theme={value}
    >
      {children}
    </p>
  ) : (
    <button
      className={`relative ${
        value === undefined && active ? 'hidden ' : ''
      }${active ? `${accent ? 'bg-accent-3' : 'bg-secondary-2 '} text-primary-2 pointer-events-none` : `hover:bg-primary-3 ${accent ? 'text-accent-3 hover:text-accent-3 focus:text-accent-3' : 'text-secondary-2 hover:text-secondary-2 focus:text-secondary-2'} bg-transparent focus:bg-transparent`} mt-1 rounded-md px-3 py-1 text-xl first:mt-0`}
      onClick={() => setter(value)}
      spec-theme={value}
    >
      <Option className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 p-0 opacity-0">
        {children}
      </Option>
      <span className="pointer-events-none">{children}</span>
    </button>
  )
}

export default LeaderboardSelectOption
