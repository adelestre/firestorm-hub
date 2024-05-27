type Props = {
  size?: number
  className?: string
}

function Loading({ size = 12, className }: Readonly<Props>) {
  const sizeInRem = `${size / 4}rem`
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center ${className}`}
    >
      <output
        style={{ width: sizeInRem, height: sizeInRem }}
        className={`inline-block animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]`}
      >
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </output>
    </div>
  )
}

export default Loading
