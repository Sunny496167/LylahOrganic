import React, { useState, useEffect } from 'react';
import { Heart, ShoppingBag, User, Menu, X, Search, ChevronDown, Instagram, Facebook, Twitter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// App component that includes all sections
const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturedProducts />
        <BrandHighlights />
      </main>
      <Footer />
    </div>
  );
};

// Enhanced Navbar with animations and interactive elements
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <a href="#" className={`font-serif text-2xl ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
                LYLAH
              </a>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="#" text="Home" isScrolled={isScrolled} />
              <NavLink href="#" text="Shop" isScrolled={isScrolled} />
              <NavLink href="#" text="Collections" isScrolled={isScrolled} />
              <NavLink href="#" text="About" isScrolled={isScrolled} />
            </div>

            {/* Icons Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 rounded-full ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              >
                <Search size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              >
                <Heart size={20} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full relative ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.95 }}
                className={`p-2 rounded-full ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              >
                <User size={20} />
              </motion.button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-full ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="fixed inset-0 z-40 bg-white md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-gray-700 hover:bg-gray-100"
              >
                <X size={24} />
              </motion.button>
            </div>
            <div className="flex flex-col px-4 py-6 space-y-6">
              <MobileNavLink href="#" text="Home" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="#" text="Shop" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="#" text="Collections" onClick={() => setIsOpen(false)} />
              <MobileNavLink href="#" text="About" onClick={() => setIsOpen(false)} />
              
              <div className="pt-6 border-t border-gray-200">
                <div className="flex justify-around">
                  <IconButton icon={<Heart size={20} />} label="Wishlist" />
                  <IconButton icon={<ShoppingBag size={20} />} label="Cart" badge={cartCount} />
                  <IconButton icon={<User size={20} />} label="Account" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/80 flex items-start justify-center pt-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="bg-white rounded-lg w-full max-w-2xl mx-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center p-4 border-b">
                <Search size={20} className="text-gray-400 mr-3" />
                <input 
                  type="text" 
                  placeholder="Search for fragrances..." 
                  className="flex-grow outline-none text-lg"
                  autoFocus
                />
                <button 
                  onClick={() => setSearchOpen(false)}
                  className="p-2 text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-500 mb-3">Popular Searches:</p>
                <div className="flex flex-wrap gap-2">
                  {["Midnight Orchid", "Summer Collection", "Gift Sets", "New Arrivals"].map((term) => (
                    <button 
                      key={term} 
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Navigation link component for desktop
const NavLink = ({ href, text, isScrolled }) => (
  <motion.a 
    href={href}
    className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-amber-600' : 'text-white hover:text-white/80'}`}
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
  >
    {text}
  </motion.a>
);

// Navigation link component for mobile
const MobileNavLink = ({ href, text, onClick }) => (
  <motion.a 
    href={href}
    onClick={onClick}
    className="text-xl font-medium text-gray-800 hover:text-amber-600"
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.98 }}
  >
    {text}
  </motion.a>
);

// Icon button for mobile menu
const IconButton = ({ icon, label, badge }) => (
  <motion.button 
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center text-gray-700"
  >
    <div className="relative">
      {icon}
      {badge > 0 && (
        <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
          {badge}
        </span>
      )}
    </div>
    <span className="mt-1 text-xs">{label}</span>
  </motion.button>
);

// Hero section with animations
const Hero = () => {
  const [activeScent, setActiveScent] = useState(0);
  const featuredScents = [
    { name: "Midnight Orchid", color: "bg-purple-900", description: "Mysterious & Exotic" },
    { name: "Citrus Breeze", color: "bg-yellow-500", description: "Fresh & Vibrant" },
    { name: "Ocean Mist", color: "bg-blue-500", description: "Cool & Refreshing" },
    { name: "Amber Woods", color: "bg-amber-700", description: "Warm & Sensual" }
  ];

  // Background transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScent((current) => (current + 1) % featuredScents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredScents.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0">
        <motion.div
          className="w-full h-full bg-gradient-to-r from-gray-900 to-gray-800"
          initial={{ opacity: 0.7 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className={`absolute inset-0 ${featuredScents[activeScent].color}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 1.5 }}
          style={{ mixBlendMode: 'multiply' }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ 
              x: Math.random() * 100 - 50 + "%", 
              y: "120%", 
              opacity: 0.2,
              scale: 0.3 + Math.random()
            }}
            animate={{ 
              y: "-120%",
              rotate: Math.random() * 360,
              transition: { 
                duration: 15 + Math.random() * 20, 
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            <div className="text-white/20" style={{ fontSize: Math.random() * 20 + 10 }}>✦</div>
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <motion.div
                key={activeScent}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm uppercase tracking-widest text-white/80 mb-4">
                  New Seasonal Collection
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6 text-white">
                  {featuredScents[activeScent].name}
                </h1>
                <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
                  {featuredScents[activeScent].description}
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 bg-white/90 text-gray-900 px-8 py-4 rounded-full hover:bg-white transition-all duration-300 font-medium"
                >
                  Explore Collection
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full hover:border-white/60 transition-all duration-300"
                >
                  Find Your Scent
                </motion.button>
              </div>
            </motion.div>

            {/* Scent Selector */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:block"
            >
              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl text-white mb-6 font-medium">Featured Scents</h3>
                <div className="grid grid-cols-2 gap-4">
                  {featuredScents.map((scent, index) => (
                    <motion.button
                      key={scent.name}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveScent(index)}
                      className={`relative p-5 rounded-xl transition-all duration-300 ${
                        activeScent === index 
                          ? `${scent.color} text-white`
                          : 'bg-white/5 hover:bg-white/10 text-white/90'
                      }`}
                    >
                      <div className="flex items-start flex-col">
                        <div className="h-6 w-6 mb-2">✦</div>
                        <span className="text-lg font-medium">{scent.name}</span>
                        <span className="text-sm opacity-80 mt-1">{scent.description}</span>
                      </div>
                      {activeScent === index && (
                        <motion.div 
                          layoutId="scent-highlight"
                          className="absolute inset-0 border-2 border-white/30 rounded-xl"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 flex flex-col items-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <ChevronDown className="h-8 w-8 animate-bounce" />
        <span className="text-sm mt-2 tracking-widest">Explore More</span>
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
    </section>
  );
};

// Featured Products with interactive elements
const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState('best-sellers');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  
  const categories = [
    { id: 'best-sellers', name: 'Best Sellers' },
    { id: 'new-arrivals', name: 'New Arrivals' },
    { id: 'gift-sets', name: 'Gift Sets' },
    { id: 'limited-edition', name: 'Limited Edition' }
  ];
  
  const products = {
    'best-sellers': [
      {
        id: 1,
        name: "Midnight Rose",
        price: 129.99,
        rating: 4.8,
        reviewCount: 124,
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
        description: "Vintage-inspired collection in collectible bottles",
        isNew: true,
        colors: ["#78350F", "#FCD34D"]
      }
    ]
  };

  // Product Card Component
  const ProductCard = ({ product }) => {
    const [isHeartFilled, setIsHeartFilled] = useState(false);
    
    return (
      <motion.div
        className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300 }}
        onHoverStart={() => setHoveredProduct(product.id)}
        onHoverEnd={() => setHoveredProduct(null)}
      >
        <div className="relative h-64 sm:h-72 overflow-hidden">
          {/* Background gradient based on product colors */}
          <div 
            className="absolute inset-0 opacity-10" 
            style={{
              background: `linear-gradient(135deg, ${product.colors[0]}, ${product.colors[1]})`
            }}
          />
          
          {/* Product image placeholder */}
          <div className="w-full h-full flex items-center justify-center">
            <div 
              className="w-32 h-32 rounded-full" 
              style={{
                background: `linear-gradient(135deg, ${product.colors[0]}22, ${product.colors[1]}22)`,
                border: `2px solid ${product.colors[0]}44`
              }}
            />
          </div>
          
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
            animate={{ opacity: hoveredProduct === product.id ? 1 : 0, y: hoveredProduct === product.id ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="rounded-full w-10 h-10 flex items-center justify-center bg-white text-gray-800 hover:bg-gray-100"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                setIsHeartFilled(!isHeartFilled);
              }}
            >
              <Heart size={18} className={isHeartFilled ? "fill-red-500 text-red-500" : ""} />
            </motion.button>
            
            <motion.button 
              className="bg-white text-gray-800 px-4 py-2 rounded-md font-medium flex items-center hover:bg-gray-100"
              whileTap={{ scale: 0.95 }}
            >
              Quick View
            </motion.button>
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
              <div className="text-amber-500">★</div>
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
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products[activeCategory].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
        
        {/* View all button */}
        <motion.div
          className="text-center mt-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          viewport={{ once: true }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "