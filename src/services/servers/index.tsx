import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { minecart, Server } from "minecart-sdk";
import { getServers } from "./keys";

export const useGetServers = (
  options?: UseQueryOptions<Server[], AxiosError>
) =>
  useQuery({
    queryKey: getServers(),
    queryFn: () => {
      return minecart.servers.all();
    },
    ...options,
  });
