import React, { useRef, useState, useEffect } from 'react'

const CounterUseRef = () => {
  const [count, setCount] = useState(0)

  const prevCountRef = useRef<number>()

  useEffect(() => {
    prevCountRef.current = count
  })

  const prevCount = prevCountRef.current

  return (
    <>
      <p>Valor do contador antes: {prevCount} </p>
      <p>Valor do contador agora: {count}</p>
      <button onClick={() => setCount(count + 1)}>Somar um ao contador</button>
    </>
  )
}

export const MutateCounter = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  console.log('1. MutateCounter render')

  useEffect(() => {
    setInterval(() => {
      console.log('===')
      console.log('2. Run interval')
      // Update state variable `counter` every 1 seconds.
      // trigger a re-render. Re-render child components as well.
      if (inputRef && inputRef.current) {
        const v = parseInt(inputRef.current.value || '1') + 1
        inputRef.current.value = v.toString()
      }
    }, 1000)
  }, [])

  return <input type="text" ref={inputRef} name="counter" defaultValue="1" />
}

export default CounterUseRef
