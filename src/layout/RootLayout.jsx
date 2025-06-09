import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen  bg-gray-100">
      <Sidebar closeMenu={() => setOpen(false)} />

      <div className="flex flex-col md:flex-row max-h-screen ">
        <div className="w-[450px]"></div>
        <div className=" flex-1 p-5 md:mx-10 md:py-10 bg-gray-200 rounded-lg shadow-lg overflow-auto md:h-[950px] h-[250px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
// redux, legacy, :[not needed]
