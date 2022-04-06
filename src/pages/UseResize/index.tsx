import useResize from 'hooks/UseResize'
import useMouse from 'hooks/UseMouse'

import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'

const UseRef = () => {
  const { size } = useResize({ width: 0, heigth: 0 })
  const { mousePosition } = useMouse({})

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
    </Base>
  )
}
export default UseRef
