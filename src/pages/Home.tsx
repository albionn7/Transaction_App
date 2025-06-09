import React, { useState } from "react";
import { useTransaction } from "../context/TransactionProvider";
import { Transaction } from "../components/Transaction";
import { SearchBar } from "../components/SearchBar";
import { SortingDropDown } from "../components/SortingDropDown";

export const Home = () => {
  const [sorting, setSorting] = useState("defualt");
  const [searchedTask, setSearchedTask] = useState("");
  const { transactions } = useTransaction();

  const filteredTask = transactions.filter((t) =>
    t.title.toLowerCase().includes(searchedTask.toLowerCase())
  );
  const soartedTaksks = [...filteredTask].sort((a, b) => {
    if (sorting === "highest") return Number(b.value) - Number(a.value);
    if (sorting === "lowest") return Number(a.value) - Number(b.value);
    if (sorting === "latest")
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    if (sorting === "oldest")
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    return 0;
  });
  console.log(soartedTaksks);
  const getTotalValue = () => {
    let totalAmount = 0;
    soartedTaksks.map((item) => {
      totalAmount += parseInt(item.value);
    });
    if (totalAmount === 0) {
      return <div>Total Amount: $0.00</div>;
    } else {
      return <div>Total Amount: ${totalAmount}.00</div>;
    }
  };
  return (
    <>
      <div className="flex md:w-3/5 flex-col md:flex-row   md:justify-start justify-center  items-center  md:ml-4 md:gap-10  bg-gray-300 md:rounded-full rounded-2xl py-3 md:py-0 ">
        <SearchBar
          searchedTask={searchedTask}
          setSearchedTask={setSearchedTask}
        />
        <SortingDropDown sorting={sorting} setSorting={setSorting} />
        <div>{getTotalValue()}</div>
      </div>
      hello
      <main className="flex flex-wrap  ml-0  p-6 overflow-x-auto overflow-y-auto x-auto">
        <div className="flex flex-wrap md:flex-row  justify-center md:items-start md:justify-start w-full items-center gap-5  md:h-[850px]">
          {soartedTaksks.length === 0 ? (
            <p>No transactions found</p>
          ) : (
            soartedTaksks.map((data, id) => <Transaction key={id} {...data} />)
          )}
        </div>
      </main>
    </>
  );
};
