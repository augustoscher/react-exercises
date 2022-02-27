import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  height: 100vh;

  ${media.greaterThan('medium')`
    width: 90%;
    margin: 0 auto;
  `};
`
