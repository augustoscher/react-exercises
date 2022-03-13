import * as S from './styles'

type BadgeProps = {
  text: string
}
const Badge = ({ text }: BadgeProps) => <S.Wrapper>{text}</S.Wrapper>

export default Badge
