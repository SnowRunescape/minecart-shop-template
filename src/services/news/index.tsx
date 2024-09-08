import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { minecart, News } from "minecart-sdk";
import { getNews } from "./keys";

export const useGetNews = (options?: UseQueryOptions<News[], AxiosError>) =>
  useQuery({
    queryKey: getNews(),
    queryFn: () => {
      return minecart.news.all();
    },
    ...options,
  });
