import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

type SideBarState = {
  isSideBarVisible: boolean;
  setIsSideBarVisible: Dispatch<SetStateAction<boolean>>;
};

export const SideBarContext = createContext<SideBarState>({} as SideBarState);

export const SideBarProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);

  return (
    <SideBarContext.Provider value={{ isSideBarVisible, setIsSideBarVisible }}>
      {children}
    </SideBarContext.Provider>
  );
};
