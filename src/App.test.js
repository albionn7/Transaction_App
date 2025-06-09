import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import { Home } from "./pages/Home";
import { TransactionContext } from "./context/TransactionProvider";

test("it renders without error", () => {
  const mockContext = {
    transactions: [],
    addTransaction: jest.fn(),
  };

  render(
    <TransactionContext.Provider value={mockContext}>
      <Home />
    </TransactionContext.Provider>
  );

  const heading = screen.getByText(/hello/i);
  expect(heading).toBeInTheDocument();
});
