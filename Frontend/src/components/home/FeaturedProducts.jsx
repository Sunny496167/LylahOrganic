import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, ShoppingBag, Star } from 'lucide-react';
import ProductCard from '../products/ProductCard';

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('best-sellers');
  
  const categories = [
    { id: 'best-sellers', name: 'Best Sellers' },
    { id: 'new-arrivals', name: 'New Arrivals' },
    { id: 'gift-sets', name: 'Gift Sets' },
    { id: 'limited-edition', name: 'Limited Edition' }
  ];
  
  const featuredProducts = {
    'best-sellers': [
      {
        id: 1,
        name: "Midnight Rose",
        price: 129.99,
        rating: 4.8,
        reviewCount: 124,
        image: "/images/product1.jpg",
        description: "A mysterious blend of dark rose and oudh",
        isNew: false,
        colors: ["#3D0814", "#722F37"]
      },
      {
        id: 2,
        name: "Citrus Bloom",
        price: 89.99,
        rating: 4.5,
        reviewCount: 86,
        image: "/images/product2.jpg",
        description: "Fresh citrus notes with subtle floral undertones",
        isNew: false,
        colors: ["#F9A826", "#FEF3C7"]
      },
      {
        id: 3,
        name: "Ocean Breeze",
        price: 110.00,
        rating: 4.7,
        reviewCount: 109,
        image: "/images/product3.jpg",
        description: "Aquatic essence with amber and sandalwood",
        isNew: false,
        colors: ["#164E63", "#A5F3FC"]
      }
    ],
    'new-arrivals': [
      {
        id: 4,
        name: "Golden Amber",
        price: 149.99,
        rating: 4.9,
        reviewCount: 32,
        image: "/images/product4.jpg",
        description: "Warm amber with vanilla and exotic spices",
        isNew: true,
        colors: ["#92400E", "#FEF3C7"]
      },
      {
        id: 5,
        name: "Wild Jasmine",
        price: 119.99,
        rating: 4.6,
        reviewCount: 27,
        image: "/images/product5.jpg",
        description: "Intoxicating jasmine with cedar undertones",
        isNew: true,
        colors: ["#F0FDF4", "#4ADE80"]
      },
      {
        id: 6,
        name: "Velvet Noir",
        price: 159.99,
        rating: 4.8,
        reviewCount: 41,
        image: "/images/product6.jpg",
        description: "Rich black currant with patchouli and musk",
        isNew: true,
        colors: ["#18181B", "#A1A1AA"]
      }
    ],
    'gift-sets': [
      {
        id: 7,
        name: "Floral Discovery Set",
        price: 199.99,
        rating: 4.7,
        reviewCount: 58,
        image: "/images/gift-set1.jpg",
        description: "Collection of our finest floral fragrances",
        isNew: false,
        colors: ["#FB7185", "#FBCFE8"]
      },
      {
        id: 8,
        name: "Gentleman's Collection",
        price: 229.99,
        rating: 4.9,
        reviewCount: 76,
        image: "/images/gift-set2.jpg",
        description: "Curated masculine scents for the modern man",
        isNew: false,
        colors: ["#0F172A", "#475569"]
      },
      {
        id: 9,
        name: "Seasonal Treasures",
        price: 179.99,
        rating: 4.6,
        reviewCount: 49,
        image: "/images/gift-set3.jpg",
        description: "Four seasonal fragrances for year-round elegance",
        isNew: true,
        colors: ["#6D28D9", "#C4B5FD"]
      }
    ],
    'limited-edition': [
      {
        id: 10,
        name: "Parisian Night",
        price: 199.99,
        rating: 5.0,
        reviewCount: 18,
        image: "/images/limited1.jpg",
        description: "Exclusive blend inspired by moonlit Paris",
        isNew: true,
        colors: ["#0F172A", "#94A3B8"]
      },
      {
        id: 11,
        name: "Royal Oud",
        price: 249.99,
        rating: 4.9,
        reviewCount: 24,
        image: "/images/limited2.jpg",
        description: "Prestigious oud accord with royal spices",
        isNew: true,
        colors: ["#7F1D1D", "#FCA5A5"]
      },
      {
        id: 12,
        name: "Heritage Collection",
        price: 299.99,
        rating: 4.8,
        reviewCount: 12,
        image: "/images/limited3.jpg",
        description: "Vintage-inspired collection in collectible bottles",
        isNew: true,
        colors: ["#78350F", "#FCD34D"]
      }
    ]
  };

  // Custom component for product cards since we're enhancing beyond the existing ProductCard
  const EnhancedProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <motion.div
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative h-64 sm:h-72 overflow-hidden">
          {/* Background gradient based on product colors */}
          <div 
            className="absolute inset-0 opacity-10" 
            style={{
              background: `linear-gradient(135deg, ${product.colors[0]}, ${product.colors[1]})`
            }}
          />
          
          {/* Product image */}
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />
          
          {/* New badge */}
          {product.isNew && (
            <div className="absolute top-4 right-4">
              <div className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </div>
            </div>
          )}
          
          {/* Quick actions overlay */}
          <motion.div 
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex justify-between items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="rounded-full w-10 h-10 flex items-center justify-center bg-white text-gray-800 hover:bg-gray-100"
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={18} />
            </motion.button>
            
            <Link 
              to={`/products/${product.id}`}
              className="bg-white text-gray-800 px-4 py-2 rounded-md font-medium flex items-center hover:bg-gray-100"
            >
              Quick View
            </Link>
          </motion.div>
        </div>
        
        {/* Product info */}
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-medium text-lg">{product.name}</h3>
            <span className="font-semibold text-lg">${product.price.toFixed(2)}</span>
          </div>
          
          <p className="text-gray-600 text-sm mb-3">{product.description}</p>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
              <span className="ml-1 text-sm font-medium">{product.rating}</span>
              <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
            </div>
            
            <motion.button
              className="text-sm font-medium text-gray-800 flex items-center hover:text-amber-600"
              whileHover={{ x: 3 }}
            >
              Add to Bag <ShoppingBag size={14} className="ml-1" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-4">Our Signature Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover our carefully curated fragrances, crafted to evoke emotions and create lasting impressions
          </p>
        </motion.div>
        
        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 relative ${
                activeCategory === category.id 
                  ? 'text-white' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {activeCategory === category.id && (
                <motion.div
                  layoutId="activeCategoryIndicator"
                  className="absolute inset-0 bg-gray-900 rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category.name}</span>
            </motion.button>
          ))}
        </div>
        
        {/* Products grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts[activeCategory].map((product) => (
            <EnhancedProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        
        {/* View all button */}
        <motion.div
          className="text-center mt-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link
              to="/products"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-md hover:bg-gray-800 transition duration-300 font-medium"
            >
              Explore Full Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
          <p className="text-gray-500 mt-4 text-sm">Free shipping on orders over $100</p>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;