import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { AxiosError } from "axios";
import { getProducts } from "./keys";
import { minecart, Product } from "minecart-sdk";

export const useGetProducts = (
  options?: UseQueryOptions<Product[], AxiosError>
) => useQuery(getProducts(), () => minecart.products.all(), options);