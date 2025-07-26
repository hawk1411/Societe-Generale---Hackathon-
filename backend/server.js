// server.js
const express = require('express');
const dotenv = require('dotenv');
const fileRoutes = require('./routes/fileRoutes.js');
const cors = require('cors');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Routes
// ✅ This should mount routes like /upload
app.use('/', fileRoutes);

// Catch-all for unregistered routes
app.use((req, res) => {
  res.status(404).send('Route not found');
});

// app.use('/', fileRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
