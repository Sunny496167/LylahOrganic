// src/pages/CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, X, ChevronLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Hero from '../components/common/Hero';

const Cart= () => {
  const { items, dispatch } = useCart();
  
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="min-h-screen bg-black bg-gradient-to-bl from-gray-900 via-black to-gray-900">
      <Hero 
        title="Your Cart" 
        subtitle="Checkout your items"
        image="https://img.freepik.com/premium-photo/elegant-bottle-perfume-marble-counter-with-soft-light_1138521-1672.jpg?uid=R193627658&ga=GA1.1.91846166.1742625654&semt=ais_hybrid&w=740"
        buttonText="Checkout"
        buttonLink="#checkout-section"
      />
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Your Cart</h1>
          <Link to="/" className="text-gray-400 hover:text-white flex items-center">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Continue Shopping
          </Link>
        </div>

        {items.length === 0 ? (
          <div className="min-h-screen flex items-center justify-center">
                  {/* Animated gradient background */}
                  <div className="fixed inset-0 -z-10 bg-black">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(90,45,140,0.2),transparent_40%)] animate-pulse"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,165,0,0.1),transparent_30%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.8),transparent_70%)]"></div>
                  </div>
                  
                  <div className="text-center p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-xl max-w-md w-full">
                    <div className="flex justify-center mb-6">
                      <div className="bg-gray-900 p-6 rounded-full border border-gray-800">
                        <ShoppingBag className="h-12 w-12 text-amber-400" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent mb-4">Your cart is empty</h2>
                    <p className="text-gray-400 mb-6">Looks like you haven't added any luxury fragrances to your cart yet.</p>
                    <Link to="/" className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
                      Continue Shopping
                    </Link>
                  </div>
                </div>
        ) : (
          <div className="space-y-6">
            {items.map(item => (
              <div key={item.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-white font-medium">{item.name}</h3>
                    <p className="text-amber-400">₹{item.price.toFixed(2)}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center border border-gray-700 rounded-lg">
                    <button
                      onClick={() => dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: item.quantity - 1 }
                      })}
                      className="px-3 py-1 text-gray-400 hover:text-white"
                      disabled={item.quantity === 1}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-white">{item.quantity}</span>
                    <button
                      onClick={() => dispatch({
                        type: 'UPDATE_QUANTITY',
                        payload: { id: item.id, quantity: item.quantity + 1 }
                      })}
                      className="px-3 py-1 text-gray-400 hover:text-white"
                    >
                      +
                    </button>
                  </div>
                  
                  <button
                    onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: item.id })}
                    className="text-gray-400 hover:text-red-500"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}

            <div id='cart-section' className="bg-gray-800 p-6 rounded-lg mt-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Subtotal</span>
                <span className="text-xl font-bold text-amber-400">₹{total.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="block w-full bg-amber-500 hover:bg-amber-600 text-black text-center py-3 rounded-lg font-bold transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;