import * as S from './styles'

type FeaturedCardProps = {
  title: string
  content: string
}

type FeaturedCardWrapperProps = {
  cards: FeaturedCardProps[]
}

export const FeaturedCardWrapper = ({ cards }: FeaturedCardWrapperProps) => (
  <S.FeaturedCardWrapper>
    {cards.map((item, idx) => (
      <FeaturedCard key={idx} {...item} />
    ))}
  </S.FeaturedCardWrapper>
)

const FeaturedCard = ({ title, content }: FeaturedCardProps) => (
  <S.FeaturedCard>
    <h4>{title}</h4>
    <span>{content}</span>
  </S.FeaturedCard>
)

export default FeaturedCard
