const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const trainsRoutes = require('./routes/trains');
const authenticationMiddleware = require('./middleware/authenticationMiddleware');

app.use(express.json());

// Authentication middleware to check if requests have a valid token
app.use(authenticationMiddleware);

app.use('/auth', authRoutes);
app.use('/trains', trainsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
