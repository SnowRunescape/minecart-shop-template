import React, { ReactNode } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  }
});

const ReactQueryProvider = (props: {
  children: ReactNode
}) => {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate>{children}</Hydrate>
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;