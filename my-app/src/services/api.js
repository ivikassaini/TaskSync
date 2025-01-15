import axios from "axios";

const API_URL = "http://localhost:8080/auth"; // Added http://

export const login = async (data) => {
  const response = await axios.post(`${API_URL}/login`, data); // Changed /auth/login to /login
  return response.data;
};

export const signup = async (data) => {
  console.log(data);
  const response = await axios.post(`${API_URL}/signup`, data);
  return response.data;
};