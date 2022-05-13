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
    /* background: red; */
  `,
  normal: () => css`
    /* & span:nth-child(1) {
      transform: rotate(30deg);
    } */
    /* & span:nth-child(2) {
      transform: scaleY(0);
    } */
    /* & span:nth-child(3) {
      transform: rotate(-30deg);
    } */
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

      & span {
        display: block;
        height: 3px;
        width: 100%;
        border-radius: 10px;
        background: black;
      }

      /* & span:nth-child(1) {
        transform-origin: 0% 0%;
        transition: transform 0.4s ease-in-out;
      } */

      & span:nth-child(2) {
        transition: transform 0.2s ease-in-out;
      }

      /* & span:nth-child(3) {
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
      } */

      ${menuOpened ? modifiers.normal : modifiers.collapsed}
    `}
  `}
`
