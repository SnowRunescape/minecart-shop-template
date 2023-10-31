import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { AxiosError } from "axios";
import { getServers } from "./keys";
import { minecart, Server } from "minecart-sdk";

export const useGetServers = (
  options?: UseQueryOptions<Server[], AxiosError>
) => useQuery(getServers(), () => minecart.servers.all(), options);