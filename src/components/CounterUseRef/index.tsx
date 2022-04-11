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

export default CounterUseRef
