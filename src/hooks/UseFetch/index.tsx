import { useState, useEffect } from 'react'
import axios from 'axios'

type UseDataApiProps = {
  initialUrl: string
  initialData: any[]
}

const useFetch = ({ initialUrl, initialData }: UseDataApiProps) => {
  const [items, setItems] = useState(initialData)
  const [url, setUrl] = useState(initialUrl)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setIsError(false)

      try {
        const { data } = await axios.get(url)

        setItems(data.hits)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [url])

  return { items, isLoading, isError, doFetch: setUrl }
}

export default useFetch
