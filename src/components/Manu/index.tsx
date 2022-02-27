import MenuItem from '../MenuItem'

type MenuProps = {
  items: [string]
}

const Menu = ({ items }: MenuProps) => (
  <ul>
    {items.map((item, idx) => <li key={idx}><MenuItem label={item} /></li>)}
  </ul>
)

export default Menu;
