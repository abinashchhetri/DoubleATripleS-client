import React from "react";
import { ToastContainer } from 'react-toastify'; // Import ToastContainer

import "react-toastify/dist/ReactToastify.css"; // Import the CSS for Toastify
import AppRouter from "./Routes"; // Your Router component (handles routes)

const App = () => {
  return (
    <>
      <AppRouter /> {/* Your routing logic */}
      <ToastContainer /> {/* Add ToastContainer here */}
    </>
  );
};

export default App;
