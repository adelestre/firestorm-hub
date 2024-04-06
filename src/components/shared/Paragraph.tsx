type Props = {
  children: React.ReactNode
}

function Paragraph({ children }: Readonly<Props>) {
  return (
    <p className="space-top text-size-1 font-assistant font-normal !leading-6">
      {children}
    </p>
  )
}

export default Paragraph
