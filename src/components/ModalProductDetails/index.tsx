import RichText from "../../components/RichText";
import { ModalProductDetailsProps } from "./types";
import Swal from 'sweetalert2';

const ModalProductDetails = (props: ModalProductDetailsProps) => {
  const { product } = props;

  return (
    <div>
      <h2 className="font-bold text-left text-black">{product.name}</h2>

      <hr className="my-2" />

      <RichText html={product.description} />

      <hr className="my-2" />

      <div className="text-right">
        <button className="btn" onClick={() => Swal.close()}>Fechar</button>
      </div>
    </div>
  );
}

export default ModalProductDetails;