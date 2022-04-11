import Base from 'templates/Base'
import ExampleDescription from 'components/ExampleDescription'
import AccessDomUseRef from 'components/AccessDomUseRef'
import MutableUseRef from 'components/MutableUseRef'
import CounterUseRef from 'components/CounterUseRef'

import * as S from './styles'

const UseRef = () => (
  <Base>
    <ExampleDescription
      title="The useRef hook could be used to access a DOM element, like this example"
      description="Using useRef example"
      tags={['useRef', 'hooks']}
      link="https://fettblog.eu/typescript-react/hooks/#useref"
    />
    <S.Divider />

    <AccessDomUseRef />
    <S.Divider />

    <MutableUseRef />
    <S.Divider />

    <CounterUseRef />
    <S.Divider />
  </Base>
)

export default UseRef
