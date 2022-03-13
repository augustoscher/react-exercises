import MenuItem, { MenuItemProps } from '../MenuItem'

import * as S from './styles'

type MenuProps = {
  items: MenuItemProps[]
}

const Menu = ({ items }: MenuProps) => (
  <S.Wrapper>
    <S.List>
      {items.map((item, idx) => (
        <li key={idx}>
          <MenuItem {...item} />
        </li>
      ))}
    </S.List>
  </S.Wrapper>
)

export default Menu
