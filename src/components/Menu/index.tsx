import { Link } from "react-router-dom";
import { MenuProps } from "./types";

const Menu = (props: MenuProps) => {
  const { name, image, url } = props.menu;

  return (
    <Link
      to={url}
      className="flex items-center gap-2 bg-white py-2 px-4 rounded"
    >
      <img src={image} width={32} />
      {name}
    </Link>
  );
};

export default Menu;
