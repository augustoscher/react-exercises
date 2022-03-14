import { useRef } from 'react'

const MutableUseRef = () => {
  // initialise with null, but tell TypeScript we are looking for an HTMLInputElement.
  // inputEl only can be used with input elements
  const inputEl = useRef<HTMLInputElement>(null)

  const onButtonClick = () => {
    // because inputEl can be null!
    if (inputEl && inputEl.current) {
      inputEl.current.focus()
    }
  }

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}

export default MutableUseRef
