import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { minecart, Store } from "minecart-sdk";
import { getStore } from "./keys";

export const useGetStore = (options?: UseQueryOptions<Store, AxiosError>) =>
  useQuery({
    queryKey: getStore(),
    queryFn: () => {
      return minecart.store.get();
    },
    ...options,
  });
