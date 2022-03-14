import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import AccessDomUseRef from 'components/AccessDomUseRef'
import MutableUseRef from 'components/MutableUseRef'

const UseRef = () => (
  <Base>
    <ExampleDescription
      title="The useRef hook could be used to access a DOM element, like this example"
      description="Using useRef example"
      tags={['useRef', 'hooks']}
    />

    <hr />

    <AccessDomUseRef />
    <MutableUseRef />
  </Base>
)

export default UseRef
