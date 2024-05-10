export type TabElementProps = {
  id: string
  name: string
  children: React.ReactNode
}

function TabElement({ children }: Readonly<TabElementProps>) {
  return <div>{children}</div>
}

export default TabElement
