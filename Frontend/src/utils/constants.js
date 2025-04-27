export const PRODUCT_CATEGORIES = [
  { id: 'floral', name: 'Floral' },
  { id: 'woody', name: 'Woody' },
  { id: 'oriental', name: 'Oriental' },
  { id: 'fresh', name: 'Fresh' },
  { id: 'citrus', name: 'Citrus' },
];

export const PRICE_RANGES = [
  { id: 'under2000', name: 'Under ₹2,000', min: 0, max: 2000 },
  { id: '2000to5000', name: '₹2,000 - ₹5,000', min: 2000, max: 5000 },
  { id: '5000to10000', name: '₹5,000 - ₹10,000', min: 5000, max: 10000 },
  { id: 'over10000', name: 'Over ₹10,000', min: 10000, max: Infinity },
];

export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
};

export const PAYMENT_METHODS = {
  RAZORPAY: 'razorpay',
  COD: 'cod',
};

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
  },
  PRODUCTS: '/products',
  ORDERS: '/orders',
  PAYMENTS: '/payments',
};
