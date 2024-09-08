import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Category, minecart } from "minecart-sdk";
import { getCategories } from "./keys";

export const useGetCategories = (
  options?: UseQueryOptions<Category[], AxiosError>
) =>
  useQuery({
    queryKey: getCategories(),
    queryFn: async () => {
      return minecart.categories.all().catch((_) => {
        return [];
      });
    },
    ...options,
  });
