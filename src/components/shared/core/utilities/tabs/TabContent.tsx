type Props = {
  currentTab: string | null
  children: React.ReactNode
}
function TabContent({ currentTab, children }: Readonly<Props>) {
  return currentTab ? (
    <div className="text-size-1 w-full p-4 font-assistant">
      {(children as React.ReactElement[]).filter(
        (child: React.ReactElement) => {
          return child.props.id === currentTab
        }
      )}
    </div>
  ) : null
}

export default TabContent
