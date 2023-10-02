import { minecart, Product } from 'minecart-sdk';
import React, { useMemo, useState } from 'react';
import ProductComponent from '../../components/product';

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useMemo(() => {
    const fetchProducts = async () => {
      const products = await minecart.products.all();

      setProducts(products);
    }

    fetchProducts();
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        {products.map(product => <ProductComponent key={product.id} product={product} />)}
      </div>
    </>
  );
}

export default Shop;