import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user");

  // agar user login nahi hai to login page pe bhej do
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // agar login hai to child component (Dashboard etc.) dikhao
  return children;
};

export default ProtectedRoute;
