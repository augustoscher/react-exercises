import { Link } from 'react-router-dom'
import * as S from './styles'

export type MenuItemProps = {
  label: string
  path: string
  handleClick?: () => void
}

const MenuItem = ({ label, path, handleClick }: MenuItemProps) => (
  <S.Wrapper>
    <Link to={path} onClick={handleClick}>
      {label}
    </Link>
  </S.Wrapper>
)

export default MenuItem
