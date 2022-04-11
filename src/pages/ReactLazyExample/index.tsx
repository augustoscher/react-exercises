import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'

const ReactLazyExample = () => (
  <Base>
    <ExampleDescription
      title="Load component just when you need with React.lazy()"
      description="allows developers to block UI from rendering until a pre-determined condition is met. For example, maybe you don’t want your component to render until you click in a button."
      tags={['React.lazy', 'suspense API']}
      link="https://mcapoz.medium.com/how-to-use-react-lazy-6ff434aeed51#:~:text=lazy%3F-,React.,response%20back%20from%20an%20endpoint."
    />

    <hr />
  </Base>
)

export default ReactLazyExample
