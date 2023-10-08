import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { AxiosError } from "axios";
import { getStore } from "./keys";
import { minecart, Store } from "minecart-sdk";

export const useGetStore = (
  options?: UseQueryOptions<Store, AxiosError>
) => useQuery(getStore(), () => minecart.store.get(), options);