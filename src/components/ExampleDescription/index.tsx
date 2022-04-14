import Badge from 'components/Badge'

import * as S from './styles'

type ExampleDescriptionProps = {
  title: string
  description: string
  tags: string[]
  links?: string[]
}

const ExampleDescription = ({
  title,
  description,
  links = [],
  tags
}: ExampleDescriptionProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <p>{description}</p>
    <div>
      {tags.map((item, idx) => (
        <Badge key={idx} text={item} />
      ))}
    </div>

    {links.length > 0 &&
      links.map((item, idx) => (
        <S.LinkWrapper key={idx}>
          <a href={item} target="_blank" rel="noopener noreferrer">{`See Post ${
            idx + 1
          }`}</a>
        </S.LinkWrapper>
      ))}
  </S.Wrapper>
)

export default ExampleDescription
