import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GrFormViewHide } from "react-icons/gr";
import { BiShowAlt } from "react-icons/bi";
import { FaGoogle, FaFacebookF, FaGithub } from "react-icons/fa"; // Import logos

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await axios
      .post("http://localhost:4000/api/auth/login", payload)
      .then((res) => {
        toast.success(res.data.message);
        const token = res.data.token;
        setToken(token);
        localStorage.setItem("token", token);
        navigate("/welcome");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-screen h-screen flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-3xl w-full sm:w-4/6 lg:w-2/6 p-10">
        <h1 className="text-4xl font-semibold text-center text-indigo-700 mb-8">Login</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-medium text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              required
              className="border-2 border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-lg font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your password"
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
            className="w-full bg-indigo-600 text-white p-3 rounded-lg hover:bg-indigo-700 transition-all duration-300"
          >
            Login
          </button>
        </form>

        <div className="flex justify-between mt-4 text-sm text-gray-600">
          <Link to="/register" className="hover:text-indigo-600 hover:underline">Don't have an account? Register</Link>
          <Link to="/forgot-password" className="hover:text-indigo-600 hover:underline">Forgot Password?</Link>
        </div>

        <div className="mt-6 text-center">
          <h2 className="text-lg font-medium text-gray-700 mb-4">OR</h2>
          <div className="space-y-4">
            <button
              onClick={() => {
                window.location.href = "http://localhost:4000/api/auth/google";
              }}
              className="w-full bg-red-600 text-white py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-red-700 transition-all duration-300"
            >
              <FaGoogle size={20} />
              <span>Sign in with Google</span>
            </button>

            <button
              onClick={() => {
                window.location.href = "http://localhost:4000/api/auth/facebook";
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-blue-700 transition-all duration-300"
            >
              <FaFacebookF size={20} />
              <span>Sign in with Facebook</span>
            </button>

            <button
              onClick={() => {
                window.location.href = "http://localhost:4000/api/auth/github";
              }}
              className="w-full bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center space-x-3 hover:bg-gray-900 transition-all duration-300"
            >
              <FaGithub size={20} />
              <span>Sign in with GitHub</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
