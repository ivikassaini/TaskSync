import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate()
  const { auth, logout } = useContext(AuthContext);

  const handleLogoutClick = () => {
    logout();
  };
  return (
    <div>
      <nav className="navbar bg-base-300">
        <div className="flex-1">
          <p className="text-xl">Welcome, {auth.user?.name}!</p>
        </div>
        <div className="flex-none">
          <button
            className="btn btn-circle btn-ghost"
            onClick={() => navigate("/profile")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9A3.75 3.75 0 1112 5.25 3.75 3.75 0 0115.75 9zM4.5 19.5a8.25 8.25 0 0115 0"
              />
            </svg>
          </button>
          <button className="btn btn-error ml-2" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
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