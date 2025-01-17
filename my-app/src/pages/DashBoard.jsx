import React from "react"; 
import { Navbar } from "../components/Items/Navbar";
 import { VerifyToken } from "../components/Auth/VerifyToken";
const Dashboard = () => {
  
  VerifyToken();
  return (
   <div>
    <Navbar/>
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