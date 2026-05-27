import Swal from 'sweetalert2';
import { ModalProductAddedProps } from "./types";

const ModalProductAdded = (props: ModalProductAddedProps) => {
  const { product, navigate } = props;

  const handleFinishOrder = () => {
    Swal.close();
    navigate("/cart");
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid h-44 w-full place-items-center rounded-lg bg-gray-50">
        <img src={product.archive.url} className="max-h-36 object-contain" />
      </div>

      <span className="text-center font-semibold text-gray-800">
        O Produto foi adicionado ao seu carrinho de compras!
      </span>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button className="btn" onClick={() => Swal.close()}>
          Continuar Comprando
        </button>
        <button className="btn btn-success" onClick={handleFinishOrder}>
          Finalizar Compra
        </button>
      </div>
    </div>
  );
}

export default ModalProductAdded;
