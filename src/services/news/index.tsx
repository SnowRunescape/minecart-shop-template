import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { AxiosError } from "axios";
import { getNews } from "./keys";
import { minecart, News } from "minecart-sdk";

export const useGetNews = (
  options?: UseQueryOptions<News[], AxiosError>
) => useQuery(getNews(), () => minecart.news.all(), options);