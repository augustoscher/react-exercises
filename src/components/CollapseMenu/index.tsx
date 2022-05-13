import * as S from './styles'
import MenuItem from 'components/MenuItem'

type LinkProp = {
  label: string
  path: string
}

type Props = {
  handleClick: () => void
  collapsed: boolean
  links: LinkProp[]
}

const CollapseMenu = ({ handleClick, collapsed, links }: Props) => {
  if (!collapsed) {
    return (
      <S.CollapseWrapper>
        <S.NavLinks>
          {links.map((item, idx) => (
            <li key={idx}>
              <MenuItem {...item} handleClick={handleClick} />
            </li>
          ))}
        </S.NavLinks>
      </S.CollapseWrapper>
    )
  }
  return null
}

export default CollapseMenu
