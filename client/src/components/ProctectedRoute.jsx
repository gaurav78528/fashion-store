import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineAssignmentReturn } from "react-icons/md";

const ProctectedRoute = ({ children }) => {
  const { isLoading, isAuthenticated, user } = useSelector(
    (state) => state.auth
  );

  // console.log({ isAuthenticated, isLoading });

  return (
    <>
      {isLoading === false && !isAuthenticated ? (
        <Navigate to="/login" />
      ) : (
        children
      )}
    </>
  );
  // MdOutlineAssignmentReturn;
};

export default ProctectedRoute;