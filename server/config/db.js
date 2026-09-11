const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio');
    console.log(`[MongoDB Connected] Host: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB Connection Error] ${error.message}`);
    // Non-fatal exit for local dev fallback so server can report graceful errors if DB is offline
    process.env.DB_CONNECTED = 'false';
  }
};

module.exports = connectDB;
