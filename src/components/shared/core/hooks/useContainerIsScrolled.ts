import { useEffect, useRef, useState } from 'react'

type Props = {
  container: HTMLElement | undefined
  orientation?: 'vertical' | 'horizontal'
  threshold?: number
}

export default function useContainerIsScrolled({
  container,
  orientation = 'vertical',
  threshold = 10,
}: Props): [boolean, () => void] {
  const [containerIsScrolled, setContainerIsScrolled] = useState(false)
  const scrollBack = useRef<() => void>(() => {})
  useEffect(() => {
    if (!container) return
    function updatePosition() {
      if (!container) return
      setContainerIsScrolled(
        orientation === 'vertical'
          ? container.scrollTop > threshold
          : container.scrollLeft > threshold
      )
    }
    container.addEventListener('scroll', updatePosition)
    scrollBack.current = () => {
      if (!container) return
      container.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
    return () => container.removeEventListener('scroll', updatePosition)
  }, [container, orientation, threshold])
  return [containerIsScrolled, scrollBack.current]
}
