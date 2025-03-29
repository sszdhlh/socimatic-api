const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./db');

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const meRoute = require('./routes/me');


const app = express();
const port = process.env.PORT || 5000;

// ✅ Allow cross-domain access (front-end address)
app.use(cors({
    origin: [
      'http://localhost:3000', // For local development
      'https://socimatic-offical-website.vercel.app' // Deployed on Vercel
    ],
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));

app.use(express.json());

// Test database connection on startup
pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.error('❌ Failed to connect to the database:', err);
  } else {
    console.log('✅ Connected to database, current time:', result.rows[0].now);
  }
});

// Basic home route
app.get('/', (req, res) => {
  res.send('Hello API');
});

// Sample GET route
app.get('/api/user', (req, res) => {
  res.json({ id: 1, name: 'Alice' });
});

// Sample POST route
app.post('/api/user', (req, res) => {
  const newUser = req.body;
  res.status(201).json({ message: 'User created', data: newUser });
});

// Register and login routes
app.use('/api', registerRoute);
app.use('/api', loginRoute);
app.use('/api', meRoute);

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
