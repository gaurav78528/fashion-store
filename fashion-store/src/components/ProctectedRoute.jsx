import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProctectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  // console.log({ isAuthenticated, isLoading });

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProctectedRoute;
