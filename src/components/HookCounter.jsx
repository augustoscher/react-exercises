import React, { useState, useEffect } from 'react'

export default props => {
  const [counter, setCounter] = useState(100);
  const [status, setStatus] = useState('pair');

  useEffect(() => {
    //chamada sempre que o componente for mutado ou 
    //sempre que houver uma atualização no seu component
    counter % 2 == 0 ? setStatus('Pair') : setStatus('Odd')
  })

  return (
    <div>
      <div>Número: {counter}</div>
      <div>Par ou impar: {status}</div>
      <button
        onClick={() => setCounter(counter + 1)}>
        Inc
      </button>
      <button
        onClick={() => setCounter(counter - 1)}>
        Dec
      </button>
    </div>
  )
}