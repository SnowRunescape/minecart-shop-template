import { Card, CardContent, CardHeader } from "@Minecart/components/Card";

const OrderPending = () => {
  return (
    <Card>
      <CardHeader className="text-2xl font-bold text-yellow-300">
        PAGAMENTO PENDENTE
      </CardHeader>

      <CardContent className="text-gray-500">
        <p>Ei, o pagamento de sua compra está pendente!</p>
        <p>
          Se você comprou com cartão de crédito/débito ou com saldo disponivel
          em conta, sua compra sera entregue alguns minutos.
        </p>
        <p>
          Caso você tenha feito a compra por boleto, pode demorar ate 3 dias
          uteis para o seu pagamento ser processado.
        </p>
        <p>
          Você pode ver suas chaves <b className="text-black">Vip</b> utilizando
          o comando <b className="text-black">/minhaskeys</b>, e ativar usando{" "}
          <b className="text-black">/resgatarkey &lt;key&gt;</b>.
        </p>
        <p>
          Caso tenha comprado <b className="text-black">Cash</b>, utilize o
          comando <b className="text-black">/resgatarcash</b>.
        </p>
        <p>Caso tenha algum problema, entre em contato com a administração.</p>
      </CardContent>
    </Card>
  );
};

export default OrderPending;
