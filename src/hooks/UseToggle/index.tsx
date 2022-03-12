import { useCallback, useState } from 'react'

const useToggle = (value1: any, value2: any) => {
  const [state, setState] = useState(value1)

  // will return a memoized version of the callback that only changes if one of the inputs has changed.
  const toggle = useCallback(
    (): void =>
      setState((prevState: any) => (prevState === value1 ? value2 : value1)),
    [value1, value2]
  )

  return [state, toggle]
}

export default useToggle
