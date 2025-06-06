const jwt = require('jsonwebtoken');
const User = require('../Models/User');
const { ForbiddenError, UnauthenticatedError } = require('../Utils/errors');

const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      throw new UnauthenticatedError('No token provided');
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select('-password'); // omit sensitive fields

    if (!user) {
      throw new UnauthenticatedError('User not found');
    }

    // Optional: token revocation check
    // if (!user.tokens.includes(token)) throw new UnauthenticatedError('Token revoked');

    req.user = {
      userId: user._id,
      role: user.role,
      email: user.email
    };

    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return next(new UnauthenticatedError('Token expired'));
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return next(new UnauthenticatedError('Invalid token'));
    }
    return next(error);
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      throw new UnauthenticatedError('Authentication required');
    }

    if (!roles.includes(req.user.role)) {
      throw new ForbiddenError('Unauthorized to access this route');
    }

    next();
  };
};

const authenticateToken = authenticateUser;
const isAdmin = authorizeRoles('admin');

module.exports = {
  authenticateUser,
  authorizeRoles,
  authenticateToken,
  isAdmin
};
