import React from 'react';
import ProductComponent from '../../components/product';
import CategoriesBar from '../../components/CategoriesBar';
import { useGetProducts } from '../../services/products';
import NotFound from '../../components/NotFound';

const Shop = () => {
  const {data: products, isLoading} = useGetProducts();

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
      <CategoriesBar categories={[]} />

      <div className="flex flex-wrap gap-4">
        {products.map(product => <ProductComponent key={product.id} product={product} />)}
      </div>
    </div>
  );
}

export default Shop;