import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa"; // Import logos

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("https://o-auth-login-backend.onrender.com/api/auth/forgot-password", { email })
      .then((res) => {
        toast.success(res.data.message);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-screen h-screen flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-3xl w-full sm:w-4/6 lg:w-2/6 p-10">
        <h1 className="text-4xl font-semibold text-center text-indigo-700 mb-8">Forgot Password</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
              className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Send Reset Link
          </button>

          <div className="text-center mt-4 text-sm text-gray-600">
            <span>Remembered your password?</span>
            <a href="/" className="text-blue-600 hover:underline ml-1">Login</a>
          </div>
        </form>

        <div className="mt-6 text-center">
          <h2 className="text-lg font-medium text-gray-700 mb-4">OR</h2>
          <div className="space-y-4">
            <button
              onClick={() => {
                window.location.href = "https://o-auth-login-backend.onrender.com/api/auth/google";
              }}
              className="w-full bg-red-600 text-white py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-red-700 transition-all duration-300"
            >
              <FaGoogle size={20} />
              <span>Sign up with Google</span>
            </button>

            <button
              onClick={() => {
                window.location.href = "https://o-auth-login-backend.onrender.com/api/auth/facebook";
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-blue-700 transition-all duration-300"
            >
              <FaFacebookF size={20} />
              <span>Sign up with Facebook</span>
            </button>

            <button
              onClick={() => {
                window.location.href = "https://o-auth-login-backend.onrender.com/api/auth/github";
              }}
              className="w-full bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-900 transition-all duration-300"
            >
              <FaGithub size={20} />
              <span>Sign up with GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
