import { Card, CardContent } from "@Minecart/components/Card";
import CategoriesBar from "@Minecart/components/CategoriesBar";
import Loading from "@Minecart/components/Loading";
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
    return <Loading title="Carregando produtos" />;
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
    <div className="page-stack">
      <div>
        <h1 className="section-title">Produtos</h1>
        <p className="mt-1 text-sm text-gray-500">
          Navegue pelos itens disponiveis e adicione ao carrinho.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        {categories && categories?.length > 0 && (
          <CategoriesBar categories={categories} />
        )}

        <Card>
          <CardContent className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductComponent key={product.id} product={product} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Servers;
