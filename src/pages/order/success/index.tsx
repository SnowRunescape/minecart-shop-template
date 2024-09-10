import { Card, CardContent, CardHeader } from "@Minecart/components/Card";

const OrderSuccess = () => {
  return (
    <Card>
      <CardHeader className="text-2xl font-bold text-green-500">
        PAGAMENTO APROVADO
      </CardHeader>

      <CardContent>
        <p>
          Ei, obrigado pela compra, gostaria de avisar que seu VIP já foi
          entregue IN-GAME!
        </p>
        <p>
          Caso tenha comprado <b>Cash</b>, utilize o comando{" "}
          <b>/resgatarcash</b>.
        </p>
        <p>Teve algum problema? entre em contato com a administração.</p>
      </CardContent>
    </Card>
  );
};

export default OrderSuccess;
