import { Link } from 'react-router-dom'
import * as S from './styles'

export type MenuItemProps = {
  label: string
  path: string
}

const MenuItem = ({ label, path }: MenuItemProps) => (
  <S.Wrapper>
    <Link to={path}>{label}</Link>
  </S.Wrapper>
)

export default MenuItem
