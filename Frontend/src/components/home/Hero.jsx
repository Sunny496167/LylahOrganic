import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Droplet, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [activeScent, setActiveScent] = useState(0);
  const featuredScents = [
    { 
      name: "Midnight Orchid", 
      color: "bg-purple-900", 
      description: "Mysterious & Exotic",
      image: "https://img.freepik.com/premium-photo/magic-potion-glass-bottle-with-plants-flowers-red-background_176873-14795.jpg?uid=R193627658&ga=GA1.1.91846166.1742625654&semt=ais_hybrid&w=740" 
    },
    { 
      name: "Citrus Breeze", 
      color: "bg-yellow-500", 
      description: "Fresh & Vibrant",
      image: "https://img.freepik.com/premium-photo/perfume-bottle-keys-pouch-sunlit-room_282218-97232.jpg?uid=R193627658&ga=GA1.1.91846166.1742625654&semt=ais_hybrid&w=740" 
    },
    { 
      name: "Ocean Mist", 
      color: "bg-blue-500", 
      description: "Cool & Refreshing",
      image: "https://img.freepik.com/premium-photo/magic-potion-glass-bottle-with-plants-flowers-blue-background_176873-11871.jpg?uid=R193627658&ga=GA1.1.91846166.1742625654&semt=ais_hybrid&w=740" 
    },
    { 
      name: "Amber Woods", 
      color: "bg-amber-700", 
      description: "Warm & Sensual",
      image: "https://img.freepik.com/premium-photo/mystical-scene-with-small-glass-bottle-floating-droplets_337384-205246.jpg?uid=R193627658&ga=GA1.1.91846166.1742625654&semt=ais_hybrid&w=740" 
    }
  ];

  // Background transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScent((current) => (current + 1) % featuredScents.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [featuredScents.length]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/20 z-20" /> {/* Gradient overlay */}
        
        {/* Background Images */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {/* Using a placeholder with actual image */}
            <div className="absolute inset-0">
              <img 
                src={featuredScents[activeScent].image} 
                alt={featuredScents[activeScent].name}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 ${featuredScents[activeScent].color} opacity-40`} />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
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
            <Droplet className="text-white/20" size={Math.random() * 20 + 10} />
          </motion.div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative h-full flex items-center justify-center z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeScent}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6 }}
                >
                  <p className="text-sm uppercase tracking-[0.2em] text-white/80 mb-4">
                    New Seasonal Collection
                  </p>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif mb-6 text-white">
                    {featuredScents[activeScent].name}
                  </h1>
                  <p className="text-xl text-white/90 mb-8 max-w-xl mx-auto lg:mx-0">
                    {featuredScents[activeScent].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    to="/shop"
                    className="flex items-center justify-center gap-2 bg-white/90 text-gray-900 px-8 py-4 rounded-full hover:bg-white transition-all duration-300 font-medium"
                  >
                    Explore Collection
                    <ArrowRight className="h-5 w-5 mt-0.5" />
                  </Link>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    to="/discover"
                    className="flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full hover:border-white/60 transition-all duration-300"
                  >
                    Find Your Scent
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Scent Selector */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.4 }}
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
                        <Droplet className="h-6 w-6 mb-2" />
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 flex flex-col items-center z-30"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut" 
          }}
        >
          <ChevronDown className="h-8 w-8" />
        </motion.div>
        <span className="text-sm mt-2 tracking-widest">Explore More</span>
      </motion.div>
    </section>
  );
};

export default Hero;
