import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the token from local storage or any state management
    localStorage.removeItem("jwtToken");
    // Redirect to the login page
    navigate("/");
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <h1 className="text-5xl font-bold">Welcome to the Dashboard!</h1>
        <p className="py-6">
          This is your dashboard where you can manage your tasks and activities.
        </p>
        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;