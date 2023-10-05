import { minecart } from 'minecart-sdk';
import React from 'react';
import { Link } from 'react-router-dom'
import Card from '../../components/Card';

const Cart = () => {
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
        Cart {JSON.stringify(minecart.cart.getCart().items)}
      </div>

      <div className="flex justify-between gap-3">
        <Card title="Dados do comprador">
          <div className="flex gap-3">
            <img src={`https://minotar.net/body/${minecart.cart.getCart().username}/80`} />

            <div className="flex flex-col gap-3">
              <input type="text" value={minecart.cart.getCart().username || ""}/>

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