import Card from '@Minecart/components/Card';
import CategoriesBar from '@Minecart/components/CategoriesBar';
import NotFound from '@Minecart/components/NotFound';
import ProductComponent from '@Minecart/components/product';
import useDocumentTitle from '@Minecart/hooks/useDocumentTitle';
import { useGetProducts } from '@Minecart/services/products';

const Servers = () => {
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

export default Servers;