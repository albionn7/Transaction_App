import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = ({ closeMenu }) => {
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
        <li>
          <Link
            to="/create"
            className="text-white hover:text-teal-200 transition-colors duration-200"
            onClick={closeMenu}
          >
            Create Transaction
          </Link>
        </li>

        <li>
          <Link
            to=""
            className="text-white hover:text-teal-200 transition-colors duration-200"
            onClick={closeMenu}
          >
            Login/SignUp
          </Link>
        </li>
      </ul>
    </div>
  );
};
