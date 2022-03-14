import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import AccessDomUseRef from 'components/AccessDomUseRef'

const UseRef = () => (
  <Base>
    <ExampleDescription
      title="The useRef hook could be used to access a DOM element, like this example"
      description="Using useRef example"
      tags={['useRef', 'hooks']}
    />

    <hr />

    <AccessDomUseRef />
  </Base>
)

export default UseRef
