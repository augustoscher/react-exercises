import React from 'react'

// when we user curly braces {} on component, web will need to use return
export default props => {
  const names = ['Jon', 'Daenerys', 'Arya', 'Sansa', 'Tyrion']
  let num = Math.random()
  const generateItems = items => {
    return items.map(item => <li>{item}</li>)
  }

  return (
    <ul>
      {num}
      {generateItems(names)}
    </ul>
  )
}