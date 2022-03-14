import { useRef, useEffect } from 'react'

const AccessDomUseRef = () => {
  // - If possible, prefer as specific as possible. For example, HTMLDivElement is better than HTMLElement and way better than Element.
  // - Technical-wise, this returns RefObject<HTMLDivElement>
  const divRef = useRef<HTMLDivElement>(null)

  const doSomethingWith = (divRef: HTMLDivElement) => {
    console.log(`hookRef div width: ${divRef.clientWidth}`) // just reads
    console.log(`hookRef div style: ${divRef.style.border}`)
  }

  useEffect(() => {
    // Note that ref.current may be null. This is expected, because you may
    // conditionally render the ref-ed element, or you may forgot to assign it
    if (!divRef.current) throw Error('divRef is not assigned')

    // Now divRef.current is sure to be HTMLDivElement
    doSomethingWith(divRef.current)
  })

  return (
    <div style={{ border: '1px black dashed' }} ref={divRef}>
      etc
    </div>
  )
}

export default AccessDomUseRef
