import { RUM_DELAY } from "@Minecart/config";
import { minecart } from "minecart-sdk";
import { createContext, ReactNode, useEffect } from "react";

export const Rum = createContext(null);

export const RumProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  useEffect(() => {
    minecart.store.rum();

    const interval = setInterval(() => {
      minecart.store.rum();
    }, RUM_DELAY);

    return () => clearInterval(interval);
  }, []);

  return <Rum.Provider value={null}>{children}</Rum.Provider>;
};
