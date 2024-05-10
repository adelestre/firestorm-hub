import TabContent from '@shared/core/utilities/tabs/TabContent'
import TabHeader from '@shared/core/utilities/tabs/TabHeader'
import { useState } from 'react'

type Props = {
  defaultTab?: string
  className?: string
  headerBgColor?: string
  children: React.ReactNode
}

function Tabs({
  defaultTab,
  className,
  headerBgColor = 'primary-1',
  children,
}: Readonly<Props>) {
  const initialTab =
    (children as React.ReactElement[]).find(
      (child) => child.props.id === defaultTab
    )?.props.id ?? (children as React.ReactElement[])[0].props.id
  const [currentTab, setCurrentTab] = useState<string | null>(initialTab)
  return (
    currentTab && (
      <div className={`flex w-full flex-col ${className}`}>
        <TabHeader
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          bgColor={headerBgColor}
        >
          {children}
        </TabHeader>
        <TabContent currentTab={currentTab}>{children}</TabContent>
      </div>
    )
  )
}

export default Tabs
