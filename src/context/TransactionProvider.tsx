import React, { createContext, useContext, useEffect, useState } from "react";

interface TransactionType {
  id: number;
  title: string;
  value: string;
  createdAt: string;
  category: { id: number; name: string };
}
const TransactionContext = createContext<{
  transactions: TransactionType[];
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  addTransaction: (
    transaction: Omit<TransactionType, "id" | "createdAt">
  ) => Promise<void>;
  setTransactions: React.Dispatch<React.SetStateAction<TransactionType[]>>;
} | null>(null);

export function useTransaction() {
  const ctx = useContext(TransactionContext);
  if (!ctx) {
    throw new Error("you forgot to wrap component with <TransactionProvider/>");
  }
  return ctx;
}

export const TransactionProvider = ({ children }) => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

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

  const addTransaction = async (
    transaction: Omit<TransactionType, "id" | "createdAt">
  ) => {
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
      const newTransaction: TransactionType = await response.json();

      setTransactions((prevTransactions) => {
        return [...prevTransactions, newTransaction];
      });
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
