import MenuItem, { MenuItemProps } from '../MenuItem'

import * as S from './styles'

type MenuProps = {
  items: MenuItemProps[]
}

const Menu = ({ items }: MenuProps) => (
  <S.List>
    <nav>
      {items.map((item, idx) => (
        <li key={idx}>
          <MenuItem {...item} />
        </li>
      ))}
    </nav>
  </S.List>
)

export default Menu
