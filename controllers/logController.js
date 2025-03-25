const logService = require('../services/logService');

const getDroneLogs = async (req, res) => {
    try {
        const { droneId } = req.params;
        const logs = await logService.fetchDroneLogs(droneId);

        // Map to only include required fields
        const filteredLogs = logs.map(log => ({
            drone_id: log.drone_id,
            drone_name: log.drone_name,
            created: log.created,
            country: log.country,
            celsius: log.celsius
        }));

        res.json(filteredLogs);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const createDroneLog = async (req, res) => {
    try {
        const { drone_id, drone_name, country, celsius } = req.body;

        if (!drone_id || !drone_name || !country || !celsius) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newLog = await logService.createDroneLog({
            drone_id,
            drone_name,
            country,
            celsius
        });

        res.status(201).json(newLog);
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getDroneLogs, createDroneLog };