const axios = require('axios');
const { SERVER1_URL } = require('../config');

const fetchDrones = async () => {
    try {
        const response = await axios.get(SERVER1_URL);
        return response.data.data || [];
    } catch (error) {
        console.error("Error fetching data from Server1:", error);
        throw new Error("Failed to fetch drone data");
    }
};

module.exports = { fetchDrones };