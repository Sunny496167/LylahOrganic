import React from 'react';
import { motion } from 'framer-motion';

const BrandHighlights = () => {
  const highlights = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Artisanal Craftsmanship",
      description: "Each fragrance is meticulously crafted by master perfumers using the finest ingredients from around the world."
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
        </svg>
      ),
      title: "Sustainable Luxury",
      description: "We're committed to sustainable practices, using eco-friendly packaging and responsibly sourced ingredients."
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "Unique Collections",
      description: "Discover our exclusive collections, each telling a unique story through carefully composed scent profiles."
    }
  ];

  const storyPoints = [
    {
      id: 1,
      title: "Our Heritage",
      description: "Founded on the principles of excellence and innovation in perfumery."
    },
    {
      id: 2,
      title: "Premium Ingredients",
      description: "Sourcing the world's finest natural essences and innovative aromatic compounds."
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Wave animation for SVG path
  const waveVariants = {
    animate: {
      d: [
        "M0,96 C320,64 440,96 1080,64 L1080,192 L0,192 Z",
        "M0,128 C320,96 480,160 1080,128 L1080,192 L0,192 Z",
        "M0,64 C320,96 480,32 1080,96 L1080,192 L0,192 Z",
        "M0,96 C320,64 440,96 1080,64 L1080,192 L0,192 Z"
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with elegant underline */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-serif text-white mb-6 relative inline-block"
          >
            Why Choose LYLAH
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-amber-400 rounded-full"></div>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Experience the perfect blend of tradition and innovation in every bottle
          </motion.p>
        </div>

        {/* Features Grid with enhanced hover effects */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24"
        >
          {highlights.map((highlight) => (
            <motion.div
              key={highlight.id}
              variants={itemVariants}
              className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-800"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-900 text-amber-400 mb-6 group-hover:bg-amber-800 transition-colors duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-medium text-amber-400 mb-4 group-hover:text-amber-300 transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand Story Section with modern layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-3 space-y-8"
          >
            <h2 className="text-3xl font-serif text-white relative inline-block">
              Our Story
              <div className="absolute -bottom-3 left-0 w-16 h-1 bg-amber-400 rounded-full"></div>
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              At LYLAH, we believe that every fragrance tells a story. Our journey began with a passion 
              for creating unique scents that capture moments, memories, and emotions. Each perfume is 
              a carefully composed symphony of notes, crafted to inspire and delight.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {storyPoints.map((point) => (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-amber-400"
                >
                  <h3 className="text-lg font-medium text-amber-400 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-400">
                    {point.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative h-96 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>
            <img
              src="/api/placeholder/600/800"
              alt="LYLAH Brand Story"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <blockquote className="text-xl font-serif italic">
                "Crafting memories through the art of perfumery"
              </blockquote>
              <p className="mt-2 font-light">- LYLAH Founder</p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section with animated counters */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 rounded-2xl p-10 mb-20 shadow-lg border border-gray-800"
        >
          <h3 className="text-2xl font-serif text-center text-white mb-10 relative inline-block">
            Our Impact
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-amber-400 rounded-full"></div>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Years of Excellence", value: "15+" },
              { label: "Unique Fragrances", value: "50+" },
              { label: "Countries", value: "25+" },
              { label: "Happy Customers", value: "100K+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-amber-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action with interactive button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center bg-gray-900 p-12 rounded-2xl shadow-lg border border-gray-800"
        >
          <h3 className="text-3xl font-serif text-white mb-6">
            Experience the Art of Fine Perfumery
          </h3>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-black bg-amber-400 hover:bg-amber-500 shadow-md hover:shadow-lg transition duration-300"
          >
            Explore Our Collections
          </motion.button>
        </motion.div>
      </div>

      {/* Animated wave effect at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg 
          width="100%" 
          height="192" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <motion.path
            variants={waveVariants}
            animate="animate"
            fill="rgba(251, 191, 36, 0.1)"
          />
        </svg>
        <svg 
          width="100%" 
          height="160" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 right-0"
        >
          <motion.path
            variants={waveVariants}
            animate="animate"
            initial={{
              d: "M0,64 C320,96 480,32 1080,96 L1080,160 L0,160 Z"
            }}
            fill="rgba(251, 191, 36, 0.05)"
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: 1
            }}
          />
        </svg>
      </div>
    </section>
  );
};

export default BrandHighlights;