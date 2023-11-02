import { useContext, useEffect } from 'react';
import { SideBarContext } from '../../contexts/providers/SideBar';

const useSideBar = (visible: boolean) => {
  const {setIsSideBarVisible} = useContext(SideBarContext);

  useEffect(() => {
    setIsSideBarVisible(visible);
  });
};

export default useSideBar;