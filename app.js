require('dotenv').config();
const express = require('express');
const droneRoutes = require('./routes/droneRoutes');

const app = express();
app.use(express.json());
app.use('/', droneRoutes);

module.exports = app;