import axios from 'axios';

const apiUrl = 'https://localhost:5111/api'; // Replace with your API URL

const roleService = {
  getRoles: async () => {
    try {
      const response = await axios.get(`${apiUrl}/Roles`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getRoleById: async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/Roles/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  createRole: async (RoleData) => {
    try {
      const response = await axios.post(`${apiUrl}/Roles`, RoleData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateRole: async (id, RoleData) => {
    try {
      const response = await axios.put(`${apiUrl}/Roles/${id}`, RoleData);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteRole: async (id) => {
    try {
      await axios.delete(`${apiUrl}/Roles/${id}`);
    } catch (error) {
      throw error;
    }
  },
};

export default roleService;