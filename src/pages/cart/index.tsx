import { minecart } from 'minecart-sdk';
import React from 'react';

const Cart = () => {
  if (!minecart.cart.getCart().items.length) {
    return "cart vazio";
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="border">
        Cart {JSON.stringify(minecart.cart.getCart().items)}
      </div>

      <div className="flex justify-between gap-3">
        <div className="border">
          Dados do comprador
        </div>

        <div className="flex flex-col gap-3">
          <div className="border">
            Cupom de desconto
          </div>

          <div className="border">
            Resumo da compra
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;