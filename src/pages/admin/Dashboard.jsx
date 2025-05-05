import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-[#636AE8] mb-6">
        Admin Dashboard
      </h2>

      {/* Quick Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-4 bg-[#636AE8] text-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Total Users</h3>
          <p className="text-2xl mt-2">1,204</p>
        </div>
        <div className="p-4 bg-[#636AE8] text-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Books Listed</h3>
          <p className="text-2xl mt-2">350</p>
        </div>
        <div className="p-4 bg-[#636AE8] text-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Orders</h3>
          <p className="text-2xl mt-2">870</p>
        </div>
        <div className="p-4 bg-[#636AE8] text-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Announcements</h3>
          <p className="text-2xl mt-2">12</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-10">
        <h3 className="text-xl font-medium text-gray-800 mb-4">
          Recent Activity
        </h3>
        <ul className="space-y-3">
          <li className="border border-gray-200 rounded-md p-4 hover:shadow">
            <p className="text-gray-700">New book "Atomic Habits" added</p>
            <span className="text-xs text-gray-400">Today at 10:45 AM</span>
          </li>
          <li className="border border-gray-200 rounded-md p-4 hover:shadow">
            <p className="text-gray-700"> New announcement posted</p>
            <span className="text-xs text-gray-400">Yesterday at 3:20 PM</span>
          </li>
          <li className="border border-gray-200 rounded-md p-4 hover:shadow">
            <p className="text-gray-700">User "john_doe" registered</p>
            <span className="text-xs text-gray-400">May 4 at 11:02 AM</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
