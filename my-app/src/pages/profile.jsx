import React, { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../services/api";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    age: "",
    state: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(profile);

  const navigate = useNavigate(); // Initialize navigate from useNavigate

  // Fetch profile data on component mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userData = await getProfile();
        setProfile(userData);
        setFormData(userData);
      } catch (err) {
        console.error("Error fetching profile:", err.message || "Unknown error");
      }
    };
    fetchProfile();
  }, []);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle profile update
  const handleUpdate = async () => {
    try {
      const updatedUser = await updateProfile(formData);
      setProfile(updatedUser);
      setIsEditing(false);
    } catch (err) {
      console.error("Error updating profile:", err.message || "Unknown error");
    }
  };

  // Handle back to dashboard
  const goBackToDashboard = () => {
    navigate("/dashboard"); // Navigate to dashboard route
  };

  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-8">
      {/* Cross Button to go back */}
      <button
        className="absolute top-2 right-5 text-5xl text-white"
        onClick={goBackToDashboard}
      >
        ×
      </button>

      {/* Profile Heading */}
      <h1 className="text-5xl font-bold text-white mb-12">Profile</h1>

      {/* Profile Container */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white max-w-5xl w-full p-12 rounded-lg shadow-lg flex items-center justify-center gap-40">
        {/* Photo Placeholder */}
        <div className="flex-shrink-0 w-56 h-56 bg-gray-600 rounded-full flex items-center justify-center shadow-inner">
          <span className="text-white text-2xl">Photo</span>
        </div>

        {/* User Info */}
        <div className="flex-1 space-y-6 flex flex-col items-start justify-center">
          {isEditing ? (
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-300">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input input-bordered w-full text-lg"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-300">Age</label>
                <input
                  type="text"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="input input-bordered w-full text-lg"
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-300">State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="input input-bordered w-full text-lg"
                />
              </div>
              <button className="btn btn-primary mt-4" onClick={handleUpdate}>
                Save
              </button>
              <button
                className="btn btn-secondary mt-4 ml-4"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center">
                <span className="font-semibold text-xl w-40">Name:</span>
                <div className="input input-bordered w-full text-lg bg-gray-800 text-white flex items-center">
                  {profile.name || "Not provided"}
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-xl w-40">Email:</span>
                <div className="input input-bordered w-full text-lg bg-gray-800 text-white flex items-center">
                  {profile.email}
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-xl w-40">Age:</span>
                <div className="input input-bordered w-full text-lg bg-gray-800 text-white flex items-center">
                  {profile.age || "Not provided"}
                </div>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-xl w-40">State:</span>
                <div className="input input-bordered w-full text-lg bg-gray-800 text-white flex items-center">
                  {profile.state || "Not provided"}
                </div>
              </div>
              <button
                className="btn btn-primary mt-4"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
