require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express'); // ✅ เพิ่มตรงนี้
const YAML = require('yamljs');
const droneRoutes = require('./routes/droneRoutes');
const logRoutes = require('./routes/logRoutes');
const cors = require('cors'); // ✅ เพิ่มตรงนี้
const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
app.use(cors()); // ✅ เปิดใช้งาน CORS
app.use(express.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes
app.use('/', droneRoutes);
app.use('/', logRoutes);

module.exports = app;
