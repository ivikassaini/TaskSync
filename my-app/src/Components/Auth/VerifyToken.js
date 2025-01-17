import { redirect, useNavigate} from "react-router-dom";
import  { useEffect } from "react"; 
export const VerifyToken = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        // If no token, redirect to the login page 
        navigate("/login");
      }else{
        navigate("/dashboard");
      }
    }, [navigate]); 
 return true;
}