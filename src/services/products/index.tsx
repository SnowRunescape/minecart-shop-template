import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { minecart, Product } from "minecart-sdk";
import { getProducts } from "./keys";

export const useGetProducts = (
  options?: UseQueryOptions<Product[], AxiosError>
) => useQuery(getProducts(), () => minecart.products.all(), options);
