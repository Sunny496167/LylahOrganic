export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return {
    isValid: password.length >= 8,
    message: password.length < 8 ? 'Password must be at least 8 characters' : '',
  };
};

export const validatePhone = (phone) => {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  return phoneRegex.test(phone);
};

export const validateName = (name) => {
  return {
    isValid: name.length >= 2,
    message: name.length < 2 ? 'Name must be at least 2 characters' : '',
  };
};

export const validateForm = (formData, schema) => {
  const errors = {};
  
  Object.keys(schema).forEach(field => {
    const value = formData[field];
    const validations = schema[field];

    if (validations.required && !value) {
      errors[field] = `${field} is required`;
    } else if (value) {
      if (validations.minLength && value.length < validations.minLength) {
        errors[field] = `${field} must be at least ${validations.minLength} characters`;
      }
      if (validations.pattern && !validations.pattern.test(value)) {
        errors[field] = `${field} is invalid`;
      }
    }
  });

  return errors;
};
