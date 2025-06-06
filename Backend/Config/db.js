const mongoose = require('mongoose');

connectDB = async () => {
  try {
    await mongoose.connect(process.env.MongoDB_URI, {
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = { connectDB };