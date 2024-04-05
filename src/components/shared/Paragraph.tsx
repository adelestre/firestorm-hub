type Props = {
  children: React.ReactNode
}

function Paragraph({ children }: Readonly<Props>) {
  return <p className="space-top">{children}</p>
}

export default Paragraph
