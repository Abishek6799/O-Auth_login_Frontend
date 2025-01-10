import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Welcome = ({ setToken }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token"); 
    navigate("/"); 
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex flex-col justify-center items-center text-white text-center px-4">
      <h1 className="text-6xl font-extrabold text-indigo-50 mb-6">Welcome!</h1>
      <p className="text-2xl mb-8 text-indigo-100">You have logged in successfully.</p>

      <button
        onClick={handleLogout}
        className="bg-red-600 text-white py-3 px-10 rounded-lg hover:bg-red-700 transition-all duration-300 text-lg font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default Welcome;
