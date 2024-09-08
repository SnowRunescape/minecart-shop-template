import { useGetGateways } from "@Minecart/services/gateways";
import { cart } from "cart-ts";
import { Gateway, minecart } from "minecart-sdk";
import Swal from "sweetalert2";
import useLocalStorageState from "use-local-storage-state";

const ModalPaymentsGateways = () => {
  const { data: gateways, isLoading } = useGetGateways();

  const [username] = useLocalStorageState("minecart-store-username", {
    defaultValue: "",
  });

  const checkout = async (gateway: Gateway) => {
    const items = cart.list().map((item) => ({
      id: Number(item.id),
      amount: item.quantity,
    }));

    const { url } = await minecart.payment.create({
      gateway,
      username,
      items,
    });

    cart.clean();

    window.location.href = url;
  };

  if (isLoading) {
    return "Carregando meios de pagamento...";
  }

  if (!gateways || gateways?.length < 1) {
    return "nenhum meio de pagamento configurado";
  }

  return (
    <div>
      <h2 className="font-bold text-left text-black">QUASE FINALIZADO!</h2>

      <hr className="my-2" />

      <p>Para continuar, escolha o método de pagamento abaixo:</p>

      <div className="flex justify-center flex-wrap gap-3">
        {gateways.map((gateway) => (
          <div
            key={gateway}
            className="flex bg-gray-100 rounded p-3 cursor-pointer"
            onClick={() => checkout(gateway)}
          >
            <img
              src={`https://cdn.minecart.com.br/assets/img/payments/${gateway.toLowerCase()}.png`}
              style={{
                height: 30,
              }}
            />
          </div>
        ))}
      </div>

      <hr className="my-2" />

      <div className="text-right">
        <button className="btn btn-danger" onClick={() => Swal.close()}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default ModalPaymentsGateways;
