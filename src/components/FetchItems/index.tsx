import { useState, useEffect } from 'react'
import axios from 'axios'

type Item = {
  objectID: string
  url: string
  title: string
}

type Data = {
  hits: Item[]
}

const FetchItems = () => {
  const [items, setItems] = useState<Item[]>([])
  const [query, setQuery] = useState('redux')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const { data } = await axios.get<Data>(
          `https://hn.algolia.com/api/v1/search?query=${query}`
        )
        setItems(data.hits)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [query])

  return (
    <>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default FetchItems
