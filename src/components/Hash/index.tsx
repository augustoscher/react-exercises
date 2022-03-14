import { useState, useMemo } from 'react'
import { Md5 } from 'ts-md5/dist/md5'

const Hash: React.FC = () => {
  const [input, setInput] = useState<string>('abc')
  // Now we use `useMemo` to tell React to memoize the calculation result for input.
  // When a user inputs the same input there will be done no calculation and the value will be returned right away.
  const hash = useMemo(() => Md5.hashStr(input), [input])

  return (
    <div>
      <label>
        Input:
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </label>
      Hash: {hash}
    </div>
  )
}

export default Hash
