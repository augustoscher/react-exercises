import useResize from 'hooks/UseResize'
import useMouse from 'hooks/UseMouse'
import useMouseRighClickPosition from 'hooks/UseMouseRighClickPosition'

import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'

const UseRef = () => {
  const { size } = useResize({ width: 0, heigth: 0 })
  const { mousePosition } = useMouse({})
  const rightClickPosition = useMouseRighClickPosition({})

  return (
    <Base>
      <ExampleDescription
        title="useResize and useMouse custom hooks"
        description="Using useResize and useMouse example"
        tags={['useEffect', 'hooks']}
      />

      <hr />
      <p>Window size: {JSON.stringify(size)}</p>
      <p>Mouse: {JSON.stringify(mousePosition)}</p>
      <p>RighClick: {JSON.stringify(rightClickPosition)}</p>
    </Base>
  )
}
export default UseRef
