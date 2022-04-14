import styled from 'styled-components'

export const Content = styled.div`
  border: 1px solid gray;
  padding: 16px;
  margin-bottom: 16px;
  min-height: 250px;
  border-radius: 4px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  height: 100%;
`

export const GridItems = styled.div`
  background: rgba(0, 0, 0, 0.12);
  padding: 16px;
  min-height: 120px;
`
