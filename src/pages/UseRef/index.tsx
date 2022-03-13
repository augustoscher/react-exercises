import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import UseRefExample from 'components/UseRefExample'

const UseRef = () => (
  <Base>
    <ExampleDescription
      title="Component useRef hook example"
      description="Using useRef example"
      tags={['useRef', 'hooks']}
    />

    <hr />

    <UseRefExample />
  </Base>
)

export default UseRef
