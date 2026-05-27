import { Card, CardContent, CardHeader } from "@Minecart/components/Card";

const OrderFailure = () => {
  return (
    <Card>
      <CardHeader className="text-2xl font-bold text-red-500">
        PAGAMENTO RECUSADO
      </CardHeader>

      <CardContent className="space-y-3 text-gray-600">
        <p>Ei, seu pagamento foi recusado!</p>
        <p>Infelizmente seu pagamento não foi aprovado.</p>
        <p>Caso tenha alguma duvida, entre em contato com a administração.</p>
      </CardContent>
    </Card>
  );
};

export default OrderFailure;
