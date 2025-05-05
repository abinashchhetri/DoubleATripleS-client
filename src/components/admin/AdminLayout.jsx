import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="text-default min-h-screen bg-white">
      <div className="flex">
        <Sidebar />
        <div className="px-[5%] py-[2%] ">{<Outlet />}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
