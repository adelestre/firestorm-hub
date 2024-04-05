import { useEffect, useRef, useState } from 'react'

export const useThrottledEffect = (callBack: () => void, event: string) => {
  const [lastUpdate, setLastUpdate] = useState(0)
  const callbackEcho = useRef<NodeJS.Timeout | null>(null)
  const interval = 100

  const throttledCallback = () => {
    if (Date.now() - lastUpdate < interval) return
    callBack()
    setLastUpdate(Date.now())
    if (callbackEcho.current != null) {
      clearTimeout(callbackEcho.current)
      callbackEcho.current = setTimeout(() => {
        callBack()
      }, interval * 2)
    }
  }
  useEffect(() => {
    throttledCallback()
    window.addEventListener(event, throttledCallback)
    return () => window.removeEventListener(event, throttledCallback)
  })
}
