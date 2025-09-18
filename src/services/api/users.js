import axios from 'axios';

const apiUrl = 'https://localhost:5111/api'; // Replace with your API URL


const userService = {
  getUsers: async () => {
    try {
      const response = await axios.get(`${apiUrl}/users`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUserById: async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/users/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createUser: async (userData) => {
    try {
      const response = await axios.post(`${apiUrl}/users`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (id, userData) => {
    try {
      const response = await axios.put(`${apiUrl}/users/${id}`, userData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (id) => {
    try {
      await axios.delete(`${apiUrl}/users/${id}`);
    } catch (error) {
      throw error;
    }
  },
};

export default userService;