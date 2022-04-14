import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import FormWithReducer from 'components/FormWithReducer'

const ReducerHook = () => (
  <Base>
    <ExampleDescription
      title="useReducer hook example"
      description="Use reducer hooks"
      tags={['useReducer']}
      links={['https://www.robinwieruch.de/react-hooks-fetch-data/']}
    />

    <hr />

    <FormWithReducer />
  </Base>
)

export default ReducerHook
