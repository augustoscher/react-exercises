import React from 'react'
import * as S from './styles'

type Props = {
  children?: React.ReactNode
  mediumScreenCols?: number
  largeScreenCols?: number
}

const Grid: React.FC<Props> = ({ children }) => (
  <S.Wrapper>{children}</S.Wrapper>
)

export default Grid
