import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate()
  const { auth, logout } = useContext(AuthContext);
  useEffect(() => {
    if (!auth.isAuthenticated) {
      navigate("/login"); // Redirect to login page
    }
  }, [auth.isAuthenticated, navigate]);
  console.log(auth.user)
  const handleLogoutClick = () => {
    logout();  
  };
  return (
    <div>
      <nav className="navbar bg-base-300">
        <div className="flex-1">
          <p className="text-xl">Welcome, {auth.user?.name}!</p>
        </div>
        <button className="btn btn-error" onClick={handleLogoutClick}>
          Logout
        </button>
      </nav>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <h1 className="text-5xl font-bold">Welcome to the Dashboard!</h1>
          <p className="py-6">
            This is your dashboard where you can manage your tasks and activities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;