import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`

export const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`
