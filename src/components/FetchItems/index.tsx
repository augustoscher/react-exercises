import { useState, useEffect } from 'react'
import axios from 'axios'

import * as S from './styles'
import useDebounce from 'hooks/UseDebounce'

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
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const deb = useDebounce({ value: query, delay: 500 })

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const { data } = await axios.get<Data>(
          `https://hn.algolia.com/api/v1/search?query=${deb}`
        )
        setItems(data.hits)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [deb])

  return (
    <S.Wrapper>
      <div>
        <span>Search: </span>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>

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
    </S.Wrapper>
  )
}

export default FetchItems
