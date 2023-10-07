import { minecart } from 'minecart-sdk';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Card from '../../components/Card';
import { getBodyByUsername } from '../../helpers/minecraft';

const Cart = () => {
  const [items, setItems] = useState(minecart.cart.getCart().items);

  const username = minecart.cart.getCart().username || "";

  const handleRemoveProduct = (productId: number) => {
    minecart.cart.removeProduct(productId);
    setItems(minecart.cart.getCart().items);
  };

  const handleAmountChange = (productId: number, event) => {
    minecart.cart.updateAmountProduct(productId, event.target.value);
    setItems(minecart.cart.getCart().items);
  }

  if (!minecart.cart.getCart().username?.length) {
    window.location.pathname = "/cart/profile"
    return null;
  }

  if (!minecart.cart.getCart().items.length) {
    return "cart vazio";
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="border">
        <table className="table">
          <thead>
            <tr>
              <td>#</td>
              <td>Produto</td>
              <td>Quantidade</td>
              <td>Valor</td>
              <td></td>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>Produto</td>
                  <td><input type="number" value={item.amount} onChange={event => handleAmountChange(item.id, event)} /></td>
                  <td>R$ 20,00</td>
                  <td><a onClick={() => handleRemoveProduct(item.id)}>remover</a></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between gap-3">
        <Card title="Dados do comprador">
          <div className="flex gap-3">
            <img src={getBodyByUsername(username)} />

            <div className="flex flex-col gap-3">
              <input type="text" value={username} disabled />

              <Link to="/cart/profile" className="bg-gray-100 text-center">Alterar Dados</Link>

              <p>Os produtos serão entregues APENAS para o jogador informado acima.</p>

              <small>
                Pagamentos via <b>cartão de crédito</b>, ou <b>saldo em conta</b> em um dos serviços acima, geralmente são aprovados <b>imediatamente</b>.
                Boletos podem demorar até <b>2 dias úteis</b>, após o pagamento, para serem aprovados.
              </small>
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-3">
          <Card title="Cupom de desconto">
            <div className="flex flex-col gap-3">
              <label>Tem um cupom de desconto?</label>

              <input type="text" placeholder="Cupom de desconto" />

              <div className="flex justify-end">
                <button type="submit" className="btn btn-success uppercase">Aplicar</button>
              </div>
            </div>
          </Card>

          <Card title="Resumo da compra">
            <p>Subtotal</p>
            <p>Desconto obtido</p>
            <p>Total a pagar</p>

            <button className="btn btn-success uppercase w-full">Confirmar pagamento</button>

            <div>
              Ao efetuar o pagamento, você concorda com nossos <Link to="#" className="link">termos de uso</Link> e com a nossa <Link to="#" className="link">política de reembolso</Link>.
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cart;