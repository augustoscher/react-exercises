import { useState } from 'react'
import MenuItem, { MenuItemProps } from '../MenuItem'
import CollapseMenu from 'components/CollapseMenu'

import * as S from './styles'

type MenuProps = {
  items: MenuItemProps[]
}

const Menu = ({ items }: MenuProps) => {
  const [isOpenMenu, setOpenMenu] = useState(false)

  const handleClick = () => {
    setOpenMenu(!isOpenMenu)
  }

  return (
    <S.Wrapper>
      <S.Nav>
        <S.NavContainer>
          <S.Logo href="/">HOME</S.Logo>
          <S.List>
            {items.map((item, idx) => (
              <S.ListItem key={idx}>
                <MenuItem {...item} />
              </S.ListItem>
            ))}
          </S.List>
          <S.Container>
            <S.BurgerButton
              role="button"
              onClick={handleClick}
              menuOpened={isOpenMenu}
            >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </S.BurgerButton>
          </S.Container>
        </S.NavContainer>
      </S.Nav>
      <CollapseMenu
        collapsed={isOpenMenu}
        handleClick={handleClick}
        links={items}
      />
    </S.Wrapper>
  )
}

export default Menu
