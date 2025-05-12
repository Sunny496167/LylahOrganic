import React, { useState } from 'react';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { useCart } from '../../context/CartContext';


// Function to determine color theme based on product name
const getLuminanceType = (productName) => {
  const name = productName.toLowerCase();
  if (name.includes('gold') || name.includes('amber')) return 'gold';
  if (name.includes('ocean') || name.includes('blue') || name.includes('azure') || name.includes('sapphire') || name.includes('lagoon')) return 'blue';
  return 'amber'; // default warm tone
};

// Enhanced Product Card Component
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const luminanceType = getLuminanceType(product.name);
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
  
  // Theme colors based on luminance type
  const themeColors = {
    gold: {
      gradient: "from-yellow-400 via-amber-500 to-yellow-600",
      hoverGradient: "from-yellow-500 to-amber-600",
      textAccent: "text-yellow-400",
      radialGradient: "rgb(255, 215, 0)",
      borderGradient: "rgba(255, 215, 0, 0.3)"
    },
    blue: {
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      hoverGradient: "from-blue-500 to-blue-600",
      textAccent: "text-blue-400",
      radialGradient: "rgb(0, 120, 255)",
      borderGradient: "rgba(0, 120, 255, 0.3)"
    },
    amber: {
      gradient: "from-amber-400 via-orange-500 to-amber-600",
      hoverGradient: "from-amber-500 to-orange-600",
      textAccent: "text-amber-400",
      radialGradient: "rgb(220, 120, 60)",
      borderGradient: "rgba(255, 180, 80, 0.3)"
    }
  };
  
  const theme = themeColors[luminanceType];
  
  return (
    <div 
      className="group relative bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-xl transform transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Premium border effect */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${theme.gradient} opacity-30 group-hover:opacity-40 transition-opacity duration-300`}></div>
      
      {/* Inner content with slight padding to show border */}
      <div className="relative m-0.5 bg-gray-900 rounded-xl overflow-hidden h-full flex flex-col">
        {/* Image section with overlay */}
        <div className="relative overflow-hidden h-64">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
            style={{
              filter: isHovered ? "brightness(0.8)" : "brightness(1)",
            }}
            onError={(e) => {
              e.target.src = "/api/placeholder/400/320";
              e.target.onerror = null;
            }}
          />
          
          {/* Radial lighting effect overlay */}
          <div 
            className="absolute inset-0 opacity-30 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-40"
            style={{
              background: `radial-gradient(circle at 70% 30%, ${theme.radialGradient}, transparent 70%)`
            }}
          ></div>
          
          {/* Premium overlay gleam on hover */}
          <div 
            className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${isHovered ? 'opacity-15' : 'opacity-0'}`}
            style={{
              background: `linear-gradient(45deg, transparent, ${theme.borderGradient} 50%, transparent)`
            }}
          ></div>
          
          {/* Gradient overlay for image */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40"></div>
          
          {/* Tag or New badge */}
          {product.tags && product.tags.length > 0 && (
            <span className={`absolute top-3 left-3 bg-gradient-to-r ${theme.gradient} text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow-md`}>
              {product.tags[0]}
            </span>
          )}
          
          {/* New badge if applicable */}
          {product.isNew && (
            <div className="absolute top-3 right-3 bg-white text-black px-2 py-1 text-xs font-medium uppercase tracking-wider rounded">
              New
            </div>
          )}
          
          {/* Quick action buttons that appear on hover */}
          <div className={`absolute bottom-3 flex space-x-2 w-full justify-center transform transition-all duration-300 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 hover:bg-opacity-30 transition-all hover:scale-110 active:scale-90">
              <Heart className="h-5 w-5 text-red-700" />
            </button>
            <button className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-2 hover:bg-opacity-30 transition-all hover:scale-110 active:scale-90">
              <ShoppingBag className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>
        
        {/* Product info section */}
        <div className="p-5 flex flex-col flex-grow">
          {/* Product name */}
          <h2 className="text-lg font-semibold text-white mb-1 tracking-wide uppercase">{product.name}</h2>
          
          {/* Rating stars if available */}
          {product.rating && (
            <div className="flex items-center mt-1 mb-2">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="transition-opacity duration-300">
                    <Star
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-600"
                      }`}
                    />
                  </span>
                ))}
              </div>
              {product.reviewCount && (
                <span className="text-sm text-gray-400">
                  ({product.reviewCount})
                </span>
              )}
            </div>
          )}
          
          {/* Product description */}
          <p className="text-sm text-gray-400 mb-4 line-clamp-2">
            {product.description || "A luxurious product to elevate your lifestyle."}
          </p>
          
          {/* Price and action section */}
          <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-col">
              {product.originalPrice && (
                <span className="text-gray-400 text-xs line-through">
                  &#8377;{typeof product.originalPrice === 'number' ? product.originalPrice.toFixed(2) : Math.round(product.price * 1.2)}
                </span>
              )}
              <span className={`font-bold ${theme.textAccent} text-lg`}>
                &#8377;{typeof product.price === 'number' ? product.price.toFixed(2) : product.price}
              </span>
            </div>
            
            <button 
              onClick={handleAddToCart}
              className={`bg-gradient-to-r ${theme.gradient} hover:${theme.hoverGradient} text-gray-900 px-4 py-2 rounded-lg font-medium transform hover:scale-105 transition-all duration-300`}
            >
              Add to Cart
            </button>
          </div>
          
          {/* Animated bottom bar on hover */}
          <div 
            className={`absolute bottom-0 left-0 right-0 h-1 transform origin-left transition-transform duration-500 ${isHovered ? 'scale-x-100' : 'scale-x-0'}`}
            style={{
              background: `linear-gradient(90deg, ${
                luminanceType === "gold"
                  ? "#D4AF37, #FDF5E6"
                  : luminanceType === "blue"
                  ? "#000080, #1E90FF"
                  : "#8B4513, #D2691E"
              })`
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;