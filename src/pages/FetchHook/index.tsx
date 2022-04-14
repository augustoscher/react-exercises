import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import FetchItems from 'components/FetchItems'

const FetchHook = () => (
  <Base>
    <ExampleDescription
      title="Fetch Data With Hooks"
      description="Fetching API data using few react hooks"
      tags={['useState', 'useEffect', 'loading state', 'error state']}
      links={['https://www.robinwieruch.de/react-hooks-fetch-data/']}
    />

    <hr />

    <FetchItems />
  </Base>
)

export default FetchHook
