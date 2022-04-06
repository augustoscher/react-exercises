import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from 'components/Menu'
import Home from 'pages/Home'
import FetchHook from 'pages/FetchHook'
import CustomHook from 'pages/CustomHook'
import ReducerHook from 'pages/ReducerHook'
import ToggleCustomHook from 'pages/ToggleCustomHook'
import UseRef from 'pages/UseRef'
import UseMemo from 'pages/UseMemo'
import UseResizePage from 'pages/UseResize'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu
          items={[
            { label: 'Fetch with hooks', path: 'fetch-hook' },
            { label: 'Custom hook', path: 'custom-hook' },
            { label: 'UseReducer hook', path: 'use-reducer-hook' },
            { label: 'UseToggle hook', path: 'use-toggle-custom-hook' },
            { label: 'UseRef hook', path: 'use-ref' },
            { label: 'UseMemo hook', path: 'use-memo' },
            { label: 'UseResize custom hook', path: 'use-resize' }
          ]}
        />

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="fetch-hook" element={<FetchHook />} />
          <Route path="custom-hook" element={<CustomHook />} />
          <Route path="use-reducer-hook" element={<ReducerHook />} />
          <Route path="use-toggle-custom-hook" element={<ToggleCustomHook />} />
          <Route path="use-ref" element={<UseRef />} />
          <Route path="use-memo" element={<UseMemo />} />
          <Route path="use-resize" element={<UseResizePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
