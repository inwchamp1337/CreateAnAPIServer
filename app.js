require('dotenv').config();
const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const droneRoutes = require('./routes/droneRoutes');
const logRoutes = require('./routes/logRoutes');

const swaggerDocument = YAML.load('./swagger.yaml');

const app = express();
app.use(express.json());

// ตั้งค่า Swagger
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Drone API',
            version: '1.0.0',
            description: 'API for managing drones and logs',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Local server',
            },
        ],
    },
    apis: ['./routes/*.js'], // ระบุไฟล์ที่มี Swagger docs
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ใช้ prefix ที่ชัดเจนสำหรับแต่ละกลุ่มของ routes
app.use('/drones', droneRoutes);
app.use('/logs', logRoutes);

module.exports = app;

