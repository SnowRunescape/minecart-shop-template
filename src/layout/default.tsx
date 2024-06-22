import { useContext, useLayoutEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { SideBarContext } from '../contexts/providers/SideBar';
import Menu from './../components/Menu';
import SideBar from './../components/SideBar';
import useMenu from './../hooks/useMenu';

const Default = () => {
  const menu = useMenu();

  const { isSideBarVisible, setIsSideBarVisible } = useContext(SideBarContext);

  const location = useLocation();

  useLayoutEffect(() => {
    setIsSideBarVisible(true);
  }, [location]);

  return (
    <div className="flex flex-col gap-10">
      <header className="flex gap-3 bg-primary p-3">
        {menu.map(menu => <Menu key={menu.name} menu={menu} />)}
      </header>

      <div className="flex justify-between container gap-3">
        <div className="w-full">
          <Outlet />
        </div>

        {isSideBarVisible && <SideBar
          style={{ width: 460 }}
        />}
      </div>

      <footer className="p-3 text-center">
        Demo ® Todos os direitos reservados!
      </footer>
    </div>
  );
}

export default Default;