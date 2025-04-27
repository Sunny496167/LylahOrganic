import React from 'react';
import { Link } from 'react-router-dom';
import { HeartIcon } from '@heroicons/react/outline';

const ProductCard = ({ product }) => {
  return (
    <div className="group relative">
      <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:opacity-75 transition duration-300"
        />
        <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-md hover:bg-gray-100">
          <HeartIcon className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium text-gray-900">
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </h3>
        <p className="text-sm text-gray-500">{product.description}</p>
        <p className="text-lg font-medium text-primary-600">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
