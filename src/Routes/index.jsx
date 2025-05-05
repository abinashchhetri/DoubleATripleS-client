import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/Mainlayout";
import { About, Home, Login, Signup } from "../pages";
import { Contact } from "lucide-react";
import AllBooks from "../pages/AllBooks";
import AdminLayout from "../components/admin/AdminLayout";

import Order from "../pages/admin/Order";
import User from "../pages/admin/User";

import BookDetails from "../pages/BookDetails";

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
        <Route path="books/:id" element={<BookDetails />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<h1>Admin Dashboard</h1>} />
        <Route path="books" element={<h1>Admin Books</h1>} />
        <Route path="users" element={<User/>} />
        <Route path="announcements" element={<h1>Admin Announcements</h1>} />
        <Route path="orders" element= {<Order/>}/>
      </Route>
    </Routes>
  );
};

export default AppRouter;
