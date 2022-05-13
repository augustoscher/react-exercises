import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.header``

export const Nav = styled.nav`
  display: flex;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  background-color: white;
  padding: 1.2rem;
  justify-content: space-between;

  ${media.greaterThan('medium')`
    align-items: center;
  `};
`

export const Container = styled.div`
  width: 60px;
`

export const Logo = styled.a`
  padding: 0.4rem 2rem 0.4rem 0.4rem;
  text-decoration: none;
  cursor: pointer;

  ${media.lessThan('medium')`
    padding: 0.4rem;
  `};
`

type MenuProps = {
  isOpenMenu: boolean
}

const menuModifiers = {
  closed: () => css`
    max-height: 0;
    overflow: hidden;
  `,
  opened: () => css`
    transform: translateY(5%);
    transition: transform 0.5s ease-in-out;
  `
}

export const Menu = styled.div<MenuProps>`
  ${({ isOpenMenu }) => css`
    display: flex;
    width: 100%;

    ${media.lessThan('medium')`
      ${isOpenMenu ? menuModifiers.opened : menuModifiers.closed}
    `};
  `}
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
    flex-direction: column;
    align-items: center;
    padding: 20px;
  `};
`

export const ListItem = styled.li`
  padding: 0.4rem;
`

type BurgerButtonProps = {
  menuOpened: boolean
}

const modifiers = {
  collapsed: () => css`
    background: red;
  `,
  normal: () => css`
    background: #0e2431;
  `
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

      span {
        display: block;
        height: 3px;
        width: 100%;
        border-radius: 10px;
        ${menuOpened ? modifiers.normal : modifiers.collapsed}
      }
    `}
  `}
`
