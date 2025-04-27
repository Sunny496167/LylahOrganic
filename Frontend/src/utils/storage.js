const STORAGE_PREFIX = 'lylah_';

export const getStoredUser = () => {
  try {
    const user = localStorage.getItem(`${STORAGE_PREFIX}user`);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error reading user from storage:', error);
    return null;
  }
};

export const setStoredUser = (user) => {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}user`, JSON.stringify(user));
  } catch (error) {
    console.error('Error storing user:', error);
  }
};

export const removeStoredUser = () => {
  localStorage.removeItem(`${STORAGE_PREFIX}user`);
};

export const getStoredCart = () => {
  try {
    const cart = localStorage.getItem(`${STORAGE_PREFIX}cart`);
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error('Error reading cart from storage:', error);
    return [];
  }
};

export const setStoredCart = (cart) => {
  try {
    localStorage.setItem(`${STORAGE_PREFIX}cart`, JSON.stringify(cart));
  } catch (error) {
    console.error('Error storing cart:', error);
  }
};
