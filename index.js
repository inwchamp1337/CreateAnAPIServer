require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 3000;
const SERVER1_URL = process.env.SERVER1_URL;

// ฟังก์ชันดึงข้อมูลจาก Server1
const fetchDrones = async () => {
    try {
        const response = await axios.get(SERVER1_URL);
        return response.data.data || [];
    } catch (error) {
        console.error("Error fetching data from Server1:", error);
        throw new Error("Failed to fetch drone data");
    }
};

// GET /configs/:droneId
app.get("/configs/:droneId", async (req, res) => {
    try {
        const { droneId } = req.params;
        const drones = await fetchDrones();
        const drone = drones.find(d => d.drone_id === parseInt(droneId, 10));

        if (!drone) {
            return res.status(404).json({ error: "Drone not found" });
        }

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
});

// GET /status/:droneId
app.get("/status/:droneId", async (req, res) => {
    try {
        const { droneId } = req.params;
        const drones = await fetchDrones();
        const drone = drones.find(d => d.drone_id === parseInt(droneId, 10));

        if (!drone) {
            return res.status(404).json({ error: "Drone not found" });
        }

        res.json({ condition: drone.condition });

    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
