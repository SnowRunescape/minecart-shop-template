import { SideBarContext } from '@Minecart/contexts/providers/SideBar';
import { useContext, useEffect } from 'react';

const useSideBar = (visible: boolean) => {
  const { setIsSideBarVisible } = useContext(SideBarContext);

  useEffect(() => {
    setIsSideBarVisible(visible);
  });
};

export default useSideBar;