import { useEffect, useRef, useState } from 'react'

type Props = {
  container: HTMLElement | undefined
  orientation?: 'vertical' | 'horizontal'
  threshold?: number
}

export default function useContainerIsFullyScrolled({
  container,
  orientation = 'vertical',
  threshold = 10,
}: Props): [boolean, () => void] {
  const [containerIsFullyScrolled, setContainerIsFullyScrolled] =
    useState(false)
  const scrollBack = useRef<() => void>(() => {})
  useEffect(() => {
    if (!container) return
    function updatePosition() {
      if (!container) return
      setContainerIsFullyScrolled(
        orientation === 'vertical'
          ? container.scrollHeight - container.scrollTop <=
              container.clientHeight + threshold
          : container.scrollWidth - container.scrollLeft <=
              container.clientWidth + threshold
      )
    }
    scrollBack.current = () => {
      if (!container) return
      container.scrollTo({
        top: container.scrollHeight,
        left: container.scrollWidth,
        behavior: 'smooth',
      })
    }
    updatePosition()
    container.addEventListener('scroll', updatePosition)
    return () => container.removeEventListener('scroll', updatePosition)
  }, [container, orientation, threshold])
  return [containerIsFullyScrolled, scrollBack.current]
}
