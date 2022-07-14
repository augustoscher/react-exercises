import { useEffect, useState } from 'react'
import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import useDebounce from 'hooks/UseDebounce'

const DATA = ['bike', 'dog', 'pig', 'turtle', 'coin', 'cat', 'shop', 'rabbit']

const DebounceHook = () => {
  const [results, setResults] = useState<string[]>([])
  const [text, setText] = useState('')

  const deb = useDebounce({ value: text, delay: 500 })

  useEffect(() => {
    setResults(DATA.filter((item) => item.toLocaleLowerCase().includes(deb)))
  }, [deb])

  return (
    <Base>
      <ExampleDescription
        title="useDebounce custom hook"
        description="Custom hook with debounce implementation that we can use in text fields and API requests"
        tags={['useState', 'useEffect', 'debounce']}
        links={['https://www.instagram.com/p/Cf9HSdgjikS/']}
      />

      <hr />

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <h4>Results:</h4>

      {results.length > 0 ? (
        results.map((item, idx) => <p key={idx}>{item}</p>)
      ) : (
        <div>Nothing found.</div>
      )}
    </Base>
  )
}

export default DebounceHook
