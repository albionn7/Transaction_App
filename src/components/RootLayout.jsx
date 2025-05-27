import { Outlet } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const RootLayout = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen  bg-gray-100">
      <header className="bg-teal-500 py-4 m-2 px-6 rounded-xl shadow-lg mb-8">
        <div className="container mx-auto flex justify-between items-center">
          <Header />
          <div className="md:hidden text-white">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row max-h-screen ">
        <div
          className={`md:w-2/10 p-4 md:h-full flex flex-col justify-between items-center shadow-lg rounded-lg mb-6 md:m-5  ${
            isOpen ? "block" : "hidden md:block"
          }`}
        >
          <Sidebar closeMenu={() => setOpen(false)} />
        </div>

        <div className="flex-1 p-5 md:mx-10 md:py-20 bg-gray-200 rounded-lg shadow-lg overflow-auto md:h-[950px] h-[250px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
