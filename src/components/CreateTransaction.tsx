import React, { useState } from "react";
import { useTransaction } from "../context/TransactionProvider";
import { useNavigate } from "react-router-dom";
import { useCategories } from "../context/CategoriesProvider";

export const CreateTransaction = () => {
  const { addTransaction, isLoggedIn } = useTransaction();
  const { categories } = useCategories();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    transactionDate: "",
    value: "",
    categoryId: "",
    title: "",
  });

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (
      !form.transactionDate ||
      !form.value ||
      !form.categoryId ||
      !form.title
    ) {
      alert("Please fill all fields");
      return;
    }

    if (isLoggedIn) {
      addTransaction(form);
    } else {
      alert("You have to be logged in to add expenses");
    }
    setForm({
      transactionDate: "",
      value: "",
      categoryId: "",
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
        <select
          name="categoryId"
          value={form.categoryId}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Select a category</option>
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
