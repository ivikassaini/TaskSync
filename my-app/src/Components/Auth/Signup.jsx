import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import { signup } from "../../services/api"; // Ensure the path is correct
import { AuthContext } from "../../context/AuthContext"; // Adjust the import path

const Signup = () => {
  const { login } = useContext(AuthContext); // Access login function from AuthContext
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await signup({ email, password, name });
      console.log("Signup successful:", response);
      
      // Call login method from AuthContext to set auth state
      login({ email: response.email, name: response.name }, response.jwtToken);
      
      // Navigate to the dashboard after successful signup
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response?.data?.message || "Something went wrong");
      setError(err.response?.data?.message || "Something went wrong"); // Set error message
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">
            Create an account and join the collaborative workspace!
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <form className="card-body" onSubmit={handleSignup}>
            {error && <div className="alert alert-error">{error}</div>} {/* Show error message */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type="submit">
                Sign Up
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p>
              Do you have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer font-bold"
                onClick={() => navigate("/login")} // Navigates to Login page
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;