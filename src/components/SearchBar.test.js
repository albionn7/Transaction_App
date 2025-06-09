import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from "./SearchBar";

test("renders search bar without error", () => {
  const mockSetSearchedTask = jest.fn();
  render(<SearchBar searchedTask="" setSearchedTask={mockSetSearchedTask} />);

  const searchBarField = screen.getByTestId("search-bar");
  expect(searchBarField).toBeInTheDocument();
});

test("calls setSearchedTask on input change", () => {
  const mockSetSearchedTask = jest.fn();
  render(<SearchBar searchedTask="" setSearchedTask={mockSetSearchedTask} />);

  const input = screen.getByPlaceholderText("Search for Transactions...");
  fireEvent.change(input, { target: { value: "test" } });

  expect(mockSetSearchedTask).toHaveBeenCalledWith("test");
});
