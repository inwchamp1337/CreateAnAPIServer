const droneService = require('../services/droneService');

const getDroneConfig = async (req, res) => {
    try {
        const { droneId } = req.params;
        const drones = await droneService.fetchDrones();
        const drone = drones.find(d => d.drone_id === parseInt(droneId, 10));

        if (!drone) return res.status(404).json({ error: "Drone not found" });

        res.json({
            drone_id: drone.drone_id,
            drone_name: drone.drone_name,
            light: drone.light,
            country: drone.country,
            weight: drone.weight
        });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

const getDroneStatus = async (req, res) => {
    try {
        const { droneId } = req.params;
        const drones = await droneService.fetchDrones();
        const drone = drones.find(d => d.drone_id === parseInt(droneId, 10));

        if (!drone) return res.status(404).json({ error: "Drone not found" });

        res.json({ condition: drone.condition });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { getDroneConfig, getDroneStatus };