import styled from 'styled-components'

export const FeaturedCardWrapper = styled.div`
  display: grid;
  padding: 0.8rem 0;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 0.8rem;
`

export const FeaturedCard = styled.div`
  border: 1px solid #888888;
  border-radius: 0.2rem;
  height: 150px;
  padding: 1rem;
  box-sizing: border-box;

  & h4 {
    margin-top: 0;
  }
`
