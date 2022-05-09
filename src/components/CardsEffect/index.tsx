import * as S from './styles'

type CardProps = {
  title: string
  content: string
}

type CardsEffect = {
  cards: CardProps[]
}

const CardsEffect = ({ cards }: CardsEffect) => (
  <S.Wrapper>
    {cards.map((item, idx) => (
      <div key={idx}>{item.title}</div>
    ))}
  </S.Wrapper>
)

export default CardsEffect
