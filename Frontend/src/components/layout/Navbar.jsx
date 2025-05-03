import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    { name: 'Shop', path: '/products' },
    { name: 'Collections', path: '/collections' },
    { name: 'Our Story', path: '/about' },
    { name: 'Journal', path: '/journal' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-stone-50 shadow-md py-2' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.h1 
              className={`font-serif text-2xl md:text-3xl transition-colors duration-300 ${scrolled ? 'text-stone-900' : 'text-stone-50'}`}
              whileHover={{ scale: 1.05 }}
            >
              LYLAH
            </motion.h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`text-sm font-medium hover:text-amber-400 transition-colors ${
                  scrolled ? 'text-stone-800' : 'text-stone-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <motion.button 
              whileHover={{ scale: 1.1, color: '#f59e0b' }} 
              whileTap={{ scale: 0.95 }}
              onClick={() => setSearchOpen(!searchOpen)}
              className={`transition-colors ${scrolled ? 'text-stone-800 hover:text-amber-600' : 'text-stone-50 hover:text-amber-400'}`}
            >
              <Search className="h-5 w-5" />
            </motion.button>
            
            <motion.div whileHover={{ scale: 1.1, color: '#f59e0b' }} whileTap={{ scale: 0.95 }}>
              <Link to="/wishlist" className={`transition-colors ${scrolled ? 'text-stone-800 hover:text-amber-600' : 'text-stone-50 hover:text-amber-400'}`}>
                <Heart className="h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1, color: '#f59e0b' }} whileTap={{ scale: 0.95 }}>
              <Link to="/cart" className={`transition-colors ${scrolled ? 'text-stone-800 hover:text-amber-600' : 'text-stone-50 hover:text-amber-400'}`}>
                <ShoppingBag className="h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.1, color: '#f59e0b' }} whileTap={{ scale: 0.95 }}>
              <Link to="/account" className={`transition-colors ${scrolled ? 'text-stone-800 hover:text-amber-600' : 'text-stone-50 hover:text-amber-400'}`}>
                <User className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-stone-800' : 'text-stone-50'}`}
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
            className="absolute top-full left-0 right-0 bg-stone-50 shadow-md p-4"
          >
            <div className="max-w-3xl mx-auto flex items-center">
              <input 
                type="text" 
                placeholder="Search for fragrances..." 
                className="flex-grow px-4 py-2 border border-stone-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <button className="bg-amber-600 text-stone-50 px-4 py-2 rounded-r-md hover:bg-amber-700 transition-colors">
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
            className="md:hidden bg-stone-50 shadow-lg"
          >
            <div className="py-4 px-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-600 hover:bg-stone-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-stone-200 pt-4 mt-4">
                <Link
                  to="/wishlist"
                  className="flex items-center px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-600"
                  onClick={() => setIsOpen(false)}
                >
                  <Heart className="h-5 w-5 mr-3" />
                  Wishlist
                </Link>
                <Link
                  to="/cart"
                  className="flex items-center px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-600"
                  onClick={() => setIsOpen(false)}
                >
                  <ShoppingBag className="h-5 w-5 mr-3" />
                  Cart
                </Link>
                <Link
                  to="/account"
                  className="flex items-center px-3 py-2 text-base font-medium text-stone-700 hover:text-amber-600"
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