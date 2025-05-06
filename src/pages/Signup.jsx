import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate,Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';  // Import Toastify styles

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    passwordHash: '',
    role: 'Member', // Default role
  });

  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://localhost:7046/api/Auth/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      // Show success toast
      toast.success('Registration successful!');

      // Redirect to home page after successful registration
      navigate('/'); // Replace with your actual home route
    } catch (err) {
      // Show error toast
      toast.error(err.response?.data || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-4xl font-semibold text-center mb-8 text-[#636AE8]">Sign Up</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username:</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8] transition"
              placeholder="Your username"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8] transition"
              placeholder="example.email@gmail.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              name="passwordHash"
              value={formData.passwordHash}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8] transition"
              placeholder="Enter at least 6+ characters"
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8] transition"
            >
              <option value="Member">Member</option>
              <option value="Admin">Admin</option>
            </select>
          </div>
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


          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold rounded-md bg-[#636AE8] hover:bg-[#525ad6] transition duration-300"
          >
            Sign Up
          </button>
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
