import axios from 'axios';

const API_BASE = 'https://university-backend-production-2bed.up.railway.app/api/auth'; // Use local backend for development

// Register new user
export const registerUser = async (userData) => {
  return await axios.post(`${API_BASE}/register`, userData);
};

// Login user
export const loginUser = async (email, password) => {
  return await axios.post(`${API_BASE}/login`, {
    email,
    password,
  });
};
