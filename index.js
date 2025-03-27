const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use the authRoutes for /auth paths
app.use('/auth', authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
