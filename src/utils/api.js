import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const fetchMetrics = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/metrics`);
    console.log("Fetched metrics:", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching metrics:', error);
    return null;
  }
};

export const fetchPredictions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/predictions`);
    console.log("Fetched predictions:", response);
    return response.data;
  } catch (error) {
    console.error('Error fetching predictions:', error);
    return null;
  }
};

// Export constants as part of an object
export const apiConstants = {
  API_BASE_URL_CONSTANT: API_BASE_URL,
  // METRICS_ACCURACY: 0.85, // Replace with actual accuracy value
};
