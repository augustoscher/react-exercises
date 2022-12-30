import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import AdvancedFilters from 'components/AdvancedFilters'

const ReducerHook = () => (
  <Base>
    <ExampleDescription
      title="useContext + useReducer hook example"
      description="Use context and useReducer hooks"
      tags={['useContext', 'useReducer']}
      links={['https://www.robinwieruch.de/react-hooks-fetch-data/']}
    />

    <hr />

    <AdvancedFilters />
  </Base>
)

export default ReducerHook
