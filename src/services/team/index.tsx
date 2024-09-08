import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { minecart, Team } from "minecart-sdk";
import { getTeam } from "./keys";

export const useGetTeam = (options?: UseQueryOptions<Team[], AxiosError>) =>
  useQuery({
    queryKey: getTeam(),
    queryFn: () => {
      return minecart.team.all();
    },
    ...options,
  });
