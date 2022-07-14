import { useState, useEffect } from 'react'

type UseDebounceProps = {
  value: string
  delay: number
}

const useDebounce = ({ value, delay }: UseDebounceProps) => {
  const [debounceValue, setDebounceValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value])

  return debounceValue
}

export default useDebounce
