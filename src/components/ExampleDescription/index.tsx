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
    <ul>
      {tags.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
    {!!link && <a href={link}>See post</a>}
  </S.Wrapper>
)

export default ExampleDescription
