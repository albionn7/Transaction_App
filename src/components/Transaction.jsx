import React from "react";
import { useTransaction } from "../context/TransactionProvider";
import { Link } from "react-router-dom";
import { format } from "date-fns";

export const Transaction = ({ title, category, id, value, createdAt }) => {
  const { setTransactions, isLoggedIn } = useTransaction();
  const handleDelete = () => {
    fetch("http://localhost:8080/api/expenses/" + id, {
      method: "DELETE",
      credentials: "include",
    }).then(() => {
      setTransactions((values) => {
        return values.filter((item) => item.id !== id);
      });
    });
  };
  return (
    <div className="flex flex-col  items-start justify-items-start p-10 md:w-[320px] md:h-[370px]  gap-2  bg-amber-500  rounded-2xl">
      <h2 className="flex text-xl pb-10  font-bold ">Title: {title}</h2>
      <div className="flex flex-wrap md:flex-col  items-start md:h-[250px] gap-4 ">
        <p className="text-lg text-center">Category: {category.name}</p>
        <p className="text-lg text-center">Price: ${parseFloat(value)}</p>
        <p className="text-lg text-start ">
          Date: {format(createdAt, "MMMM do, yyyy")}
        </p>
      </div>
      {isLoggedIn && (
        <div className="flex justify-center items-center gap-3 mt-5 ">
          <Link
            to={`/edit/${id}`}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-xl hover:bg-blue-700"
          >
            Edit
          </Link>
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white font-bold py-2 px-4 rounded-xl cursor-pointer hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};
