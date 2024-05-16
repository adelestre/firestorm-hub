type Props = {
  currentTab: string | null
  children: React.ReactNode
}
function TabContent({ currentTab, children }: Readonly<Props>) {
  return (
    <div className="text-size-1 w-full p-4 font-assistant">
      {currentTab &&
        (children as React.ReactElement[]).filter(
          (child: React.ReactElement) => {
            return child.props.id === currentTab
          }
        )}
    </div>
  )
}

export default TabContent
