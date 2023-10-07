import { NavigateFunction } from 'react-router-dom';
import { Product } from "minecart-sdk"

export type ModalProductAddedProps = {
  product: Product,
  navigate: NavigateFunction,
}