import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { minecart, Rule } from "minecart-sdk";
import { getRules } from "./keys";

export const useGetRules = (options?: UseQueryOptions<Rule[], AxiosError>) =>
  useQuery({
    queryKey: getRules(),
    queryFn: () => {
      return minecart.rules.all();
    },
    ...options,
  });
