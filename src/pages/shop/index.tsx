import Card from "@Minecart/components/Card";
import CategoriesBar from "@Minecart/components/CategoriesBar";
import NotFound from "@Minecart/components/NotFound";
import ProductComponent from "@Minecart/components/product";
import useDocumentTitle from "@Minecart/hooks/useDocumentTitle";
import useSideBar from "@Minecart/hooks/useSideBar";
import { useGetCategories } from "@Minecart/services/categories";
import { useGetProducts } from "@Minecart/services/products";
import { useMemo } from "react";
import { useParams } from "react-router-dom";

const Servers = () => {
  useDocumentTitle("Loja");

  const { data: productsData, isPending: isProductsPending } = useGetProducts();
  const { data: categoriesData, isPending: isCategoriesPending } =
    useGetCategories();
  const { server } = useParams();

  const products = useMemo(() => {
    if (!productsData) {
      return [];
    }

    return productsData?.filter((product) => product.shop_server == server);
  }, [productsData]);

  const categories = useMemo(() => {
    if (!categoriesData) {
      return [];
    }

    return categoriesData?.filter((category) => {
      return products?.find((product) => product.category == category.id);
    });
  }, [categoriesData]);

  useSideBar(!categories?.length);

  if (isProductsPending || isCategoriesPending) {
    return "carregando";
  }

  if (!products?.length) {
    return (
      <NotFound
        title="Nenhum produto publicada"
        description="Não foi publicado nenhum produto ate o momento!"
      />
    );
  }

  return (
    <div className="flex gap-3">
      {categories && categories?.length > 0 && (
        <CategoriesBar categories={categories} />
      )}

      <Card>
        <div className="grid grid-cols-2 w-full gap-4">
          {products.map((product) => (
            <ProductComponent key={product.id} product={product} />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Servers;
