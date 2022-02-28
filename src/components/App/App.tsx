import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Menu from 'components/Menu'
import Home from 'pages/Home'
import FetchHook from 'pages/FetchHook'
import CustomHook from 'pages/CustomHook'

function App() {
  return (
    <>
      <BrowserRouter>
        <Menu
          items={[
            { label: 'Fetch with hooks', path: 'fetch-hook' },
            { label: 'Custom hook', path: 'custom-hook' }
          ]}
        />

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="fetch-hook" element={<FetchHook />} />
          <Route path="custom-hook" element={<CustomHook />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
