// src/components/products/ProductDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingBag, ChevronLeft, Loader2 } from 'lucide-react';
import { products } from '../utils/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
   const { dispatch } = useCart();
  
    const handleAddToCart = () => {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1
        }
      });
    }
  
  const product = products.find(p => p.id === parseInt(productId));

  useEffect(() => {
    if (product) {
      document.title = `${product.name} | Lylah Perfumes`;
      // Simulate loading for animation effect
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [product]);

  if (!product) return <div className="container mx-auto py-12 text-center">Product not found</div>;
  
  // Mock additional images
  const productImages = [
    product.image,
    product.image, // In a real app, these would be different images
    product.image,
    product.image
  ];

  return (
    <div className="relative min-h-screen py-16 bg-black bg-gradient-to-bl from-gray-900 via-black to-gray-900 text-white">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(90,45,140,0.2),transparent_40%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,165,0,0.1),transparent_30%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.8),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <a href="/products" className="flex items-center text-gray-400 hover:text-amber-400 mb-8 transition-colors duration-300">
            <ChevronLeft className="h-5 w-5" />
            <span className="ml-2">Back to Collection</span>
          </a>

          {isLoading ? (
            <div className="flex items-center justify-center h-96">
              <Loader2 className="h-12 w-12 text-amber-400 animate-spin" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative h-96 bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 shadow-xl transition-all duration-500 hover:shadow-amber-900/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <img 
                    src={productImages[activeImage]} 
                    alt={product.name} 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-4 py-1 text-sm font-bold uppercase rounded-full shadow-lg">
                      New Arrival
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-4 gap-3">
                  {productImages.map((img, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setActiveImage(idx)}
                      className={`aspect-square rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${activeImage === idx ? 'border-amber-400 scale-105' : 'border-gray-800 opacity-70'}`}
                    >
                      <img src={img} alt={`${product.name} view ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6 bg-black/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800">
                <div className="space-y-3">
                  <h1 className="text-4xl py-2 font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent animate-shimmer">{product.name}</h1>
                  <p className="text-gray-400 italic">Exclusive Collection</p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < product.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-700'}`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-400">({product.reviewCount} reviews)</span>
                </div>

                <p className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  ₹{product.price.toFixed(2)}
                  {product.originalPrice && (
                    <span className="ml-3 text-gray-400 line-through text-lg">
                      ₹{product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </p>

                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

                <p className="text-gray-300 leading-relaxed">
                  {product.description}
                </p>

                <div className="flex flex-row items-center gap-4">
                  <div className="flex items-center border border-gray-700 rounded-full bg-black/30 w-full sm:w-auto">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-white">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-gray-400 hover:text-amber-400 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    disabled={isLoading}
                   className="w-full sm:flex-1 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-amber-500/30 flex items-center justify-center space-x-2 group">
                    <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">Add to Cart</span>
                  </button>
                  <button className="p-3 border border-gray-700 rounded-full hover:border-amber-400 hover:bg-black/50 transition-all duration-300 group">
                    <Heart className="h-6 w-6 text-gray-400 group-hover:text-amber-400 group-hover:scale-110 transition-all" />
                  </button>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <h3 className="text-lg font-semibold text-white mb-4">Premium Details</h3>
                  <div className="space-y-3 text-gray-400">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <p><span className="text-amber-300">Size:</span> 100ml Eau de Parfum</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <p><span className="text-amber-300">Ingredients:</span> Premium essential oils, alcohol-free base</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                      <p><span className="text-amber-300">Longevity:</span> 8-10 hours</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 border border-gray-800 rounded-xl bg-black/30 backdrop-blur-sm">
                  <p className="text-gray-300 text-sm">
                    <span className="text-amber-400">✓</span> Free shipping on orders over ₹2000
                  </p>
                  <p className="text-gray-300 text-sm">
                    <span className="text-amber-400">✓</span> 30-day money-back guarantee
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;