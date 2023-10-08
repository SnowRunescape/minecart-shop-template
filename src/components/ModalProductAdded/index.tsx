import { ModalProductAddedProps } from "./types";
import Swal from 'sweetalert2';

const ModalProductAdded = (props: ModalProductAddedProps) => {
  const { product, navigate } = props;

  const handleFinishOrder = () => {
    Swal.close();
    navigate("/cart");
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <img src={product.archive_url} style={{maxWidth: 180}}/>

      <span>O Produto foi adicionado ao seu carrinho de compras!</span>

      <div className="flex gap-3">
        <button className="btn" onClick={() => Swal.close()}>Continuar Comprando</button>
        <button className="btn btn-success" onClick={handleFinishOrder}>Finalizar Compra</button>
      </div>
    </div>
  );
}

export default ModalProductAdded;