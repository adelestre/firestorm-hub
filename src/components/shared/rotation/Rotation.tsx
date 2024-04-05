type Props = {
  className?: string
  children?: React.ReactNode
}

function Rotation({ className, children }: Readonly<Props>) {
  return (
    <div className={className}>
      <div className="border-primary-4 w-fit rounded-lg border-2 p-2">
        <div className="flex flex-row flex-wrap gap-y-2 !bg-opacity-30">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Rotation
