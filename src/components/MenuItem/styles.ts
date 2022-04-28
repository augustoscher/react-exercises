import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;

  a {
    text-decoration: none;
    color: #171616;
    transform: translateX(-0.75rem);
    transition: transform 200ms;
  }

  a::before {
    content: '#';
    display: inline-block;
    width: 0.75rem;
    color: #888888;
    opacity: 0;
    transition: opacity 200ms;
  }

  a:hover {
    transform: none;
  }

  a:hover::before {
    opacity: 1;
  }
`
