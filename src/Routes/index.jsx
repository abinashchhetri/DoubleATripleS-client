import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/Mainlayout";
import { About, Home, Login, Signup } from "../pages";
import { Contact } from "lucide-react";
import AllBooks from "../pages/AllBooks";
import AdminLayout from "../components/admin/AdminLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="books" element={<AllBooks />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<h1>Admin Dashboard</h1>} />
        <Route path="books" element={<h1>Admin Books</h1>} />
        <Route path="users" element={<h1>Admin Users</h1>} />
        <Route path="announcements" element={<h1>Admin Announcements</h1>} />
        <Route path="orders" element={<h1>Admin Orders</h1>} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
