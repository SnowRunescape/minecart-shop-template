import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { AxiosError } from "axios";
import { getRules } from "./keys";
import { Rule, minecart } from "minecart-sdk";

export const useGetRules = (
  options?: UseQueryOptions<Rule[], AxiosError>
) => useQuery(getRules(), () => minecart.rules.all(), options);