import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProctectedRoute = ({ children }) => {
  const { isLoading, isAuthenticated } = useSelector(
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
