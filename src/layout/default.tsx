import Menu from "@Minecart/components/Menu";
import SideBar from "@Minecart/components/SideBar";
import { SideBarContext } from "@Minecart/contexts/providers/SideBar";
import { useStore } from "@Minecart/contexts/providers/Store";
import useMenu from "@Minecart/hooks/useMenu";
import { cn } from "@Minecart/lib/utils";
import { useContext } from "react";
import { Outlet } from "react-router-dom";

const Default = () => {
  const store = useStore();
  const menu = useMenu();

  const { isSideBarVisible } = useContext(SideBarContext);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-primary shadow-lg shadow-black/10">
        <div className="container flex flex-col gap-3 py-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="min-w-0">
            <span className="block truncate text-lg font-bold text-white">
              {store?.name}
            </span>
            <span className="text-xs font-medium uppercase tracking-wide text-white/70">
              Loja oficial
            </span>
          </div>

          <nav className="flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:justify-end lg:overflow-visible lg:pb-0">
            {menu.map((menu) => (
              <Menu key={menu.name} menu={menu} />
            ))}
          </nav>
        </div>
      </header>

      <main
        className={cn(
          "container grid flex-1 grid-cols-1 gap-6 py-6",
          isSideBarVisible && "lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)]"
        )}
      >
        <div className="min-w-0">
          <Outlet />
        </div>

        {isSideBarVisible && <SideBar />}
      </main>

      <footer className="border-t border-gray-200/80 bg-white/70 p-5 text-center text-sm text-gray-600">
        {store?.name} ® Todos os direitos reservados!
      </footer>
    </div>
  );
};

export default Default;
