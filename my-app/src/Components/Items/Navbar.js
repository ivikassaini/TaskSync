import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../../services/api"; 
export const Navbar = () => {
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
          // Optional: Call logout API to invalidate the token on the server
          await logout();
    
          // Clear the token from local storage
          localStorage.removeItem("jwtToken");
    
          // Redirect to the login page
          navigate("/login");
        } catch (err) {
          console.error("Failed to logout:", err.message || "Unknown error");
        }
      };
  return (
    <div class="navbar bg-base-100">
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
    <div class="flex-1">
      <a class="btn btn-ghost text-xl">ColaB</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block h-5 w-5 stroke-current">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
        </svg>
      </button>
      <button className="btn btn-primary" onClick={handleLogout}>
           Logout
         </button>
    </div>
  </div>
  )
}