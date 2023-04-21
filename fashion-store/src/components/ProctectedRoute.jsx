import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineAssignmentReturn } from "react-icons/md";

const ProctectedRoute = ({ children }) => {
  const { isLoading, isAuthenticated } = useSelector((state) => state.auth);

  // console.log({ isAuthenticated, isLoading });

  return (
    <>{!isLoading && !isAuthenticated ? <Navigate to="/login" /> : children}</>
  );
  // MdOutlineAssignmentReturn;
};

export default ProctectedRoute;
