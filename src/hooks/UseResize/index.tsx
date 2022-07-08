import { useEffect, useState } from 'react'

const useResize = (initialSize = {}) => {
  const [size, setSize] = useState(initialSize)

  const handleResize = () => {
    setSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { size }
}

export default useResize
