import { useEffect, useState } from 'react'

const useMouse = (initialSize = {}) => {
  const [mousePosition, setMousePosition] = useState(initialSize)

  const handleMouseMove = (e: any) => {
    setMousePosition({
      x: e.offsetX,
      y: e.offsetY
    })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return { mousePosition }
}

export default useMouse
