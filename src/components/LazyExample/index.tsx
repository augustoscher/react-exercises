import { Suspense, lazy, useState } from 'react'
import Loader from 'components/Loader'

import * as S from './styles'

const FIVE_SECONDS = 5 * 1000

const Heavy = lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, FIVE_SECONDS)).then(
    () => import('../Heavy')
  )
})

const Hash = lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, FIVE_SECONDS)).then(
    () => import('../Hash')
  )
})

const LazyExample = () => {
  const [load, setLoad] = useState(false)

  return (
    <div>
      <S.Content>
        <p>Loading after button click</p>
        <S.Grid>
          <S.GridItems>
            <button name="load" onClick={() => setLoad(true)}>
              Load
            </button>
          </S.GridItems>
          <S.GridItems>
            <p>Loaded component: </p>
            {load && (
              <Suspense fallback={<div>Loading....</div>}>
                <Hash />
              </Suspense>
            )}
          </S.GridItems>
        </S.Grid>
      </S.Content>
      <S.Content>
        <p>Import Heavy components with lazy load approach</p>

        <Suspense fallback={<Loader />}>
          <Heavy />
        </Suspense>
      </S.Content>
    </div>
  )
}
export default LazyExample
