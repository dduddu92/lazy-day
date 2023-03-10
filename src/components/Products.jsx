import React from 'react';
import ProductCard from './ProductCard';
import useProducts from '../hooks/useProducts';
import Loading from './Loading';

export default function Products() {
  const {
    productsQuery: { isLoading, error, data: products },
  } = useProducts();

  return (
    <>
      {isLoading && <Loading />}
      {error && <p>{error}</p>}
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10">
        {products &&
          products
            .sort((a, b) => {
              return a.price - b.price;
            })
            .map((product) => <ProductCard key={product.id} product={product} />)}
      </ul>
    </>
  );
}
