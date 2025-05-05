import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/Mainlayout";
import { About, Home, Login, Signup } from "../pages";
import { Contact } from "lucide-react";
import AllBooks from "../pages/AllBooks";

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
    </Routes>
  );
};

export default AppRouter;
