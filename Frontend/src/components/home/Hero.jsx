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

// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const HeroSection = () => {
//   return (
//     <section className="relative min-h-screen flex items-center bg-gradient-to-r from-amber-50 to-amber-100">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <svg className="absolute -top-16 -right-16 text-amber-200 opacity-20" width="400" height="400" viewBox="0 0 200 200">
//           <path fill="currentColor" d="M47,-52.2C59.2,-40.6,66.6,-24.4,71.2,-6.4C75.7,11.6,77.5,31.5,68.2,44.1C58.9,56.8,38.5,62.3,18.3,70.9C-1.9,79.5,-21.9,91.2,-38.5,87.5C-55.1,83.8,-68.3,64.7,-76.8,44.7C-85.3,24.7,-89.2,3.9,-84.6,-14.3C-79.9,-32.5,-66.8,-48.1,-51.2,-59.5C-35.5,-71,-17.8,-78.4,-0.6,-77.7C16.6,-77,33.1,-68.3,47,-52.2Z" transform="translate(100 100)" />
//         </svg>
//         <svg className="absolute -bottom-32 -left-32 text-amber-300 opacity-20" width="400" height="400" viewBox="0 0 200 200">
//           <path fill="currentColor" d="M47.7,-51.2C61.3,-33.8,71.4,-16.9,72.8,1.4C74.3,19.7,67,39.5,53.4,53.2C39.7,66.9,19.9,74.7,0.7,74C-18.5,73.3,-37,64.1,-52.1,50.2C-67.3,36.3,-79.1,18.1,-80.2,-1.1C-81.3,-20.4,-71.7,-40.8,-56.5,-58.1C-41.3,-75.4,-20.6,-89.7,-1,-88.7C18.6,-87.7,37.3,-84.4,47.7,-51.2Z" transform="translate(100 100)" />
//         </svg>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           {/* Left Column - Text Content */}
//           <motion.div 
//             initial={{ opacity: 0, x: -30 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="text-center lg:text-left"
//           >
//             <h2 className="text-sm font-medium text-amber-600 mb-3 tracking-widest uppercase">Introducing</h2>
//             <h1 className="text-5xl lg:text-6xl font-serif text-gray-900 mb-6 leading-tight">
//               Discover Your <br className="hidden lg:block" />
//               <span className="text-amber-800">Signature Scent</span>
//             </h1>
//             <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
//               Handcrafted luxury fragrances that tell your unique story. Explore our collection of artisanal perfumes made with the finest ingredients from around the world.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
//                 <Link to="/collections" className="inline-block px-8 py-4 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 transition duration-300 shadow-md hover:shadow-lg">
//                   Shop Collection
//                 </Link>
//               </motion.div>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
//                 <Link to="/finder" className="inline-block px-8 py-4 bg-white text-amber-700 font-medium rounded-full hover:bg-gray-50 transition duration-300 shadow-md hover:shadow-lg border border-amber-200">
//                   Find Your Scent
//                 </Link>
//               </motion.div>
//             </div>
//           </motion.div>

//           {/* Right Column - Hero Image with decorative border */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative"
//           >
//             <div className="aspect-w-4 aspect-h-5 lg:aspect-h-4 relative z-10 overflow-hidden rounded-2xl shadow-xl">
//               <img 
//                 src="https://img.freepik.com/free-vector/elegant-glass-bottle-women-perfumes_88138-195.jpg?uid=R193627658&ga=GA1.1.91846166.1742625654&semt=ais_hybrid&w=740" 
//                 alt="LYLAH Premium Perfume Collection" 
//                 className="object-cover w-full h-full"
//               />
//             </div>
//             {/* Decorative Elements */}
//             <div className="absolute -top-6 -right-6 w-64 h-64 bg-amber-200 rounded-full opacity-20 blur-xl"></div>
//             <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-amber-400 rounded-full opacity-20 blur-xl"></div>
//             <div className="absolute top-1/4 -right-4 h-24 w-24 rounded-full border-4 border-amber-300 opacity-50"></div>
//             <div className="absolute bottom-1/3 -left-6 h-16 w-16 rounded-full border-4 border-amber-500 opacity-30"></div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;