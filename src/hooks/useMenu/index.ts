import { useStore } from "@Minecart/contexts/providers/Store";

const useMenu = () => {
  const store = useStore();

  const menu = [
    {
      name: "Inicio",
      image: store?.customization.menu.home.archive.url,
      url: "/",
    },
    {
      name: "Loja",
      image: store?.customization.menu.shop.archive.url,
      url: "/shop",
    },
    {
      name: "Regras",
      image: store?.customization.menu.rules.archive.url,
      url: "/rules",
    },
    {
      name: "Equipe",
      image: store?.customization.menu.team.archive.url,
      url: "/team",
    },
  ];

  return menu;
};

export default useMenu;
