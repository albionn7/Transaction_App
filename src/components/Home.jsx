import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { TransactionContext } from "../context/TransactionProvider";
import { dummyTransactions } from "../data/dummyData";
export const Home = () => {
  const { transactions } = useContext(TransactionContext);
  // const dummyTransactions = [
  //   {
  //     id: 1,
  //     transactionDate: "2023-10-01",
  //     amount: 100,
  //     category: "Food",
  //     title: "Sample transaction 1",
  //   },
  //   {
  //     id: 2,
  //     transactionDate: "2024-10-02",
  //     amount: 200,
  //     category: "Transport",
  //     title: "Sample transaction 2",
  //   },
  // ];
  return (
    <main className="flex flex-wrap  ml-0  p-6 overflow-x-auto overflow-y-auto x-auto">
      <div className="flex flex-wrap md:flex-row  justify-center w-full items-center gap-5  md:h-[6-650px]">
        {transactions.length === 0 ? (
          <p>No transactions</p>
        ) : (
          transactions.map((data, id) => <Transaction key={id} {...data} />)
        )}
      </div>
    </main>
  );
};
