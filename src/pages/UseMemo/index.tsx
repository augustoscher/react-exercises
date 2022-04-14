import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import Hash from 'components/Hash'

const UseRef = () => (
  <Base>
    <ExampleDescription
      title="The useMemo"
      description="useMemo does something similar of useEffect. Let’s say you have computation heavy methods, and only want to run them when their parameters change, not every time the component updates. useMemo returns a memoized result, and executes the callback function only when parameters change."
      tags={['useMemo', 'hooks']}
      links={[
        'https://www.newline.co/@bespoyasov/how-to-use-usememo-hook-with-typescript--61618622'
      ]}
    />

    <hr />

    <Hash />
  </Base>
)

export default UseRef
