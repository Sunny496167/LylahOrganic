import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/outline';

const OrderConfirmation = () => {
  const location = useLocation();
  const orderId = location.state?.orderId;

  return (
    <div className="min-h-screen py-16 flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 rounded-lg shadow-sm text-center"
        >
          <div className="flex justify-center mb-6">
            <CheckCircleIcon className="h-16 w-16 text-green-500" />
          </div>

          <h1 className="text-3xl font-serif text-gray-900 mb-4">
            Thank You for Your Order!
          </h1>
          
          <p className="text-gray-600 mb-8">
            Your order has been successfully placed. We've sent a confirmation 
            email with your order details.
          </p>

          {orderId && (
            <div className="bg-gray-50 p-4 rounded-md mb-8">
              <p className="text-sm text-gray-600">Order ID</p>
              <p className="text-lg font-medium text-gray-900">{orderId}</p>
            </div>
          )}

          <div className="space-y-4">
            <Link
              to="/products"
              className="block w-full bg-primary-600 text-white py-3 px-4 rounded-md hover:bg-primary-700 transition duration-300"
            >
              Continue Shopping
            </Link>
            
            <Link
              to="/account/orders"
              className="block w-full bg-gray-100 text-gray-900 py-3 px-4 rounded-md hover:bg-gray-200 transition duration-300"
            >
              View Order Status
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            <p>Need help? Contact our customer support</p>
            <a
              href="mailto:support@lylah.com"
              className="text-primary-600 hover:text-primary-500"
            >
              support@lylah.com
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
