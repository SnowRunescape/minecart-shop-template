import { Card, CardContent, CardHeader } from "@Minecart/components/Card";
import ModalPaymentsGateways from "@Minecart/components/ModalPaymentsGateways";
import NotFound from "@Minecart/components/NotFound";
import { queryClient } from "@Minecart/contexts/providers/react-query";
import { getBodyByUsername } from "@Minecart/helpers/minecraft";
import { moneyFormat } from "@Minecart/helpers/utils";
import useDocumentTitle from "@Minecart/hooks/useDocumentTitle";
import useSideBar from "@Minecart/hooks/useSideBar";
import { QueryClientProvider } from "@tanstack/react-query";
import { cart } from "cart-ts";
import { t } from "i18next";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useLocalStorageState from "use-local-storage-state";

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
  };

  if (!username.length) {
    return <Navigate to="/cart/profile" />;
  }

  if (!items.length) {
    return (
      <NotFound
        title="Carrinho vazio"
        description="Adicione produtos na loja para continuar sua compra."
      />
    );
  }

  const selectPaymentGateway = () => {
    withReactContent(Swal).fire({
      showConfirmButton: false,
      html: (
        <QueryClientProvider client={queryClient}>
          <ModalPaymentsGateways />
        </QueryClientProvider>
      ),
    });
  };

  return (
    <div className="page-stack">
      <div>
        <h1 className="section-title">Carrinho</h1>
        <p className="mt-1 text-sm text-gray-500">
          Revise os itens antes de finalizar o pagamento.
        </p>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="table min-w-[720px] bg-white">
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
                    <td className="font-semibold text-gray-500">{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <img src={item.archive.url} className="h-11 w-11 object-contain" />

                        <div className="flex flex-col text-left">
                          <span className="font-bold text-gray-950">{item.name}</span>
                          <small className="text-gray-500">ServerName</small>
                        </div>
                      </div>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="max-w-24"
                        value={item.quantity}
                        onChange={(event) => handleAmountChange(item.id, event)}
                      />
                    </td>
                    <td className="font-semibold">R$ {moneyFormat(item.price)}</td>
                    <td>
                      <button
                        type="button"
                        className="grid h-9 w-9 place-items-center rounded-lg border border-red-100 bg-red-50 transition hover:bg-red-100"
                        onClick={() => handleRemoveProduct(item.id)}
                        aria-label="Remover produto"
                      >
                        <img
                          src="https://cdn.minecart.com.br/assets/img/icons/icon-delete.svg"
                          className="h-5 w-5"
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
        <Card>
          <CardHeader>Dados do comprador</CardHeader>

          <CardContent className="flex flex-col gap-5 sm:flex-row">
            <div className="grid h-56 w-full place-items-center rounded-lg bg-gray-50 sm:w-36">
              <img src={getBodyByUsername(username)} className="max-h-52" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <input type="text" value={username} disabled />

              <Link to="/cart/profile" className="btn btn-primary text-center">
                Alterar Dados
              </Link>

              <p>
                Os produtos serão entregues APENAS para o jogador informado
                acima.
              </p>

              <small>
                Pagamentos via <b>cartão de crédito</b>, ou{" "}
                <b>saldo em conta</b> em um dos serviços acima, geralmente são
                aprovados <b>imediatamente</b>. Boletos podem demorar até{" "}
                <b>2 dias úteis</b>, após o pagamento, para serem aprovados.
              </small>
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col gap-5">
          <Card>
            <CardHeader>{t("phrases.discountCoupon")}</CardHeader>

            <CardContent className="flex flex-col gap-3">
              <label>{t("phrases.hasDiscountCoupon")}</label>

              <input type="text" placeholder={t("phrases.discountCoupon")} />

              <div className="flex justify-end">
                <button type="submit" className="btn btn-success uppercase">
                  {t("words.apply")}
                </button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>Resumo da compra</CardHeader>

            <CardContent className="flex flex-col gap-3">
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

              <button
                className="btn btn-success uppercase w-full"
                onClick={selectPaymentGateway}
              >
                Confirmar pagamento
              </button>

              <div className="text-center text-sm text-gray-500">
                Ao efetuar o pagamento, você concorda com nossos{" "}
                <Link to="#" className="text-link">
                  termos de uso
                </Link>{" "}
                e com a nossa{" "}
                <Link to="#" className="text-link">
                  política de reembolso
                </Link>
                .
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Cart;
