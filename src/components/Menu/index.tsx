import { Link } from "react-router-dom";
import { MenuProps } from "./types";

const Menu = (props: MenuProps) => {
  const { name, image, url } = props.menu;

  return (
    <Link
      to={url}
      className="flex shrink-0 items-center gap-2 rounded-lg bg-white/12 px-3 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white hover:text-gray-950"
    >
      <img src={image} className="h-7 w-7 rounded-md object-contain" />
      {name}
    </Link>
  );
};

export default Menu;
