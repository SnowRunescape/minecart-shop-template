import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { AxiosError } from "axios";
import { getTeam } from "./keys";
import { Team, minecart } from "minecart-sdk";

export const useGetTeam = (
  options?: UseQueryOptions<Team[], AxiosError>
) => useQuery(getTeam(), () => minecart.team.all(), options);