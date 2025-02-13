import axios from 'axios';

// Create axios instance with default config
const api = axios.create({
  baseURL: '/api',
  withCredentials: true,  // This enables sending cookies
  headers: {
    'Content-Type': 'application/json'
  }
});

// Define API methods
export default {
  // Auth
  login: (credentials) => api.post('/login/user', credentials),
  register: (userData) => api.post('/signup/user', userData),
  logout: () => api.get('/user/logout'),
  
  // User Profile
  getProfile: () => api.get('/user/profile'),
  updateProfile: (profileData) => api.patch('/user/profile/data', profileData),
  
  // Events
  subscribeToEvent: (eventId, userId) => api.post(`/user/events/${eventId}/subscribe`, { userId }),
  
  hospitalLogin: (credentials) => 
    api.post('/login/hospital', credentials),
    
  // Add other API calls here... Example: getUser: () => api.get('/user'), updateUser: (data) =>
  // api.put('/user', data),
}; 