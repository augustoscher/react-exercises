import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import UseToggleExample from 'components/UseToggleExample'

const CustomHook = () => (
  <Base>
    <ExampleDescription
      title="Generic useToggle custom Hook example"
      description="Using generic custom hook to toggle values"
      tags={['useCallback', 'custom hook']}
    />

    <hr />

    <UseToggleExample />
  </Base>
)

export default CustomHook
