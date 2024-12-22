import { ReactNode } from "react";
import ReactQueryProvider from "./providers/react-query";
import { RumProvider } from "./providers/Rum";
import { SideBarProvider } from "./providers/SideBar";
import { StoreProvider } from "./providers/Store";

const Providers = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <ReactQueryProvider>
      <StoreProvider>
        <RumProvider>
          <SideBarProvider>{children}</SideBarProvider>
        </RumProvider>
      </StoreProvider>
    </ReactQueryProvider>
  );
};

export default Providers;
