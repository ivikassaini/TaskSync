import axios from "axios";

const API_URL = "http://localhost:8080/auth";

// Login API call
export const login = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data; // Return the response data directly
  } catch (err) {
    throw err.response?.data || { message: "Login failed" };
  }
};

// Signup API call
export const signup = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, data);
    return response.data;
  } catch (err) {
    throw err.response?.data || { message: "Signup failed" };
  }
};

// Logout API call
export const logout = async () => {
  try {
    const response = await axios.post(`${API_URL}/logout`);
    return response.data.message; // Assuming the API sends a "message" in the response
  } catch (err) {
    throw err.response?.data || { message: "Logout failed" };
  }
};