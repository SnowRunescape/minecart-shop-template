import RichText from "@Minecart/components/RichText";
import { t } from "i18next";
import Swal from 'sweetalert2';
import { ModalProductDetailsProps } from "./types";

const ModalProductDetails = (props: ModalProductDetailsProps) => {
  const { product } = props;

  return (
    <div className="text-left">
      <h2 className="text-lg font-bold text-black">{product.name}</h2>

      <hr className="my-2" />

      <RichText className="text-gray-600" html={product.description} />

      <hr className="my-2" />

      <div className="text-right">
        <button className="btn" onClick={() => Swal.close()}>
          {t("words.close")}
        </button>
      </div>
    </div>
  );
}

export default ModalProductDetails;
