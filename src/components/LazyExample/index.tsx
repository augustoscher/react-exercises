import { Suspense, lazy } from 'react'

const Hash = lazy(() => import('../Hash/index'))

const LazyExample = () => {
  // const handleClick = () => {}

  return (
    <div>
      <p>Import componentes with lazy load approach</p>
      <p>Click on the button and see it working</p>
      <button>Click</button>

      <Suspense fallback={<div>Loading components...</div>}>
        <Hash />
      </Suspense>
    </div>
  )
}
export default LazyExample
