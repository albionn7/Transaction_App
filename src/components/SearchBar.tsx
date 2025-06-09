import React from "react";

interface MySearchBarProps {
  setSearchedTask: (value: string) => void;
  searchedTask: string;
}

export const SearchBar = ({
  setSearchedTask,
  searchedTask,
}: MySearchBarProps) => {
  const handleSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchedTask(value);
  };

  return (
    <div className="p-2 rounded-3xl" data-testid="search-bar">
      <input
        type="text"
        value={searchedTask}
        onChange={handleSearchBar}
        placeholder="Search for Transactions..."
        className="w-full bg-white p-4 rounded-full"
      />
    </div>
  );
};
