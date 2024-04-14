import { useCallback, useRef } from 'react'

export const useIdGen = (): (() => number) => {
  const idGen = useRef(1)
  const nextId = useCallback(() => {
    const id = idGen.current
    idGen.current = id + 1
    return id
  }, [idGen])

  return nextId
}
