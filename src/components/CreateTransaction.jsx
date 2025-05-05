import React, { useContext, useState } from "react";
import { TransactionContext } from "../context/TransactionProvider.jsx";
import { useNavigate } from "react-router-dom";

export const CreateTransaction = () => {
  const { addTransaction } = useContext(TransactionContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    transactionDate: "",
    amount: "",
    category: "",
    title: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.transactionDate ||
      !form.amount ||
      !form.category ||
      !form.title
    ) {
      alert("Please fill all fields");
      return;
    }
    addTransaction(form);
    setForm({
      transactionDate: "",
      amount: "",
      category: "",
      title: "",
    });
    navigate("/");
  };

  return (
    <div className="flex w-full text-gray-900">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-sm w-full mx-auto gap-4"
      >
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"
        />

        <label>Category</label>
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
        />

        <label>Amount</label>
        <input
          type="number"
          name="amount"
          value={form.amount}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
        />

        <label>Transaction Date</label>
        <input
          type="date"
          name="transactionDate"
          value={form.transactionDate}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"
        />

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
        >
          Create Transaction
        </button>
      </form>
    </div>
  );
};
