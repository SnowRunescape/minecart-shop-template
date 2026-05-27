import ModalProductAdded from "@Minecart/components/ModalProductAdded";
import ModalProductDetails from "@Minecart/components/ModalProductDetails";
import { addCart } from "@Minecart/helpers/cart-ts";
import { moneyFormat } from "@Minecart/helpers/utils";
import { t } from "i18next";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ProductProps } from "./types";

const Product = (props: ProductProps) => {
  const navigate = useNavigate();
  const { product } = props;

  const openDetails = () => {
    withReactContent(Swal).fire({
      showConfirmButton: false,
      html: <ModalProductDetails product={product} />,
    });
  };

  const AddProduct = () => {
    addCart(product);

    withReactContent(Swal).fire({
      showConfirmButton: false,
      html: <ModalProductAdded product={product} navigate={navigate} />,
    });
  };

  return (
    <div className="group relative flex min-h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <span className="absolute right-3 top-3 z-10 rounded-full bg-emerald-500 px-3 py-1 text-sm font-bold text-white shadow-sm">
        R$ {moneyFormat(product.value)}
      </span>

      <div className="flex h-full flex-col">
        <div className="grid aspect-[4/3] place-items-center bg-gray-50 p-8">
          <img
            src={product.archive.url}
            className="max-h-44 object-contain transition group-hover:scale-105"
          />
        </div>

        <div className="flex min-h-20 items-center justify-center px-4 text-center text-base font-bold text-gray-950 sm:text-lg">
          {product.name}
        </div>

        <div className="mt-auto grid grid-cols-1 gap-2 border-t border-gray-100 p-3 sm:grid-cols-2">
          <button className="btn bg-gray-900 text-white hover:bg-gray-800" onClick={openDetails}>
            {t("words.details")}
          </button>
          <button className="btn btn-success" onClick={AddProduct}>
            {t("phrases.addToCard")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
