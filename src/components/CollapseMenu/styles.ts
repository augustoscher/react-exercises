import styled from 'styled-components'
import media from 'styled-media-query'

export const CollapseWrapper = styled.div`
  z-index: 500;
  position: fixed;
  left: 0;
  right: 0;
  background: white;

  ${media.greaterThan('large')`
    display: none;
  `}
`

export const NavLinks = styled.ul`
  list-style-type: none;
  padding: 1em 0.5em;

  & li {
    text-align: center;
    padding: 0.4em 0;
  }
`
