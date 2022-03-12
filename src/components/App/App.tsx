import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from 'components/Menu'
import Home from 'pages/Home'
import FetchHook from 'pages/FetchHook'
import CustomHook from 'pages/CustomHook'
import ReducerHook from 'pages/ReducerHook'
import ToggleCustomHook from 'pages/ToggleCustomHook'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu
          items={[
            { label: 'Fetch with hooks', path: 'fetch-hook' },
            { label: 'Custom hook', path: 'custom-hook' },
            { label: 'UseReducer hook', path: 'use-reducer-hook' },
            { label: 'UseToggle hook', path: 'use-toggle-custom-hook' }
          ]}
        />

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="fetch-hook" element={<FetchHook />} />
          <Route path="custom-hook" element={<CustomHook />} />
          <Route path="use-reducer-hook" element={<ReducerHook />} />
          <Route path="use-toggle-custom-hook" element={<ToggleCustomHook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
