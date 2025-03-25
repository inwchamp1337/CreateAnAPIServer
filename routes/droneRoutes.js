const express = require('express');
const router = express.Router();
const { getDroneConfig, getDroneStatus } = require('../controllers/droneController');

router.get('/configs/:droneId', getDroneConfig);
router.get('/status/:droneId', getDroneStatus);

module.exports = router;