const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
app.use(bodyParser.json());

// Import routes
const brandRoutes = require('./routes/brands');

// Use routes
app.use('/brands', brandRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
app.use(bodyParser.json());

// Import routes
const brandRoutes = require('./routes/brands');
const modelRoutes = require('./routes/models');
const featureRoutes = require('./routes/features');
const dealershipRoutes = require('./routes/dealerships');

// Use routes
app.use('/brands', brandRoutes);
app.use('/models', modelRoutes);
app.use('/features', featureRoutes);
app.use('/dealerships', dealershipRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, async () => {
  console.log(`Server running on http://localhost:${PORT}`);
  await sequelize.authenticate();
  console.log('Database connected!');
});
