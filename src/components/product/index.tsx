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
    <div className="relative bg-gray-100 rounded">
      <span className="absolute bg-green-400 p-1 text-white rounded-bl-lg top-0 right-0 rounded-tr">R$ 20,00</span>

      <div>
        <div className="text-center mx-auto mt-5 width-[60%]" style={{
          maxWidth: '60%',
          height: 300,
          maxHeight: '189.75px',
        }}>
          <img
            src={product.archive_url}
            className="relative max-h-full inline top-2/4 translate-y-[-50%]"
          />
        </div>

        <div className="flex items-center justify-center text-xl" style={{
          height: 64
        }}>
          {product.name}
        </div>

        <div className="flex flex-col">
          <button className="btn bg-gray-800">Detalhes</button>
          <button className="btn btn-success" onClick={() => addProduct(product.id)}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default Product;