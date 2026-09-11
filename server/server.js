const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');

// Load env vars
dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || '*',
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'online',
    message: 'MERN Portfolio Backend API is running smoothly',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`[Server Ready] Listening on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
});
