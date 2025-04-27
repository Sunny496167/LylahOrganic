import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { createOrder, initializePayment } from '../utils/api';
import { formatPrice } from '../utils/helpers';
import toast from 'react-hot-toast';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    shippingAddress: {
      fullName: user?.name || '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      phone: ''
    },
    paymentMethod: 'razorpay'
  });

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create order
      const orderData = {
        items: cart,
        total: getCartTotal(),
        shippingAddress: formData.shippingAddress,
        paymentMethod: formData.paymentMethod
      };

      const order = await createOrder(orderData);

      // Initialize payment
      if (formData.paymentMethod === 'razorpay') {
        const payment = await initializePayment(order.total);
        
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount: payment.amount,
          currency: payment.currency,
          name: 'LYLAH',
          description: 'Premium Perfume Purchase',
          order_id: payment.id,
          handler: async (response) => {
            // Handle successful payment
            clearCart();
            navigate('/order-confirmation', { 
              state: { orderId: order.id } 
            });
          },
          prefill: {
            name: formData.shippingAddress.fullName,
            contact: formData.shippingAddress.phone,
          },
          theme: {
            color: '#4F46E5'
          }
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();
      }
    } catch (error) {
      toast.error('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-serif text-gray-900 mb-8 text-center"
        >
          Checkout
        </motion.h1>

        {/* Checkout Steps */}
        <div className="mb-12">
          <div className="flex justify-center items-center space-x-4">
            {['Shipping', 'Payment', 'Review'].map((stepName, index) => (
              <React.Fragment key={stepName}>
                <div
                  className={`flex items-center ${
                    step > index + 1 ? 'text-primary-600' : 
                    step === index + 1 ? 'text-gray-900' : 'text-gray-400'
                  }`}
                >
                  <div className={`rounded-full h-8 w-8 flex items-center justify-center border-2 
                    ${step > index + 1 ? 'border-primary-600 bg-primary-600 text-white' :
                    step === index + 1 ? 'border-gray-900' : 'border-gray-400'}`}
                  >
                    {step > index + 1 ? '✓' : index + 1}
                  </div>
                  <span className="ml-2">{stepName}</span>
                </div>
                {index < 2 && (
                  <div className={`h-0.5 w-12 ${
                    step > index + 1 ? 'bg-primary-600' : 'bg-gray-300'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {step === 1 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium text-gray-900">
                    Shipping Information
                  </h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.shippingAddress.fullName}
                      onChange={(e) => handleInputChange('shippingAddress', 'fullName', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      required
                    />
                  </div>
                  {/* Add more shipping fields */}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium text-gray-900">
                    Payment Method
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="razorpay"
                        name="paymentMethod"
                        value="razorpay"
                        checked={formData.paymentMethod === 'razorpay'}
                        onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                      />
                      <label htmlFor="razorpay" className="ml-3">
                        Pay with Razorpay
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <h2 className="text-xl font-medium text-gray-900">
                    Review Order
                  </h2>
                  {/* Order summary */}
                </div>
              )}

              <div className="flex justify-between">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={() => setStep(step - 1)}
                    className="bg-gray-100 text-gray-900 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300"
                  >
                    Back
                  </button>
                )}
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition duration-300"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={loading}
                    className={`bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition duration-300 ${
                      loading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {loading ? 'Processing...' : 'Place Order'}
                  </button>
                )}
              </div>
            </form>
          </motion.div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-6 rounded-lg"
          >
            <h2 className="text-xl font-medium text-gray-900 mb-6">
              Order Summary
            </h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div>
                    <p className="text-gray-900">{item.name}</p>
                    <p className="text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-gray-900">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              ))}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <div className="flex justify-between">
                  <p className="text-gray-600">Subtotal</p>
                  <p className="text-gray-900">{formatPrice(getCartTotal())}</p>
                </div>
                <div className="flex justify-between mt-2">
                  <p className="text-gray-600">Shipping</p>
                  <p className="text-gray-900">Free</p>
                </div>
                <div className="flex justify-between mt-4 text-lg font-medium">
                  <p className="text-gray-900">Total</p>
                  <p className="text-primary-600">{formatPrice(getCartTotal())}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
