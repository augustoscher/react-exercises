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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return debounceValue
}

export default useDebounce
