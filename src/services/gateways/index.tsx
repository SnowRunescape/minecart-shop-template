import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { AxiosError } from "axios";
import { getGateways } from "./keys";
import { minecart } from "minecart-sdk";

export const useGetGateways = (
  options?: UseQueryOptions<any[], AxiosError>
) => useQuery(getGateways(), () => minecart.gateways.all(), options);