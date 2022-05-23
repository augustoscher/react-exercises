import styled from 'styled-components'

export const FeaturedCardWrapper = styled.div`
  display: grid;
  padding: 0.8rem 0;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.5rem;
`

export const FeaturedCard = styled.div`
  --x-px: calc(var(--x) * 1px);
  --y-px: calc(var(--y) * 1px);
  --border: 2px;
  background: rgba(255, 255, 255, 0.125);
  border-radius: 0.5rem;
  box-sizing: border-box;

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    inset: 0px;
    border-radius: inherit;
    background: radial-gradient(
      800px circle at var(--x-px) var(--y-px),
      rgba(255, 255, 255, 0.3),
      transparent 40%
    );
  }

  &::before {
    z-index: 1;
  }

  &::after {
    opacity: 0;
    z-index: 2;
    transition: opacity 0.4s ease;
  }

  &:hover:after {
    opacity: 1;
  }
`

export const Link = styled.a`
  background: #131315;
  border-radius: inherit;
  color: white;
  text-decoration: none;
  z-index: 1;
  /* position: absolute; */
  inset: var(--border);
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-row-gap: 0.5rem;
  padding: 1rem;
`
