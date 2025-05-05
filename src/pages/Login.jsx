import React from "react";
import { assets } from "../assets/assets"; // adjust the path as needed

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex overflow-hidden">
        {/* Left side: Login form */}
        <div className="w-1/2 p-10">
          <h2 className="text-3xl font-bold mb-8">Login</h2>
          <form className="space-y-6">
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                placeholder="example.email@gmail.com"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label className="block font-semibold mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter at least 8+ characters"
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
            Don't Have an account?{" "}
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
