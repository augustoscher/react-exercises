import MenuItem, { MenuItemProps } from '../MenuItem'

import * as S from './styles'

type MenuProps = {
  items: MenuItemProps[]
}

const Menu = ({ items }: MenuProps) => (
  <S.Wrapper>
    <S.List>
      {items.map((item, idx) => (
        <S.ListItem key={idx}>
          <MenuItem {...item} />
        </S.ListItem>
      ))}
    </S.List>
  </S.Wrapper>
)

export default Menu
