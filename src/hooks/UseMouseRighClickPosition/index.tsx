import { useEffect, useState } from 'react'

const useMouseRighClickPosition = (initialSize = {}) => {
  const [righClickPosition, setRightClickPosition] = useState(initialSize)

  const handleRightClick = (e: any) => {
    setRightClickPosition({
      x: e.offsetX,
      y: e.offsetY
    })
  }

  useEffect(() => {
    window.addEventListener('contextmenu', handleRightClick)
    return () => {
      window.removeEventListener('contextmenu', handleRightClick)
    }
  }, [])

  return righClickPosition
}

export default useMouseRighClickPosition
