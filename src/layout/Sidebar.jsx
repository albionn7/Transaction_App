import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TransactionContext } from "../context/TransactionProvider";
import { Logout } from "../pages/Logout";

import Hamburger from "hamburger-react";
export const Sidebar = ({ closeMenu }) => {
  const { isLoggedIn } = useContext(TransactionContext);

  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <header className="bg-teal-500 sticky top-2  py-4 m-2 px-6 rounded-xl shadow-lg mb-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex justify-center  items-center text-2xl py-1 text-white w-full ">
            <h3>Transactions</h3>
          </div>
          <div className="md:hidden text-white">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </header>
      <div
        className={`md:w-2/10 p-3 flex flex-col justify-between items-center md:absolute h-64 top-24 shadow-lg rounded-lg mb-3 md:m-5 ${
          isOpen ? "block" : "hidden md:block"
        }`}
      >
        <div className="flex flex-col  w-full bg-teal-500 p-6 rounded-xl shadow-lg h-full">
          <ul className="flex flex-col gap-7 md:pt-5 p-2 text-lg">
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
              <li className="text-white hover:text-teal-200 transition-colors cursor-pointer duration-200 ">
                <Logout closeMenu={closeMenu} />
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};
