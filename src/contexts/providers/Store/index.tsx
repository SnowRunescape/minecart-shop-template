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


  const rootStyles  = {
    '--color0': store?.customization.colors['--color0'],
    '--color1': store?.customization.colors['--color1'],
    '--color2': store?.customization.colors['--color2'],
  }

  return (
    <StoreContext.Provider value={store}>
      <div style={rootStyles as React.CSSProperties}>
        {children}
      </div>
    </StoreContext.Provider>
  );
}