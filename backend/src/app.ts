import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to the database
connectDB();

// Root Route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});
app.get('/favicon.ico', (req, res) => {
  res.status(204); // No Content
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
