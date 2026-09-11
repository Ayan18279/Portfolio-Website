import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

export const fetchProjects = async () => {
  try {
    const response = await api.get('/projects');
    return response.data;
  } catch (error) {
    console.error('API Error (fetchProjects):', error);
    throw error.response?.data || { message: 'Failed to fetch projects. Backend API unreachable.' };
  }
};

export const sendContactMessage = async (contactData) => {
  try {
    const response = await api.post('/contact', contactData);
    return response.data;
  } catch (error) {
    console.error('API Error (sendContactMessage):', error);
    throw error.response?.data || { message: 'Failed to send message. Please check connection.' };
  }
};

export default api;
