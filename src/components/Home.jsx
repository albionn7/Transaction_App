import React, { useContext, useEffect, useState } from "react";
import { TransactionContext } from "../context/TransactionProvider";
import { Transaction } from "./Transaction";
export const Home = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <main className="flex flex-wrap  ml-0  p-6 overflow-x-auto overflow-y-auto x-auto">
      <div className="flex flex-wrap md:flex-row  justify-center md:items-start md:justify-start w-full items-center gap-5  md:h-[850px]">
        {transactions.length === 0 ? (
          <p>No transactions</p>
        ) : (
          transactions.map((data, id) => <Transaction key={id} {...data} />)
        )}
      </div>
    </main>
  );
};
