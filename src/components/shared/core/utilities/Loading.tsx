import { useEffect, useState } from 'react'

type Props = {
  size?: number
}

function Loading({ size = 12 }: Readonly<Props>) {
  const [isTakingTooLong, setIsTakingTooLong] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsTakingTooLong(true)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [])
  const sizeInRem = `${size / 4}rem`
  return isTakingTooLong ? (
    <div className="flex h-full w-full flex-col items-center justify-center pb-24">
      <output
        style={{ width: sizeInRem, height: sizeInRem }}
        className={`inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </output>
    </div>
  ) : null
}

export default Loading
