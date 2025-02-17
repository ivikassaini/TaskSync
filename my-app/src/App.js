import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/SignUp";
import Dashboard from "./pages/DashBoard"
import { Navigate } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Profile from "./pages/profile";


function App() {
  return (
    <Router>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>404: Page not found</h1>} />
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;