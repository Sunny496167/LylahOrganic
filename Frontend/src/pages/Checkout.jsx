// src/pages/CheckoutPage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CreditCard, MapPin, Mail, User, CheckCircle, ArrowLeft, ShoppingBag, LockIcon } from 'lucide-react';

const Checkout = () => {
  const { items, total, dispatch } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);
      dispatch({ type: 'CLEAR_CART' });
    }, 2000);
  };

  if (items.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-black bg-gradient-to-bl from-gray-900 via-black to-gray-900 flex items-center justify-center">
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
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-black bg-gradient-to-bl from-gray-900 via-black to-gray-900 flex items-center justify-center">
        {/* Animated gradient background */}
        <div className="fixed inset-0 -z-10 bg-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(90,45,140,0.2),transparent_40%)] animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,165,0,0.1),transparent_30%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.8),transparent_70%)]"></div>
        </div>
        
        <div className="text-center p-8 bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-800 shadow-xl max-w-md w-full">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-full">
              <CheckCircle className="h-12 w-12 text-black" />
            </div>
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent mb-4">Order Confirmed</h2>
          <p className="text-gray-300 mb-6">Thank you for your purchase. Your order has been confirmed and will be shipped shortly.</p>
          <div className="mb-8 p-4 rounded-xl bg-gray-900/50 border border-gray-800">
            <p className="text-amber-400 font-medium">Order Reference:</p>
            <p className="text-gray-300 font-mono">#LYL-{Math.floor(100000 + Math.random() * 900000)}</p>
          </div>
          <Link to="/" className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-amber-500/30">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 bg-black bg-gradient-to-bl from-gray-900 via-black to-gray-900">
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(90,45,140,0.2),transparent_40%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,165,0,0.1),transparent_30%)] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.8),transparent_70%)]"></div>
      </div>
      
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Link to="/products" className="inline-flex items-center text-gray-400 hover:text-amber-400 mb-8 transition-colors duration-300">
            <ArrowLeft className="h-5 w-5" />
            <span className="ml-2">Continue Shopping</span>
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent mb-6">Secure Checkout</h1>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main checkout form */}
            <div className="lg:col-span-3 space-y-8">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 shadow-lg">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <User className="h-5 w-5 mr-2 text-amber-400" />
                  Personal Information
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div className="group">
                      <label className="flex items-center text-gray-400 mb-2">
                        <User className="h-4 w-4 mr-2 text-amber-400" />
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-900/70 rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white px-4 py-3 transition-all"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="group">
                      <label className="flex items-center text-gray-400 mb-2">
                        <Mail className="h-4 w-4 mr-2 text-amber-400" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-gray-900/70 rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white px-4 py-3 transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>
                </form>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 shadow-lg">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-amber-400" />
                  Shipping Details
                </h2>
                
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div className="group">
                      <label className="flex items-center text-gray-400 mb-2">
                        <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                        Shipping Address
                      </label>
                      <textarea
                        required
                        className="w-full bg-gray-900/70 rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white px-4 py-3 transition-all"
                        rows="3"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
                    </div>

                    <div className="group">
                      <label className="flex items-center text-gray-400 mb-2">
                        <MapPin className="h-4 w-4 mr-2 text-amber-400" />
                        City
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-gray-900/70 rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white px-4 py-3 transition-all"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      />
                    </div>
                  </div>
                </form>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 shadow-lg">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-amber-400" />
                  Payment Information
                </h2>
                
                <form className="space-y-6">
                  <div className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 mb-6">
                    <div className="flex items-center mb-2">
                      <LockIcon className="h-4 w-4 text-amber-400 mr-2" />
                      <p className="text-gray-300 text-sm">Secure Payment</p>
                    </div>
                    <p className="text-gray-400 text-xs">Your payment information is encrypted and secure</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="group">
                      <label className="flex items-center text-gray-400 mb-2">
                        <CreditCard className="h-4 w-4 mr-2 text-amber-400" />
                        Card Number
                      </label>
                      <input
                        type="text"
                        required
                        pattern="\d{16}"
                        className="w-full bg-gray-900/70 rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white px-4 py-3 transition-all"
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="group">
                        <label className="flex items-center text-gray-400 mb-2">
                          <CreditCard className="h-4 w-4 mr-2 text-amber-400" />
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="MM/YY"
                          className="w-full bg-gray-900/70 rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white px-4 py-3 transition-all"
                          value={formData.expiry}
                          onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                        />
                      </div>
                      
                      <div className="group">
                        <label className="flex items-center text-gray-400 mb-2">
                          <CreditCard className="h-4 w-4 mr-2 text-amber-400" />
                          CVV
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="XXX"
                          className="w-full bg-gray-900/70 rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-white px-4 py-3 transition-all"
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black px-8 py-4 rounded-full font-bold transition-all duration-300 shadow-lg hover:shadow-amber-500/30 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 border-2 border-black border-t-transparent rounded-full animate-spin mr-2"></div>
                    Processing...
                  </>
                ) : (
                  'Complete Purchase'
                )}
              </button>
            </div>
            
            {/* Order summary */}
            <div className="lg:col-span-2">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 shadow-lg sticky top-24">
                <h2 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <ShoppingBag className="h-5 w-5 mr-2 text-amber-400" />
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  {items.map(item => (
                    <div key={item.id} className="flex justify-between items-center py-3 border-b border-gray-800">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-800 rounded-lg overflow-hidden mr-3">
                          {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                        </div>
                        <div>
                          <h3 className="text-white text-sm font-medium">{item.name}</h3>
                          <p className="text-gray-400 text-xs">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <span className="text-amber-400 font-bold">₹{(item.price * item.quantity)}</span>
                    </div>
                  ))}
                </div>
                
                <div className="space-y-3 py-4 border-t border-b border-gray-800">
                  <div className="flex justify-between text-gray-400">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Tax</span>
                    <span>₹{(total * 0.18)}</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <span className="text-white font-medium">Total</span>
                  <div className="text-right">
                    <span className="text-xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">₹{(total + (total * 0.18))}</span>
                    <p className="text-gray-500 text-xs">including taxes</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 rounded-xl bg-gray-900/50 border border-gray-800">
                  <div className="flex items-center mb-2">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
                    <p className="text-gray-300 text-sm">Free shipping on this order</p>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-amber-400 mr-2" />
                    <p className="text-gray-300 text-sm">30-day money-back guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;