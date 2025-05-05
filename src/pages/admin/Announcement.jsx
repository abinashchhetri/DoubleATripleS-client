import React from "react";

const Announcement = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-[#636AE8] mb-6">
        Manage Announcements
      </h2>

      {/* Form to Add Announcement */}
      <form className="space-y-4 mb-10">
        <div>
          <label className="block text-gray-700 mb-1">Title</label>
          <input
            type="text"
            placeholder="Enter announcement title"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#636AE8]"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            rows="4"
            placeholder="Write the announcement message..."
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#636AE8]"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#636AE8] text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Post Announcement
        </button>
      </form>

      {/* Existing Announcements List */}
      <div>
        <h3 className="text-xl font-medium text-gray-800 mb-4">
          Recent Announcements
        </h3>
        <ul className="space-y-3">
          {/* Example item */}
          <li className="border border-gray-200 rounded-md p-4 hover:shadow">
            <h4 className="text-[#636AE8] font-semibold">New Book Arrival</h4>
            <p className="text-sm text-gray-600">
              We’ve added new books to the library. Check them out now!
            </p>
            <span className="text-xs text-gray-400">Posted on: May 5, 2025</span>
          </li>
          {/* Repeat similar items or map from data */}
        </ul>
      </div>
    </div>
  );
};

export default Announcement;
