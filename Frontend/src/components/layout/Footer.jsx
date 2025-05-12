import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-white tracking-wider">LYLAH</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover the art of luxury fragrances, crafted with passion and precision for the most discerning connoisseurs.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-white uppercase tracking-wider text-sm mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-gold transition duration-300 ease-in-out">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gold transition duration-300 ease-in-out">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gold transition duration-300 ease-in-out">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white uppercase tracking-wider text-sm mb-6">Customer Service</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-gold transition duration-300 ease-in-out">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-gold transition duration-300 ease-in-out">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-gold transition duration-300 ease-in-out">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-white uppercase tracking-wider text-sm mb-6">Connect With Us</h4>
            <div className="space-y-4">
              <p className="text-gray-400">
                Follow us on social media for updates and exclusive offers.
              </p>
              <div className="flex space-x-5">
                <a href="https://www.instagram.com/lylahperfumes?igsh=MWl2cWNmZG00YjN4bw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <Instagram size={20} />
                </a>
                {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <Facebook size={20} />
                </a> */}
                <a href="https://www.linkedin.com/company/lylah-perfumes/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <Linkedin size={20} />
                </a>
                <a href="https://youtube.com/@lylahperfumes?si=GWm3-8wVRj8vhOWv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <Youtube size={20} />
                </a>
                <a href="https://x.com/lylahperfumes?s=11" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">
                  <FaXTwitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} LYLAH. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 hover:text-gray-300 text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-gray-300 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;