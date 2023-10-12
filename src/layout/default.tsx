import useMenu from './../hooks/useMenu';
import Menu from './../components/Menu';
import { Outlet } from 'react-router-dom';

const Default = () => {
  const menu = useMenu();

  return (
      <div className="flex flex-col gap-10">
        <header className="flex gap-3 bg-primary p-3">
          {menu.map(menu => <Menu key={menu.name} menu={menu} />)}
        </header>

        <div className="container">
          <Outlet />
        </div>

        <footer className="text-center">
          Demo ® Todos os direitos reservados!
        </footer>
      </div>
  );
}

export default Default;