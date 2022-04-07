import { memo, useEffect, useState } from 'react'

// React.memo() is a great React tool that lets you optimize performance,
//  and replicate a shouldComponentUpdate and React.PureComponent for functional components.

type NameProps = {
  name: string
  counter?: number
}

const Name = ({ name, counter }: NameProps) => {
  console.log('3. Name Comp render')
  return (
    <>
      <h1>Hi {name}!</h1>
      <p>{counter}</p>
    </>
  )
}

const NameMemo = memo(Name)

let test = 0

const CountUpdater = () => {
  const [counter, setCounter] = useState(test)

  useEffect(() => {
    setInterval(() => {
      console.log('===')
      console.log('1. Run interval')
      // Update state variable `counter` every 2 seconds.
      // trigger a re-render. Re-render child components as well.
      test += 1
      setCounter(test)
    }, 2000)
  }, [])

  console.log('2. CounterUpdater render')
  return (
    <>
      {/* If we pass counter here, NameComponent will be re-rendered
        React.memo check props that are being passed to NameMemo. If they didn't change, it wont render the component
      */}
      <NameMemo name="Augusto" />
    </>
  )
}

export default CountUpdater
