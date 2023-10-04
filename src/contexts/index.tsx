import React, { ReactNode } from 'react'
import ReactQueryProvider from './providers/react-query';

const Providers = (props: {
  children: ReactNode
}) => {
  const { children } = props;

  return (
    <ReactQueryProvider>
      {children}
    </ReactQueryProvider>
  )
}

export default Providers;