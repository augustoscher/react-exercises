import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import FetchPokemon from 'components/FetchPokemon'

const FetchHook = () => (
  <Base>
    <ExampleDescription
      title="Fetch Data With Hooks"
      description="Fetching API data using few react hooks"
      tags={['useState', 'useEffect']}
      link="https://www.robinwieruch.de/react-hooks-fetch-data/"
    />

    <hr />

    <FetchPokemon />
  </Base>
)

export default FetchHook
