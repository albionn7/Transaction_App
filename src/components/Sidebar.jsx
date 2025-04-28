import React from "react";

export const Sidebar = () => {
  return (
    <div className="flex flex-row h-auto align-middle items-center justify-center ">
      <ul className="flex flex-col gap-10 text-md">
        <li>Home</li>
        <li>Create New Transaction</li>
        <li>Login/SignUp</li>
      </ul>
    </div>
  );
};
