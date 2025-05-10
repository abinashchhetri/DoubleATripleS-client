import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData.email, formData.password);
  };

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        "https://localhost:7163/api/auth/login", // Backend login endpoint
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Store JWT token in localStorage
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful!");
      
      // Redirect based on role
      if (res.data.token) {
        const decodedToken = decodeJwt(res.data.token); // Function to decode JWT
        if (decodedToken.role === "Admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }
    } catch (err) {
      toast.error(err.response?.data || "Login failed");
    }
  };

  // Decode JWT (basic version)
  const decodeJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => `%${("00" + c.charCodeAt(0).toString(16)).slice(-2)}`)
        .join("")
    );
    return JSON.parse(jsonPayload);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex overflow-hidden">
        {/* Left side: Login form */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-8">Login</h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example.email@gmail.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition"
            >
              Login
            </button>
          </form>
          <p className="mt-6 text-sm">
            Don't have an account?{" "}
            <a href="/signup" className="text-indigo-600 font-medium hover:underline">
              Sign up
            </a>
          </p>
        </div>

        {/* Right side: Image */}
        <div className="w-1/2 bg-indigo-500 flex items-center justify-center">
          <img src={assets.login} alt="Login Illustration" className="w-3/4" />
        </div>
      </div>
    </div>
  );
};

export default Login;
