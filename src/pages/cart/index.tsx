import Card from '@Minecart/components/Card';
import ModalPaymentsGateways from '@Minecart/components/ModalPaymentsGateways';
import { queryClient } from '@Minecart/contexts/providers/react-query';
import { getBodyByUsername } from '@Minecart/helpers/minecraft';
import { moneyFormat } from '@Minecart/helpers/utils';
import useDocumentTitle from '@Minecart/hooks/useDocumentTitle';
import useSideBar from '@Minecart/hooks/useSideBar';
import { QueryClientProvider } from '@tanstack/react-query';
import { cart } from 'cart-ts';
import { t } from 'i18next';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import useLocalStorageState from 'use-local-storage-state';

const Cart = () => {
  useDocumentTitle("Carrinho");
  useSideBar(false);

  const [items, setItems] = useState(cart.list());

  const [username] = useLocalStorageState("minecart-store-username", {
    defaultValue: "",
  });

  const handleRemoveProduct = (productId: number | string) => {
    cart.remove(productId);
    setItems(cart.list());
  };

  const handleAmountChange = (productId: number | string, event: any) => {
    cart.updateQuantity(productId, event.target.value);
    setItems(cart.list());
  }

  if (!username.length) {
    return <Navigate to="/cart/profile" />
  }

  if (!items.length) {
    return "cart vazio";
  }

  const selectPaymentGateway = () => {
    withReactContent(Swal).fire({
      showConfirmButton: false,
      html: <QueryClientProvider client={queryClient}>
        <ModalPaymentsGateways />
      </QueryClientProvider>,
    });
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="border">
        <table className="table bg-white">
          <thead>
            <tr>
              <td>#</td>
              <td>{t("words.product")}</td>
              <td>{t("words.quantity")}</td>
              <td>{t("words.value")}</td>
              <td></td>
            </tr>
          </thead>

          <tbody>
            {items.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex gap-2 items-center">
                      <img src={item.archive.url} className="w-[32px]" />

                      <div className="flex flex-col text-left">
                        <span className="font-bold">{item.name}</span>
                        <small className="text-gray-500">ServerName</small>
                      </div>
                    </div>
                  </td>
                  <td><input type="number" value={item.quantity} onChange={event => handleAmountChange(item.id, event)} /></td>
                  <td>R$ {moneyFormat(item.price)}</td>
                  <td>
                    <img
                      src="https://cdn.minecart.com.br/assets/img/icons/icon-delete.svg"
                      className="w-[22px]"
                      onClick={() => handleRemoveProduct(item.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-start gap-3">
        <Card title="Dados do comprador">
          <div className="flex gap-3">
            <img src={getBodyByUsername(username)} />

            <div className="flex flex-col gap-3">
              <input type="text" value={username} disabled />

              <Link to="/cart/profile" className="btn btn-primary text-center">Alterar Dados</Link>

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
                <button type="submit" className="btn btn-success uppercase">{t("words.apply")}</button>
              </div>
            </div>
          </Card>

          <Card title="Resumo da compra">
            <div className="flex flex-col gap-3">
              <div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{moneyFormat(cart.total())}</span>
                </div>

                <p>Desconto obtido</p>

                <div className="flex justify-between">
                  <span>Total a pagar</span>
                  <span className="font-bold">{moneyFormat(cart.total())}</span>
                </div>
              </div>

              <button className="btn btn-success uppercase w-full" onClick={selectPaymentGateway}>Confirmar pagamento</button>

              <div className="text-center">
                Ao efetuar o pagamento, você concorda com nossos <Link to="#">termos de uso</Link> e com a nossa <Link to="#">política de reembolso</Link>.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cart;