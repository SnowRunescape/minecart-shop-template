import { StoreContext } from "./../../contexts/providers/Store";
import { useContext } from "react";

const useMenu = () => {
  const store = useContext(StoreContext);

  const menu = [
    {
      name: "Inicio",
      image: store?.customization.menu.home.image || "",
      url: "/",
    },
    {
      name: "Loja",
      image: store?.customization.menu.shop.image || "",
      url: "/shop",
    },
    {
      name: "Regras",
      image: store?.customization.menu.rules.image || "",
      url: "/rules",
    },
    {
      name: "Equipe",
      image: store?.customization.menu.team.image || "",
      url: "/team",
    }
  ]

  return menu
}

export default useMenu;