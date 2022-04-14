import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import CountUpdater from 'components/CountUpdater'

const ReactMemoExample = () => (
  <Base>
    <ExampleDescription
      title="Prevent re-renders on React functional components with React.memo()"
      description="memoization"
      tags={['React.memo()']}
      links={[
        'https://linguinecode.com/post/prevent-re-renders-react-functional-components-react-memo'
      ]}
    />

    <hr />

    <CountUpdater />
  </Base>
)

export default ReactMemoExample
