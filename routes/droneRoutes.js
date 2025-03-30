const express = require('express');
const router = express.Router();
const { getDroneConfig, getDroneStatus } = require('../controllers/droneController');

/**
 * @swagger
 * tags:
 *   name: Drones
 *   description: Drone management API
 */

/**
 * @swagger
 * /configs/{droneId}:
 *   get:
 *     summary: Get drone configuration
 *     tags: [Drones]
 *     parameters:
 *       - in: path
 *         name: droneId
 *         required: true
 *         schema:
 *           type: string
 *         description: The drone ID
 *     responses:
 *       200:
 *         description: Successfully retrieved drone configuration
 *       404:
 *         description: Drone not found
 */
router.get('/configs/:droneId', getDroneConfig);

/**
 * @swagger
 * /status/{droneId}:
 *   get:
 *     summary: Get drone status
 *     tags: [Drones]
 *     parameters:
 *       - in: path
 *         name: droneId
 *         required: true
 *         schema:
 *           type: string
 *         description: The drone ID
 *     responses:
 *       200:
 *         description: Successfully retrieved drone status
 *       404:
 *         description: Drone not found
 */
router.get('/status/:droneId', getDroneStatus);

module.exports = router;
