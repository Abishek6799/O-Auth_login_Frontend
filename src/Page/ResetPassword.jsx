import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrFormViewHide } from "react-icons/gr";
import { BiShowAlt } from "react-icons/bi";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { id, token } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://o-auth-login-backend.onrender.com/api/auth/reset-password/${id}/${token}`, {
        password,
      });
      toast.success(res.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      const errorMessage = error.response?.data?.message || "An error occurred. Please try again.";
      if (errorMessage.includes("expired")) {
        alert("The password reset link has expired. Please request a new link.");
      } else {
        toast.error(errorMessage);
      }
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-screen h-screen flex justify-center items-center">
      <div className="w-5/6 sm:w-4/5 lg:w-3/6 mx-auto shadow-2xl rounded-3xl bg-white p-8">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-6 text-center">Reset Your Password</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium text-gray-700">New Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Your New Password"
                required
                className="border-2 border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BiShowAlt /> : <GrFormViewHide />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
