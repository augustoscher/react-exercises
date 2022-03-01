import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import SearchForm from 'components/SearchForm'

const CustomHook = () => (
  <Base>
    <ExampleDescription
      title="Generic Custom Hook to fetch data"
      description="Using generic custom hook to fetch data from APIs"
      tags={['useState', 'useEffect', 'custom hooks', 'fetch']}
      link="https://www.robinwieruch.de/react-hooks-fetch-data/"
    />

    <hr />

    <SearchForm />
  </Base>
)

export default CustomHook
