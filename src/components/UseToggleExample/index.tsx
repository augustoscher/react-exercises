import useToggle from 'hooks/UseToggle'

const UseToggleExample = () => {
  const [theme, toggleTheme] = useToggle('light', 'dark')

  return (
    <>
      <p>Theme: {theme}</p>
      <button name="toggle" onClick={toggleTheme}>
        Toggle theme
      </button>
    </>
  )
}

export default UseToggleExample
