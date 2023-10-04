import React from 'react'
import { ProductProps } from './types';
import { minecart } from 'minecart-sdk';

const Product = (props: ProductProps) => {
  const { product } = props;

  const addProduct = (id: number) => {
    alert("Produto adicionado ao carrinho de compra");
    minecart.cart.addProduct(id);
  }

  return (
    <div className="relative bg-gray-100">
      <span className="absolute bg-green-400 p-1 rounded-bl-lg top-0 right-0">R$ 20,00</span>

      <div>
        <img src={product.archive_url} />

        <div className="flex flex-col gap-2">
          <button className="bg-green-400">Detalhes</button>
          <button className="bg-gray-800" onClick={() => addProduct(product.id)}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default Product;