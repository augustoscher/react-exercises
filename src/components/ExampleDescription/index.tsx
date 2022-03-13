import Badge from 'components/Badge'

import * as S from './styles'

type ExampleDescriptionProps = {
  title: string
  description: string
  tags: string[]
  link?: string
}

const ExampleDescription = ({
  title,
  description,
  link,
  tags
}: ExampleDescriptionProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <p>{description}</p>
    {tags.map((item, idx) => (
      <Badge key={idx} text={item} />
    ))}
    {!!link && <a href={link}>See post</a>}
  </S.Wrapper>
)

export default ExampleDescription
