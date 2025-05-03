import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Heart, ShoppingBag, Star } from "lucide-react";

const FeaturedProducts = () => {
  const [activeCategory, setActiveCategory] = useState("best-sellers");
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Reset animation state when category changes
    setAnimationComplete(false);
    const timer = setTimeout(() => setAnimationComplete(true), 600);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const categories = [
    { id: "best-sellers", name: "Best Sellers" },
    { id: "new-arrivals", name: "New Arrivals" },
    { id: "gift-sets", name: "Gift Sets" },
    { id: "limited-edition", name: "Limited Edition" },
  ];

  const featuredProducts = {
    "best-sellers": [
      {
        id: 1,
        name: "Midnight Rose",
        price: 129.99,
        rating: 4.8,
        reviewCount: 124,
        image: "/sole.jpg",
        description: "A mysterious blend of dark rose and oudh",
        isNew: false,
        colors: ["#3D0814", "#722F37"],
      },
      {
        id: 2,
        name: "Citrus Bloom",
        price: 89.99,
        rating: 4.5,
        reviewCount: 86,
        image: "Cloe.jpg",
        description: "Fresh citrus notes with subtle floral undertones",
        isNew: false,
        colors: ["#F9A826", "#FEF3C7"],
      },
      {
        id: 3,
        name: "Ocean Breeze",
        price: 110.0,
        rating: 4.7,
        reviewCount: 109,
        image: "virenza.jpg",
        description: "Aquatic essence with amber and sandalwood",
        isNew: false,
        colors: ["#164E63", "#A5F3FC"],
      },
    ],
    "new-arrivals": [
      {
        id: 4,
        name: "Golden Amber",
        price: 149.99,
        rating: 4.9,
        reviewCount: 32,
        image: "/virenza.jpg",
        description: "Warm amber with vanilla and exotic spices",
        isNew: true,
        colors: ["#92400E", "#FEF3C7"],
      },
      {
        id: 5,
        name: "Wild Jasmine",
        price: 119.99,
        rating: 4.6,
        reviewCount: 27,
        image: "/Cloe.jpg",
        description: "Intoxicating jasmine with cedar undertones",
        isNew: true,
        colors: ["#F0FDF4", "#4ADE80"],
      },
      {
        id: 6,
        name: "Velvet Noir",
        price: 159.99,
        rating: 4.8,
        reviewCount: 41,
        image: "/Ines.jpg",
        description: "Rich black currant with patchouli and musk",
        isNew: true,
        colors: ["#18181B", "#A1A1AA"],
      },
    ],
    "gift-sets": [
      {
        id: 7,
        name: "Floral Discovery Set",
        price: 199.99,
        rating: 4.7,
        reviewCount: 58,
        image: "/sole.jpg",
        description: "Collection of our finest floral fragrances",
        isNew: false,
        colors: ["#FB7185", "#FBCFE8"],
      },
      {
        id: 8,
        name: "Gentleman's Collection",
        price: 229.99,
        rating: 4.9,
        reviewCount: 76,
        image: "/virenza.jpg",
        description: "Curated masculine scents for the modern man",
        isNew: false,
        colors: ["#0F172A", "#475569"],
      },
      {
        id: 9,
        name: "Seasonal Treasures",
        price: 179.99,
        rating: 4.6,
        reviewCount: 49,
        image: "/Brio.jpg",
        description: "Four seasonal fragrances for year-round elegance",
        isNew: true,
        colors: ["#6D28D9", "#C4B5FD"],
      },
    ],
    "limited-edition": [
      {
        id: 10,
        name: "Parisian Night",
        price: 199.99,
        rating: 5.0,
        reviewCount: 18,
        image: "founder.jpg",
        description: "Exclusive blend inspired by moonlit Paris",
        isNew: true,
        colors: ["#0F172A", "#94A3B8"],
      },
      {
        id: 11,
        name: "Royal Oud",
        price: 249.99,
        rating: 4.9,
        reviewCount: 24,
        image: "sole.jpg",
        description: "Prestigious oud accord with royal spices",
        isNew: true,
        colors: ["#7F1D1D", "#FCA5A5"],
      },
      {
        id: 12,
        name: "Heritage Collection",
        price: 299.99,
        rating: 4.8,
        reviewCount: 12,
        image: "Brio.jpg",
        description: "Vintage-inspired collection in collectible bottles",
        isNew: true,
        colors: ["#78350F", "#FCD34D"],
      },
    ],
  };

  // Get luminance type based on product name
  const getLuminanceType = (name) => {
    const lowerName = name.toLowerCase();
    if (
      lowerName.includes("amber") ||
      lowerName.includes("gold") ||
      lowerName.includes("heritage") ||
      lowerName.includes("royal")
    ) {
      return "gold";
    } else if (
      lowerName.includes("ocean") ||
      lowerName.includes("breeze") ||
      lowerName.includes("jasmine")
    ) {
      return "blue";
    } else {
      return "amber";
    }
  };

  // Custom component for product cards
  const EnhancedProductCard = ({ product }) => {
    const [isHovered, setIsHovered] = useState(false);
    const luminanceType = getLuminanceType(product.name);

    return (
      <motion.div
        className="group relative bg-black rounded-xl overflow-hidden shadow-xl"
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="relative h-80 overflow-hidden">
          {/* Luxury gold/amber lighting effect overlay */}
          <motion.div
            className="absolute inset-0 opacity-30 mix-blend-overlay"
            initial={{ opacity: 0.1 }}
            animate={{
              opacity: isHovered ? 0.4 : 0.2,
              background: `radial-gradient(circle at 70% 30%, ${
                luminanceType === "gold"
                  ? "rgb(255, 215, 0)"
                  : luminanceType === "blue"
                  ? "rgb(0, 120, 255)"
                  : "rgb(220, 120, 60)"
              }, transparent 70%)`,
            }}
            transition={{ duration: 0.8 }}
          />

          {/* Product image with subtle zoom effect */}
          <motion.div className="relative w-full h-full flex items-center justify-center">
            <motion.img
              src={product.image}
              alt={product.name}
              className="max-h-full w-full object-cover transition-transform duration-300 ease-in-out"
              loading="lazy"
              style={{
                filter: isHovered ? "brightness(0.8)" : "brightness(1)",
              }}
              initial={{ scale: 1 }}
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              onError={(e) => {
                e.target.src = "/images/placeholder.jpg"; // Fallback image
                e.target.onerror = null;
              }}
            />
          </motion.div>

          {/* Premium overlay gleam on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.15 : 0 }}
            transition={{ duration: 0.4 }}
            style={{
              background: `linear-gradient(45deg, transparent, ${
                luminanceType === "gold"
                  ? "rgba(255, 215, 0, 0.3)"
                  : luminanceType === "blue"
                  ? "rgba(0, 120, 255, 0.3)"
                  : "rgba(255, 180, 80, 0.3)"
              } 50%, transparent)`,
            }}
          />

          {/* New badge */}
          {product.isNew && (
            <div className="absolute top-4 right-4 bg-white text-black px-2 py-1 text-xs font-medium uppercase tracking-wider rounded">
              New
            </div>
          )}

          {/* Quick actions on hover */}
          <motion.div
            className="absolute inset-x-0 bottom-0 flex justify-center space-x-2 py-3 bg-black bg-opacity-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Heart className="h-4 w-4" />
            </motion.button>
            <motion.button
              className="p-2 rounded-full bg-white text-black hover:bg-gray-200 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ShoppingBag className="h-4 w-4" />
            </motion.button>
          </motion.div>
        </div>

        {/* Product info - dark luxury style */}
        <div className="p-5 bg-white">
          <div className="flex justify-between items-start">
            <h3 className="font-medium text-lg tracking-wide uppercase text-gray-900">
              {product.name}
            </h3>
            <span className="font-semibold text-lg">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <div className="flex items-center mt-2 mb-1">
            <div className="flex mr-2">
              {[...Array(5)].map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0.8 }}
                  animate={{
                    opacity: isHovered ? 1 : 0.8,
                  }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Star
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating)
                        ? "text-amber-400 fill-amber-400"
                        : "text-gray-300"
                    }`}
                  />
                </motion.span>
              ))}
            </div>
            <span className="text-sm text-gray-500">
              ({product.reviewCount})
            </span>
          </div>

          <p className="text-sm text-gray-600 mt-1 line-clamp-1">
            {product.description}
          </p>

          <motion.div
            className="absolute bottom-0 left-0 right-0 h-1"
            style={{
              background:
                luminanceType === "gold"
                  ? "linear-gradient(90deg, #D4AF37, #FDF5E6)"
                  : luminanceType === "blue"
                  ? "linear-gradient(90deg, #000080, #1E90FF)"
                  : "linear-gradient(90deg, #8B4513, #D2691E)",
            }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    );
  };

  // Update the section to match luxury dark theme
  return (
    <section className="relative py-20 bg-black text-white overflow-hidden">
      {/* Animated background gradients */}
      <motion.div
        className="absolute top-0 left-0 w-1/2 h-1/2 rounded-full blur-3xl opacity-20 mix-blend-screen"
        animate={{
          x: [0, 100, 50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.15, 0.2, 0.15, 0.15],
        }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "loop" }}
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.6), rgba(205,127,50,0.3), transparent 70%)",
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 rounded-full blur-2xl opacity-20 mix-blend-screen"
        animate={{
          x: [0, -50, -100, 0],
          y: [0, -50, -100, 0],
          scale: [1, 0.9, 1.1, 1],
          opacity: [0.15, 0.1, 0.2, 0.15],
        }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "loop" }}
        style={{
          background:
            "radial-gradient(circle, rgba(65,105,225,0.6), rgba(0,191,255,0.3), transparent 70%)",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full blur-3xl opacity-10 mix-blend-screen"
        animate={{
          scale: [1, 1.2, 0.8, 1],
          opacity: [0.1, 0.15, 0.05, 0.1],
        }}
        transition={{ duration: 25, repeat: Infinity, repeatType: "loop" }}
        style={{
          background:
            "radial-gradient(circle, rgba(220,120,60,0.6), rgba(139,69,19,0.3), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <h2 className="font-serif text-5xl md:text-6xl mb-4 tracking-wider uppercase">
            Most Loved Scents
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Discover the top-selling perfumes in our exclusive collection.
            Explore the most popular scents of the year from classic fragrances.
          </p>

          {/* Underline accent */}
          <motion.div
            className="h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mt-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-white text-black"
                  : "bg-transparent text-gray-300 border border-gray-700 hover:border-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Products grid with premium dark theme */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProducts[activeCategory].map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <EnhancedProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* View all button */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: animationComplete ? 1 : 0,
            y: animationComplete ? 0 : 20,
          }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link to="/collections">
            <motion.button
              className="group flex items-center space-x-2 px-8 py-3 bg-transparent border border-white rounded-full hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="font-medium uppercase tracking-wider">
                View All
              </span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 1.5,
                  repeatDelay: 1,
                }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
