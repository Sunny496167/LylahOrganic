import React from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const ProductsGrid = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <Link
          to={`/products/${product.id}`} key={product.id} className="group">
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductsGrid;