import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Home } from "./Home";
import { TransactionContext } from "../context/TransactionProvider";

jest.mock("../components/SearchBar", () => ({
  SearchBar: () => <div data-testid="mock-search-bar" />,
}));

jest.mock("../components/SortingDropDown", () => ({
  SortingDropDown: () => <div data-testid="mock-sorting-dropdown" />,
}));

jest.mock("../components/Transaction", () => ({
  Transaction: (props) => (
    <div data-testid="mock-transaction">{props.title}</div>
  ),
}));

const mockTransactions = [
  {
    title: "Spotify",
    value: 100,
    createdAt: "2023-01-01T00:00:00.000Z",
  },
  {
    title: "Netflix",
    value: 1000,
    createdAt: "2023-02-01T00:00:00.000Z",
  },
];

describe("Home component", () => {
  it("renders SearchBar, SortingDropDown and Transactions", () => {
    render(
      <TransactionContext.Provider value={{ transactions: mockTransactions }}>
        <Home />
      </TransactionContext.Provider>
    );

    expect(screen.getByTestId("mock-search-bar")).toBeInTheDocument();
    expect(screen.getByTestId("mock-sorting-dropdown")).toBeInTheDocument();

    const transactions = screen.getAllByTestId("mock-transaction");
    expect(transactions).toHaveLength(2);

    expect(screen.getByText("Total Amount: $1100.00")).toBeInTheDocument();
  });

  it("displays 'No transactions found' when there are no transactions", () => {
    render(
      <TransactionContext.Provider value={{ transactions: [] }}>
        <Home />
      </TransactionContext.Provider>
    );

    expect(screen.getByText("No transactions found")).toBeInTheDocument();
    expect(screen.getByText("Total Amount: $0.00")).toBeInTheDocument();
  });
});
