import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets"; // Adjust path if needed

const Navbar = () => {
  const [isAccountCreated, setIsAccountCreated] = useState(false);

  const handleCreateAccountClick = () => {
    setIsAccountCreated(true);
  };

  if (isAccountCreated) return null; // Hide the navbar after clicking the "Create Account" button

  return (
    <div className="max-w-[1400px] mx-auto bg-white mt-4">
      {/* Logo and Navbar */}
      <div className="flex items-center justify-between p-5">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={assets.logo} alt="BookMate Logo" className="h-12 w-auto" />
        </Link>

        {/* Menu */}
        <div className="hidden md:flex space-x-10 items-center text-lg font-medium">
          <NavLink
            to="/"
            activeClassName="text-[#636AE8] border-b-4 border-[#636AE8] pb-2"
            className="text-gray-700 hover:text-[#636AE8] transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/books"
            activeClassName="text-[#636AE8] border-b-4 border-[#636AE8] pb-2"
            className="text-gray-700 hover:text-[#636AE8] transition"
          >
            Books
          </NavLink>
          <NavLink
            to="/categories"
            activeClassName="text-[#636AE8] border-b-4 border-[#636AE8] pb-2"
            className="text-gray-700 hover:text-[#636AE8] transition"
          >
            Categories
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="text-[#636AE8] border-b-4 border-[#636AE8] pb-2"
            className="text-gray-700 hover:text-[#636AE8] transition"
          >
            Contact
          </NavLink>
        </div>

        {/* Create Account Button */}
        {!isAccountCreated && (
          <div>
            <Link
              to="/signup"
              onClick={handleCreateAccountClick}
              className="border border-[#636AE8] text-[#636AE8] px-6 py-3 rounded-xl hover:bg-[#636AE8] hover:text-white transition duration-300 text-lg"
            >
              Create Account
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
