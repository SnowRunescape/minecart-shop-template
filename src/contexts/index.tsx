import { ReactNode } from 'react'
import ReactQueryProvider from './providers/react-query';
import { StoreProvider } from './providers/Store';
import { SideBarProvider } from './providers/SideBar';

const Providers = (props: {
  children: ReactNode
}) => {
  const { children } = props;

  return (
    <ReactQueryProvider>
      <StoreProvider>
        <SideBarProvider>
          {children}
        </SideBarProvider>
      </StoreProvider>
    </ReactQueryProvider>
  )
}

export default Providers;