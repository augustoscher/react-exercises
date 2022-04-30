import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 150px;
  height: 200px;
  background-color: #333;
  border-radius: 10px;
  outline: 1px solid rgba(255, 255, 255, 0.5);
  outline-offset: -8px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: auto;

  :hover {
    img {
      transform: scale(1.15);
    }
  }

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
    transition: transform 0.75s;
  }

  h3 {
    position: absolute;
    left: 15px;
    bottom: 10px;
    font-size: 20px;
    color: #a6a6a6;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  }
`
