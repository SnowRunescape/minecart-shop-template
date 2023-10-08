import React, { ReactNode } from 'react'
import ReactQueryProvider from './providers/react-query';
import { StoreProvider } from './providers/Store';

const Providers = (props: {
  children: ReactNode
}) => {
  const { children } = props;

  return (
    <ReactQueryProvider>
      <StoreProvider>
        {children}
      </StoreProvider>
    </ReactQueryProvider>
  )
}

export default Providers;