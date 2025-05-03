import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, User, Menu, X, Search, Heart } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Collections', path: '/collections' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-95 py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.h1 
              className="w-24 h-16 tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              <img src="/logo.png" alt="lylahorganic"
                loading='lazy'
                className="w-full h-full object-cover"
              />
            </motion.h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-colors ${
                    isActive ? 'text-yellow-400' : 'text-gray-300 hover:text-yellow-400'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button 
              whileHover={{ scale: 1.1, color: '#d4af37' }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-gray-300 hover:text-gold-400 transition-colors"
            >
              <Search className="h-5 w-5" />
            </motion.button>
            
            <motion.div whileHover={{ scale: 1.1, color: '#d4af37' }} whileTap={{ scale: 0.95 }}>
              <Link to="/wishlist" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Heart className="h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1, color: '#d4af37' }} whileTap={{ scale: 0.95 }}>
              <Link to="/cart" className="text-gray-300 hover:text-gold-400 transition-colors">
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1, color: '#d4af37' }} whileTap={{ scale: 0.95 }}>
              <Link to="/account" className="text-gray-300 hover:text-gold-400 transition-colors">
                <User className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-black bg-opacity-95 shadow-lg p-4 border-t border-gray-800"
          >
            <div className="max-w-3xl mx-auto flex items-center">
              <input 
                type="text" 
                placeholder="Search for fragrances..." 
                className="flex-grow px-4 py-2 bg-gray-900 border border-gray-700 text-gray-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <button className="bg-gold-600 text-black px-4 py-2 rounded-r-md hover:bg-gold-500 transition-colors">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black bg-opacity-95 shadow-lg"
          >
            <div className="py-4 px-4 space-y-3 border-t border-gray-800">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-gray-900 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-gray-800 pt-4 mt-4">
                <Link
                  to="/wishlist"
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <Heart className="h-5 w-5 mr-3" />
                  Wishlist
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingBag className="h-5 w-5 mr-3" />
                  Cart
                </Link>
                <Link
                  to="/account"
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-300 hover:text-gold-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <User className="h-5 w-5 mr-3" />
                  Account
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;