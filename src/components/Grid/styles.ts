import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  padding: 0.8rem 0;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 0.8rem;
  overflow: auto;
  resize: both;
`
