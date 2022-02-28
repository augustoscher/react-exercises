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

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get<Data>(
        'https://hn.algolia.com/api/v1/search?query=redux'
      )
      console.log('ffsdifjo')
      setItems(data.hits)
    }

    fetchData()
  }, [])

  return (
    <ul>
      {items.map((item) => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  )
}

export default FetchItems
