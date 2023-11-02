import { ProductProps } from './types';
import { minecart } from 'minecart-sdk';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
import ModalProductDetails from '../ModalProductDetails';
import ModalProductAdded from '../ModalProductAdded';
import { useNavigate } from 'react-router-dom';
import { moneyFormat } from '../../helpers/utils';

const Product = (props: ProductProps) => {
  const navigate = useNavigate();
  const { product } = props;

  const openDetails = () => {
    withReactContent(Swal).fire({
      showConfirmButton: false,
      html: <ModalProductDetails product={product} />,
    });
  }

  const AddProduct = () => {
    minecart.cart.addProduct(product.id);

    withReactContent(Swal).fire({
      showConfirmButton: false,
      html: <ModalProductAdded product={product} navigate={navigate} />,
    });
  }

  return (
    <div className="relative bg-gray-100 rounded">
      <span className="absolute bg-green-400 p-1 text-white rounded-bl-lg top-0 right-0 rounded-tr">R$ {moneyFormat(product.value)}</span>

      <div>
        <div className="text-center mx-auto mt-5 width-[60%]" style={{
          maxWidth: '60%',
          height: 300,
          maxHeight: '189.75px',
        }}>
          <img
            src={product.archive_url}
            className="relative max-h-full inline top-2/4 translate-y-[-50%]"
          />
        </div>

        <div className="flex items-center justify-center text-xl" style={{
          height: 64
        }}>
          {product.name}
        </div>

        <div className="flex flex-col">
          <button className="btn bg-gray-800" onClick={openDetails}>Detalhes</button>
          <button className="btn btn-success" onClick={AddProduct}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
}

export default Product;