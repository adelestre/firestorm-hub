import { useCallback, useRef, useState } from 'react'
import List from './List'
import ListElement from './ListElement'
import { useThrottledEffect } from '../core/utilities/hooks/useThrottledEffect'
import { Definition } from '../core/utilities/types/list'

type Props = {
  defs: Definition[]
} & React.HTMLAttributes<HTMLDivElement>

function Definitions({ defs, ...props }: Readonly<Props>) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(0)
  const resize = useCallback(() => {
    setSize(0)
    if (!containerRef.current) return
    let _size = 0
    containerRef.current.childNodes.forEach((el) => {
      _size = Math.max(
        _size,
        (getNestedFirstChild(el, 3) as HTMLElement).getBoundingClientRect()
          .width
      )
    })
    setSize(_size)
  }, [])
  useThrottledEffect(resize, 'resize')
  return (
    <List className={'max-w-full list-disc ' + props.className}>
      <div ref={containerRef}>
        {defs.map((def) => (
          <ListElement key={def.key}>
            <div className="flex flex-row leading-none">
              <span className="mr-2 w-max" style={{ width: size + 'px' }}>
                <span className="def w-max truncate text-nowrap">
                  {def.abbreviation}
                </span>
              </span>
              <div className="pr-2">:</div>
              <span className="flex-1 text-left">{def.definition}</span>
            </div>
          </ListElement>
        ))}
      </div>
    </List>
  )
}

function getNestedFirstChild(
  el: ChildNode | null,
  levels: number
): HTMLElement | null {
  let currentElement = el
  for (let i = 0; i < levels; i++) {
    if (!currentElement?.firstChild) {
      return null
    }
    currentElement = currentElement.firstChild
  }
  return currentElement as HTMLElement
}

export default Definitions
