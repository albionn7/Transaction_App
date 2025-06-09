import React from "react";

interface MySortingDropDownProps {
  sorting: string;
  setSorting: (value: string) => void;
}

export const SortingDropDown = ({
  sorting,
  setSorting,
}: MySortingDropDownProps) => {
  const sortingHandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSorting(e.target.value);
  };

  return (
    <div className="flex  justify-center text-center rounded-full">
      <label className="flex  md:flex-row flex-col justify-center items-center py-2 md:gap-3">
        Sort Transactions:
        <select
          name="sorting"
          value={sorting}
          onChange={sortingHandleChange}
          className="p-2 w-[140px] md:w-[100px] md:mr-10 "
        >
          <option value="default">Default</option>
          <option value="highest">Highest amount</option>
          <option value="lowest">Lowest amount</option>
          <option value="latest">Latest first</option>
          <option value="oldest">Oldest first</option>
        </select>
      </label>
    </div>
  );
};
