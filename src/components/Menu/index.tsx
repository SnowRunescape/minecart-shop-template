import { MenuProps } from './types';
import { Link } from 'react-router-dom';

const Menu = (props: MenuProps) => {
  const { name, image, url } = props.menu;

  return (
    <Link to={url} className="flex items-center gap-2 bg-white py-2 px-4">
      <img src={image} width={32} />
      {name}
    </Link>
  );
}

export default Menu;