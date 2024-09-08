import Card from "@Minecart/components/Card";
import CategoriesBar from "@Minecart/components/CategoriesBar";
import NotFound from "@Minecart/components/NotFound";
import ProductComponent from "@Minecart/components/product";
import useDocumentTitle from "@Minecart/hooks/useDocumentTitle";
import { useGetCategories } from "@Minecart/services/categories";
import { useGetProducts } from "@Minecart/services/products";
import { useParams } from "react-router-dom";

const Servers = () => {
  useDocumentTitle("Loja");

  const { data: products, isLoading: isProductsLoading } = useGetProducts();
  const { data: categories, isLoading: isCategoriesLoading } =
    useGetCategories();
  const { server } = useParams();

  if (isProductsLoading || isCategoriesLoading) {
    return "carregando";
  }

  const productsFiltered = products?.filter(
    (product) => product.shop_server == server
  );

  if (!productsFiltered?.length) {
    return (
      <NotFound
        title="Nenhum produto publicada"
        description="Não foi publicado nenhum produto ate o momento!"
      />
    );
  }

  return (
    <div className="flex gap-3">
      {!!categories.length && <CategoriesBar categories={categories} />}

      <Card>
        <div className="grid grid-cols-2 w-full gap-4">
          {productsFiltered.map((product) => (
            <ProductComponent key={product.id} product={product} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Servers;
