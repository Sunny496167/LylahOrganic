// src/pages/CheckoutPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { items, total, dispatch } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    cardNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment processing here
    dispatch({ type: 'CLEAR_CART' });
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl text-white mb-4">Your cart is empty</h2>
        <Link to="/" className="text-amber-400 hover:text-amber-500">
          Return to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Order Summary</h2>
          {items.map(item => (
            <div key={item.id} className="flex justify-between items-center py-2">
              <span className="text-gray-400">
                {item.name} x{item.quantity}
              </span>
              <span className="text-amber-400">₹{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t border-gray-700 pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-white font-semibold">Total:</span>
              <span className="text-xl font-bold text-amber-400">₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-2">Full Name</label>
              <input
                type="text"
                required
                className="w-full bg-gray-900 rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 text-white px-4 py-3"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Email</label>
              <input
                type="email"
                required
                className="w-full bg-gray-900 rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 text-white px-4 py-3"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Shipping Address</label>
              <textarea
                required
                className="w-full bg-gray-900 rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 text-white px-4 py-3"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-400 mb-2">City</label>
                <input
                  type="text"
                  required
                  className="w-full bg-gray-900 rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 text-white px-4 py-3"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-400 mb-2">Card Number</label>
              <input
                type="text"
                required
                pattern="\d{16}"
                className="w-full bg-gray-900 rounded-lg border border-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-400 text-white px-4 py-3"
                value={formData.cardNumber}
                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-500 hover:bg-amber-600 text-black py-4 rounded-lg font-bold transition-colors"
          >
            Complete Purchase
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;