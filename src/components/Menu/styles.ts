import styled from 'styled-components'

export const Wrapper = styled.header`
  padding: 1.2rem;
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const ListItem = styled.li`
  padding: 0.4rem;
`
