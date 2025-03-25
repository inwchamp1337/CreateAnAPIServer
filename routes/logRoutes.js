const express = require('express');
const router = express.Router();
const { getDroneLogs, createDroneLog } = require('../controllers/logController');

router.get('/logs/:droneId', getDroneLogs);
router.post('/logs', createDroneLog);

module.exports = router;