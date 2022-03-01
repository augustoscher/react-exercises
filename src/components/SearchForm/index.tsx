import { useState } from 'react'

import useFetch from 'hooks/UseFetch'
import * as S from './styles'

const SearchForm = () => {
  const [query, setQuery] = useState('redux')
  const { items, isLoading, isError, doFetch } = useFetch({
    initialUrl: 'https://hn.algolia.com/api/v1/search?query=redux',
    initialData: []
  })

  return (
    <S.Wrapper>
      <form
        onSubmit={(event) => {
          doFetch(`http://hn.algolia.com/api/v1/search?query=${query}`)

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
