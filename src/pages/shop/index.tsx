import { Card, CardContent } from "@Minecart/components/Card";
import CategoriesBar from "@Minecart/components/CategoriesBar";
import NotFound from "@Minecart/components/NotFound";
import ProductComponent from "@Minecart/components/product";
import useDocumentTitle from "@Minecart/hooks/useDocumentTitle";
import useSideBar from "@Minecart/hooks/useSideBar";
import { useGetCategories } from "@Minecart/services/categories";
import { useGetProducts } from "@Minecart/services/products";
import { useMemo } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const Servers = () => {
  useDocumentTitle("Loja");

  const { data: productsData, isPending: isProductsPending } = useGetProducts();
  const { data: categoriesData, isPending: isCategoriesPending } =
    useGetCategories();
  const { server } = useParams();
  const [searchParams] = useSearchParams();

  const products = useMemo(() => {
    if (!productsData) {
      return [];
    }

    return productsData?.filter((product) => {
      return (
        product.server_id == Number(server) &&
        (!searchParams.get("category") ||
          product.categories.includes(Number(searchParams.get("category"))))
      );
    });
  }, [searchParams, productsData]);

  const categories = useMemo(() => {
    if (!productsData || !categoriesData) {
      return [];
    }

    return categoriesData?.filter((category) => {
      return productsData?.find(
        (product) =>
          product.server_id == Number(server) &&
          product.categories.includes(category.id)
      );
    });
  }, [productsData, categoriesData]);

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
        <CardContent className="grid grid-cols-2 w-full gap-4">
          {products.map((product) => (
            <ProductComponent key={product.id} product={product} />
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default Servers;
