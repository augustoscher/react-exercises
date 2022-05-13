import { useState } from 'react'
import MenuItem, { MenuItemProps } from '../MenuItem'

import * as S from './styles'

type MenuProps = {
  items: MenuItemProps[]
}

const Menu = ({ items }: MenuProps) => {
  const [isOpenMenu, setOpenMenu] = useState(false)

  const handleClick = () => {
    console.log('isOpenMenu: ', isOpenMenu)
    setOpenMenu(!isOpenMenu)
  }

  return (
    <S.Wrapper>
      <S.Nav>
        <S.NavContainer>
          <S.Logo href="/">ASHDIUAHDI</S.Logo>
          <S.Menu isOpenMenu={isOpenMenu}>
            <S.List>
              {items.map((item, idx) => (
                <S.ListItem key={idx}>
                  <MenuItem {...item} />
                </S.ListItem>
              ))}
            </S.List>
          </S.Menu>
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
    </S.Wrapper>
  )
}

export default Menu
