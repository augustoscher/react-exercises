import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header``

export const Nav = styled.nav`
  display: flex;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  background-color: white;
  padding: 1.2rem 0;
  align-items: center;
`

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`

export const Container = styled.div`
  display: flex;
  width: 60px;
  padding: 0.4rem;
  justify-content: center;
`

export const Logo = styled.a`
  padding: 0.4rem 2rem 0.4rem 0.4rem;
  text-decoration: none;
  cursor: pointer;

  ${media.lessThan('medium')`
    padding: 0.4rem;
  `};
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;

  ${media.lessThan('medium')`
    display: none;
  `}
`

export const ListItem = styled.li`
  padding: 0.4rem;
`

type BurgerButtonProps = {
  menuOpened: boolean
}

const modifiers = {
  collapsed: () => css``,
  normal: () => css``
}

export const BurgerButton = styled.div<BurgerButtonProps>`
  ${({ menuOpened }) => css`
    ${media.lessThan('medium')`
      height: 20px;
      width: 32px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;

      & span {
        display: block;
        height: 3px;
        width: 100%;
        border-radius: 10px;
        background: black;
      }

      ${menuOpened ? modifiers.normal : modifiers.collapsed}
    `}
  `}
`
