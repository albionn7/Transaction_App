import React, { createContext, useEffect, useState } from "react";
const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
    } else {
      localStorage.removeItem("isLoggedIn");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    fetch("http://localhost:8080/api/expenses")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Couldn't fetch expenses");
        }
        return res.json();
      })
      .then((data) => {
        setTransactions(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err.message);
      });
  }, []);

  const addTransaction = async (transaction) => {
    try {
      const response = await fetch("http://localhost:8080/api/expenses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(transaction),
      });
      if (!response.ok) {
        throw new Error("Couldnt add the new expense");
      }
      transaction = await response.json();

      setTransactions((prevTransactions) => [...prevTransactions, transaction]);
    } catch (error) {
      console.log("Add transaction error:", error.message);
    }
  };
  return (
    <TransactionContext.Provider
      value={{
        transactions,
        addTransaction,
        isLoggedIn,
        setIsLoggedIn,
        setTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
export { TransactionContext };
