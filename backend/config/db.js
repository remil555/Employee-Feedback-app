const mongoose = require('mongoose');

const connectDB = () => {
  const mongoURI = process.env.MONGO_URI; // Get Mongo URI from .env
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
};

module.exports = { connectDB };
