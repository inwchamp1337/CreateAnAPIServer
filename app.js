require('dotenv').config();
const express = require('express');
const droneRoutes = require('./routes/droneRoutes');
const logRoutes = require('./routes/logRoutes');

const app = express();
app.use(express.json());
app.use('/', droneRoutes);
app.use('/', logRoutes);

module.exports = app;