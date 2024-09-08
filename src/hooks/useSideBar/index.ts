import { SideBarContext } from "@Minecart/contexts/providers/SideBar";
import { useContext, useLayoutEffect } from "react";

const useSideBar = (visible: boolean) => {
  const { setIsSideBarVisible } = useContext(SideBarContext);

  useLayoutEffect(() => {
    setIsSideBarVisible(visible);
  });
};

export default useSideBar;
