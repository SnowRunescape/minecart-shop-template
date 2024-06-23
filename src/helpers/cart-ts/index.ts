import { Item, cart } from "cart-ts";
import { Product } from "minecart-sdk";

export const addCart = (product: Product) => {
  cart.add(translateProductToCartTs(product));
}

const translateProductToCartTs = (product: Product): Item => {
  const { id, value, ...rest } = product;

  return {
    id,
    price: parseFloat(value),
    quantity: 1,
    ...rest
  }
}