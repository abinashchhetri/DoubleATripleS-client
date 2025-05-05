import React from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "../components/Mainlayout";
import { About, Home, Login, Signup } from "../pages";
import { Contact } from "lucide-react";
import AllBooks from "../pages/AllBooks";
import AllCategories from '../pages/admin/AllCategories';
import CreateCategory from '../pages/admin/CreateCategory';
import EditCategory from '../pages/admin/EditCategory';

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

      <Route 
        // path="/admin" 
        // element={
        //   <PrivateRoute roles={['Admin']}>
        //     <AdminLayout />
        //   </PrivateRoute>
        // }
      >

      {/* Category Management Routes */}
      <Route path="categories" element={<AllCategories />} />
        <Route path="categories/create" element={<CreateCategory />} />
        <Route path="categories/edit/:id" element={<EditCategory />} />
      </Route>

    </Routes>

    

  );
};

export default AppRouter;
