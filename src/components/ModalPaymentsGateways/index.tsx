import { useGetGateways } from "./../../services/gateways";
import Swal from "sweetalert2";

const ModalPaymentsGateways = () => {
  const { data: gateways, isLoading} = useGetGateways();

  if (isLoading) {
    return "Carregando meios de pagamento..."
  }

  if (!gateways || gateways?.length < 1) {
    return "nenhum meio de pagamento configurado";
  }

  return (
    <div>
      <h2 className="font-bold text-left text-black">QUASE FINALIZADO!</h2>

      <hr className="my-2" />

      <p>Para continuar, escolha o método de pagamento abaixo:</p>

      <div>
        {gateways.map(gateway => <>teste</>)}
      </div>

      <hr className="my-2" />

      <div className="text-right">
        <button className="btn btn-danger" onClick={() => Swal.close()}>Cancelar</button>
      </div>
    </div>
  );
}

export default ModalPaymentsGateways;