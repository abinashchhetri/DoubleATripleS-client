import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email.endsWith('@gmail.com')) {
      toast.error('Email must be a valid Gmail address');
      return;
    }

    if (formData.password.length < 7) {
      toast.error('Password must be at least 7 characters long');
      return;
    }

    try {
      const res = await axios.post('https://localhost:7163/api/auth/register', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      toast.success('Registration successful!');
      navigate('/login');
    } catch (err) {
      toast.error(err.response?.data || 'Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-4xl font-semibold text-center mb-8 text-[#636AE8]">Sign Up</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name:</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8]"
              placeholder="Your full name"
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
              required
              className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8]"
              placeholder="example@gmail.com"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#636AE8]"
              placeholder="Minimum 7 characters"
            />
          </div>

          <div className="flex items-start text-sm">
            <input type="checkbox" defaultChecked className="mt-1 mr-2 accent-[#636AE8]" />
            <span>
              By signing up, I agree to the{' '}
              <a href="#" className="text-[#636AE8] underline">Terms of Use</a> and{' '}
              <a href="#" className="text-[#636AE8] underline">Privacy Policy</a>.
            </span>
          </div>

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
