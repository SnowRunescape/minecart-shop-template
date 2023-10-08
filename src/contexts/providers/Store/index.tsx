import { createContext, ReactNode } from 'react'
import { useGetStore } from '../../../services/store';
import { Store } from 'minecart-sdk';

export const StoreContext = createContext<Store | undefined>(undefined);

export const StoreProvider = (props: {
  children: ReactNode
}) => {
  const { data: store, isLoading } = useGetStore();
  const { children } = props;

  if (isLoading) {
    return "Carregando..";
  }

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
}