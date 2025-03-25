const axios = require('axios');
const { SERVER2_URL, SERVER2_TOKEN } = require('../config');

const fetchDroneLogs = async (droneId) => {
    try {
        const response = await axios.get(SERVER2_URL, {
            params: {
                filter: `drone_id=${droneId}`,
                sort: '-created',
                perPage: 25
            },
            headers: {
                'Authorization': `Bearer ${SERVER2_TOKEN}`
            }
        });
        return response.data.items || [];
    } catch (error) {
        console.error("Error fetching logs from Server2:", error);
        throw new Error("Failed to fetch drone logs");
    }
};

const createDroneLog = async (logData) => {
    try {
        const response = await axios.post(SERVER2_URL, logData, {
            headers: {
                'Authorization': `Bearer ${SERVER2_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating log on Server2:", error);
        throw new Error("Failed to create drone log");
    }
};

module.exports = { fetchDroneLogs, createDroneLog };