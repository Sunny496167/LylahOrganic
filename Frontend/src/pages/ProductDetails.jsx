// src/components/products/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingBag, ChevronLeft } from 'lucide-react';
import { products } from '../utils/products';

const ProductDetails = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === parseInt(productId));

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Lylah Perfumes`;
    }
  }, [product]);

  if (!product) return <div className="container mx-auto py-12 text-center">Product not found</div>;

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <a href="/products" className="flex items-center text-gray-400 hover:text-white mb-8">
          <ChevronLeft className="h-5 w-5" />
          Back to Products
        </a>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 relative h-96 bg-gray-800 rounded-xl overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
              {product.isNew && (
                <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 text-sm font-medium uppercase rounded">
                  New Arrival
                </div>
              )}
            </div>
            <div className="col-span-1">
              <div className="aspect-square bg-gray-800 rounded-lg cursor-pointer"></div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-white">{product.name}</h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < product.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>
              <span className="text-gray-400">({product.reviewCount} reviews)</span>
            </div>

            <p className="text-xl font-bold text-amber-400">
              ₹{product.price.toFixed(2)}
              {product.originalPrice && (
                <span className="ml-3 text-gray-400 line-through text-lg">
                  ₹{product.originalPrice.toFixed(2)}
                </span>
              )}
            </p>

            <p className="text-gray-300 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border border-gray-700 rounded-lg">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-gray-400 hover:text-white"
                >
                  -
                </button>
                <span className="px-4 py-2 text-white">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-gray-400 hover:text-white"
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-amber-500 hover:bg-amber-600 text-black px-8 py-3 rounded-lg font-bold transition-colors">
                Add to Cart
              </button>
              <button className="p-3 border border-gray-700 rounded-lg hover:border-amber-400">
                <Heart className="h-6 w-6 text-gray-400 hover:text-amber-400" />
              </button>
            </div>

            <div className="pt-6 border-t border-gray-800">
              <h3 className="text-lg font-semibold text-white mb-4">Product Details</h3>
              <div className="space-y-2 text-gray-400">
                <p><span className="text-white">Size:</span> 100ml Eau de Parfum</p>
                <p><span className="text-white">Ingredients:</span> Premium essential oils, alcohol-free base</p>
                <p><span className="text-white">Longevity:</span> 8-10 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;