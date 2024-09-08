import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Gateway, minecart } from "minecart-sdk";
import { getGateways } from "./keys";

export const useGetGateways = (
  options?: UseQueryOptions<Gateway[], AxiosError>
) =>
  useQuery({
    queryKey: getGateways(),
    queryFn: () => {
      return minecart.gateways.all();
    },
    ...options,
  });
