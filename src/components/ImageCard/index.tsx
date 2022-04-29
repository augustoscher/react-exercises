import * as S from './styles'

type ImageCardProps = {
  title: string
  src: string
  alt: string
}

const ImageCard = ({ title, src, alt }: ImageCardProps) => (
  <S.Wrapper>
    <img src={src} alt={alt} />
    <h3>{title}</h3>
  </S.Wrapper>
)

export default ImageCard
