// src/components/cart/CartSummary.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CartSummary = ({ subtotal, shipping, total }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Subtotal</dt>
          <dd className="text-sm font-medium text-gray-900">${subtotal}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-sm text-gray-600">Shipping</dt>
          <dd className="text-sm font-medium text-gray-900">${shipping}</dd>
        </div>
        <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
          <dt className="text-base font-medium text-gray-900">Total</dt>
          <dd className="text-base font-medium text-gray-900">${total}</dd>
        </div>
      </dl>
      <Link
        to="/checkout"
        className="mt-6 w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition duration-300 text-center block"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
};

export default CartSummary;