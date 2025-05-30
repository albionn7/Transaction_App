import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionProvider";
import { Navigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const { isLoggedIn } = useContext(TransactionContext);
  return isLoggedIn ? children : <Navigate to="/login" />;
};
