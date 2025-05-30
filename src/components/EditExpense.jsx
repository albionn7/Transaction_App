import React, { useEffect, useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TransactionContext } from "../context/TransactionProvider.jsx";
import { CategoriesContext } from "../context/CategoriesProvider.jsx";

export const EditExpense = () => {
  const { id } = useParams();
  const { transactions } = useContext(TransactionContext);
  const { categories } = useContext(CategoriesContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    transactionDate: "",
    value: "",
    categoryId: "",
    title: "",
  });

  useEffect(() => {
    const expense = transactions.find((expense) => expense.id === parseInt(id));
    if (expense) {
      setForm({
        transactionDate: expense.transactionDate,
        value: expense.value,
        categoryId: expense.category.id,
        title: expense.title,
      });
    } else {
      alert("Could not find the transaction");
    }
  }, [id, transactions]);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:8080/api/expenses/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(form),
    });
    if (res.ok) {
      alert("You just modified this expense");
      navigate("/");
      navigate(0);
    } else {
      alert("something went wrong, you can't edit");
    }
  };
  return (
    <>
      <h1 className="py-20 text-center text-3xl font-bold tracking-tight text-gray-700">
        Edit This Expense
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-sm mx-auto"
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
        <select
          name="categoryId"
          value={form.categoryId}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
        >
          <option value="categoryId">Select a category</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <label>Amount</label>
        <input
          type="number"
          name="value"
          value={form.value}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"
        />

        <label>Date</label>
        <input
          type="date"
          name="transactionDate"
          value={form.transactionDate}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg  focus:border-blue-500 block w-full p-2.5"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded-xl"
        >
          Update Transaction
        </button>
      </form>
    </>
  );
};
