import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TransactionContext } from "../context/TransactionProvider";

export const Logout = ({ closeMenu }) => {
  const { setIsLoggedIn } = useContext(TransactionContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/logout", {
        method: "POST",
        credentials: "include",
      });

      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);

      if (!response.ok) {
        const data = await response.json();
        alert(data.message || "Logout failed");
        return;
      }

      alert("Logged out successfully!");
      closeMenu?.();
      navigate("/");
    } catch (err) {
      console.error("Logout error:", err);
      alert("An unexpected error occurred.");
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="text-white hover:text-red-200 transition-colors duration-200 text-left"
    >
      Logout
    </button>
  );
};

export const Sidebar = ({ closeMenu }) => {
  const { isLoggedIn } = useContext(TransactionContext);

  return (
    <div className="flex flex-col w-full bg-teal-500 p-6 rounded-xl shadow-lg h-full">
      <ul className="flex flex-col gap-6 text-lg">
        <li>
          <Link
            to="/"
            className="text-white hover:text-teal-200 transition-colors duration-200"
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link
              to="/create"
              className="text-white hover:text-teal-200 transition-colors duration-200"
              onClick={closeMenu}
            >
              Create Transaction
            </Link>
          </li>
        )}
        {!isLoggedIn && (
          <li>
            <Link
              to="/login"
              className="text-white hover:text-teal-200 transition-colors duration-200"
              onClick={closeMenu}
            >
              Login/SignUp
            </Link>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <Logout closeMenu={closeMenu} />
          </li>
        )}
      </ul>
    </div>
  );
};
