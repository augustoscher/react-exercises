import { render, screen } from '@testing-library/react'
import App from './App'

test('renders examples links', () => {
  render(<App />)
  const linkElement = screen.getByText(/Fetch with hooks/i)
  expect(linkElement).toBeInTheDocument()
})
