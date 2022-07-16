import { useEffect, useState } from 'react'

import useFetch from 'hooks/UseFetch'
import useDebounce from 'hooks/UseDebounce'
import * as S from './styles'

const BASE_URL = 'https://hn.algolia.com/api/v1/search?query='

const SearchForm = () => {
  const [query, setQuery] = useState('redux')
  const { items, isLoading, isError, doFetch } = useFetch({
    initialUrl: BASE_URL,
    initialData: []
  })

  const deb = useDebounce({ value: query, delay: 500 })

  useEffect(() => {
    doFetch(`${BASE_URL}${deb}`)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deb])

  return (
    <S.Wrapper>
      <form
        onSubmit={(event) => {
          doFetch(`${BASE_URL}${query}`)
          event.preventDefault()
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
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

export default SearchForm
