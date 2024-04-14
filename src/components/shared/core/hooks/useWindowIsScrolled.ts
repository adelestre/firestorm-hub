import { useEffect, useRef, useState } from 'react'

export default function useWindowIsScrolled(
  ref: React.RefObject<HTMLDivElement>
): [boolean, () => void] {
  const [windowIsScrolled, setWindowIsScrolled] = useState(false)
  const scrollToTop = useRef<() => void>(() => {})
  useEffect(() => {
    const container = ref.current?.parentElement?.parentElement
    if (!container) return
    function updatePosition() {
      if (!container) return
      setWindowIsScrolled(container.scrollTop > 200)
    }
    container.addEventListener('scroll', updatePosition)
    scrollToTop.current = () => {
      if (!container) return
      container.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return () => container.removeEventListener('scroll', updatePosition)
  }, [ref])
  return [windowIsScrolled, scrollToTop.current]
}
