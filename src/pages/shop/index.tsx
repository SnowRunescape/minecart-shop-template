import ProductComponent from '../../components/product';
import CategoriesBar from '../../components/CategoriesBar';
import { useGetProducts } from '../../services/products';
import NotFound from '../../components/NotFound';
import Card from '../../components/Card'
import useDocumentTitle from '../../hooks/useDocumentTitle';

const Shop = () => {
  useDocumentTitle("Loja");

  const { data: products, isLoading } = useGetProducts();

  const categories = [];

  if (isLoading) {
    return "carregando";
  }

  if (!products?.length) {
    return (
      <NotFound
        title="Nenhum produto publicada"
        description="Não foi publicado nenhum produto ate o momento!"
      />
    )
  }

  return (
    <div className="flex gap-3">
      {!!categories.length && <CategoriesBar categories={categories} />}


      <Card>
        <div className="grid grid-cols-2 w-full gap-4">
          {products.map(product => <ProductComponent key={product.id} product={product} />)}
        </div>
      </Card>
    </div>
  );
}

export default Shop;