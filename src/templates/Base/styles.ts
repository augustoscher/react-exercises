import styled from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-between;
`

export const Content = styled.div`
  /* width: 90%
  margin: 3.2rem auto 0 auto; */
  padding: 1.6rem;
  flex: 1 0 auto;
`

export const SectionFooter = styled.section`
  /* margin-top: 4.8rem; */
  /* padding-bottom: 1.6rem; */
  /* padding-top: 5.6rem; */
  background-color: #fff;
  /* clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%); */

  ${media.greaterThan('medium')`
    /* padding-top: calc(5.6 * 2); */
    /* clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0 100%); */
  `}
`
