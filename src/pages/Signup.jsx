import React from 'react';
import { Link } from 'react-router-dom'; // ensure you're using react-router-dom

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-4xl font-semibold text-center mb-8 text-[#636AE8]">Sign Up</h2>

        <form className="space-y-6">

          {/* First & Last Name */}
          <div className="flex gap-6">
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name:</label>
              <input
                type="text"
                className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8] transition"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name:</label>
              <input
                type="text"
                className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8] transition"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8] transition"
              placeholder="example.email@gmail.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8] transition"
              placeholder="Enter at least 8+ characters"
            />
          </div>

          {/* Terms agreement */}
          <div className="flex items-start text-sm">
            <input
              type="checkbox"
              defaultChecked
              className="mt-1 mr-2 accent-[#636AE8]"
            />
            <span>
              By signing up, I agree with the{' '}
              <a href="#" className="text-[#636AE8] underline">Terms of Use</a>{' '}
              & <a href="#" className="text-[#636AE8] underline">Privacy Policy</a>
            </span>
          </div>

          {/* Sign up button */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md bg-[#636AE8] hover:bg-[#525ad6] transition duration-300"
          >
            Sign Up
          </button>

          {/* Login link */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="text-[#636AE8] underline">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
