import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout as apiLogout } from "../services/api"; // Renaming the import for clarity

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  // Initialize auth state from localStorage
  const [auth, setAuth] = useState(() => {
    const token = localStorage.getItem("jwtToken");
    const user = JSON.parse(localStorage.getItem("user"));
    return {
      isAuthenticated: !!token, // Check if token exists
      user: user,
      jwtToken: token,
    };
  });

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!auth.isAuthenticated) {
      navigate("/login"); // Redirect to login page
    }
  }, [auth.isAuthenticated, navigate]);

  const login = (user, token) => {
    setAuth({ isAuthenticated: true, user, jwtToken: token });
    localStorage.setItem("jwtToken", token);
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/dashboard");
  };

  const logout = async () => {
    try {
      await apiLogout(); // Call the API logout function
      setAuth({ isAuthenticated: false, user: null, jwtToken: null });
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("user");
      navigate("/"); // Redirect to the login page
    } catch (err) {
      console.error("Failed to logout:", err.response?.data?.message || "Unknown error");
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;