import { useGetStore } from "@Minecart/services/store";
import { minecart, Store } from "minecart-sdk";
import { createContext, ReactNode, useContext } from "react";

const StoreContext = createContext<Store | undefined>(undefined);

export const StoreProvider = (props: { children: ReactNode }) => {
  minecart.setApiKey("Minecart");

  const { data: store, isLoading } = useGetStore();
  const { children } = props;

  if (isLoading) {
    return "Carregando..";
  }

  const rootStyles = {
    "--color0": store?.customization.colors["--color0"],
    "--color1": store?.customization.colors["--color1"],
    "--color2": store?.customization.colors["--color2"],
  };

  return (
    <StoreContext.Provider value={store}>
      <div
        className="min-h-screen bg-background"
        style={rootStyles as React.CSSProperties}
      >
        {children}
      </div>
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
