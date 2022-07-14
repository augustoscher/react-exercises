import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('pages/Home'))
const Menu = lazy(() => import('components/Menu'))
const FetchHook = lazy(() => import('pages/FetchHook'))
const DebounceHook = lazy(() => import('pages/DebounceHook'))
const CustomHook = lazy(() => import('pages/CustomHook'))
const ReducerHook = lazy(() => import('pages/ReducerHook'))
const ToggleCustomHook = lazy(() => import('pages/ToggleCustomHook'))
const UseRef = lazy(() => import('pages/UseRef'))
const UseMemo = lazy(() => import('pages/UseMemo'))
const UseResizePage = lazy(() => import('pages/UseResize'))
const ReactMemoExample = lazy(() => import('pages/ReactMemoExample'))
const ReactLazyExample = lazy(() => import('pages/ReactLazyExample'))
const CssEffectsPage = lazy(() => import('pages/CssEffects'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Menu
            items={[
              { label: 'Fetch', path: 'fetch-hook' },
              { label: 'useDebounce', path: 'debounce-hook' },
              { label: 'Custom hook', path: 'custom-hook' },
              { label: 'UseReducer', path: 'use-reducer-hook' },
              { label: 'UseToggle', path: 'use-toggle-custom-hook' },
              { label: 'UseRef', path: 'use-ref' },
              { label: 'UseMemo', path: 'use-memo' },
              { label: 'UseResize', path: 'use-resize' },
              { label: 'React.memo()', path: 'react-memoization' },
              { label: 'React.lazy()', path: 'react-lazy' },
              { label: 'Css effects', path: 'css-effects' }
            ]}
          />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="fetch-hook" element={<FetchHook />} />
            <Route path="debounce-hook" element={<DebounceHook />} />
            <Route path="custom-hook" element={<CustomHook />} />
            <Route path="use-reducer-hook" element={<ReducerHook />} />
            <Route
              path="use-toggle-custom-hook"
              element={<ToggleCustomHook />}
            />
            <Route path="use-ref" element={<UseRef />} />
            <Route path="use-memo" element={<UseMemo />} />
            <Route path="use-resize" element={<UseResizePage />} />
            <Route path="react-memoization" element={<ReactMemoExample />} />
            <Route path="react-lazy" element={<ReactLazyExample />} />
            <Route path="css-effects" element={<CssEffectsPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
