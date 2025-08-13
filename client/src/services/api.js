import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // ✅ must match backend
});

export const loginUser = (data) => API.post('/auth/login', data);
export const registerUser = (data) => API.post('/auth/register', data);
export const fetchDashboard = (token) =>
  API.get('/dashboard', { headers: { Authorization: `Bearer ${token}` } });
export const fetchHackathons = () => API.get('/hackathons');
export const submitHackathon = (name, token) =>
  API.post('/hackathons', { name }, { headers: { Authorization: `Bearer ${token}` } });
