import axios from 'axios';

const apiUrl = 'https://localhost:5111/api'; // Replace with your API URL

const UserService = {
  getUsers: async () => {
    try {
      const response = await axios.get(`${apiUrl}/Users`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getUserById: async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/Users/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createUser: async (UserData) => {
    try {
      const response = await axios.post(`${apiUrl}/Users`, UserData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (id, UserData) => {
    try {
      const response = await axios.put(`${apiUrl}/Users/${id}`, UserData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (id) => {
    try {
      await axios.delete(`${apiUrl}/Users/${id}`);
    } catch (error) {
      throw error;
    }
  },
};

export default UserService;