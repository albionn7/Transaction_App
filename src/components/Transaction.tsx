import React from "react";

export const Transaction = ({ title, category, amount, transactionDate }) => {
  return (
    <div className="flex flex-col  items-start justify-items-start p-10 md:w-[290px] md:h-[350px]  gap-2  bg-amber-500  rounded-2xl">
      <h2 className="flex text-xl pb-10  font-bold ">Title: {title}</h2>
      <div className="flex flex-wrap md:flex-col  items-start md:h-[250px] gap-2 ">
        <p className="text-lg text-center">Category: {category}</p>
        <p className="text-lg text-center">Amount: {amount}</p>
        <p className="text-lg text-center">Date: {transactionDate}</p>
      </div>
      <div className="flex justify-center items-center gap-3 mt-5 ">
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-red-700">
          Edit
        </button>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700">
          Delete
        </button>
      </div>
    </div>
  );
};
