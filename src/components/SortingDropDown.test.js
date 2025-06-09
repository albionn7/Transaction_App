import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SortingDropDown } from "./SortingDropDown";

describe("SortingDropDown", () => {
  test("renders dropdown with correct default value", () => {
    render(<SortingDropDown sorting="default" setSorting={() => {}} />);
    const selectElement = screen.getByRole("combobox");
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveValue("default");
  });

  test("displays all sorting options", () => {
    render(<SortingDropDown sorting="default" setSorting={() => {}} />);
    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(5);
    expect(options.map((opt) => opt.textContent)).toEqual([
      "Default",
      "Highest amount",
      "Lowest amount",
      "Latest first",
      "Oldest first",
    ]);
  });

  test("calls setSorting on selection change", () => {
    const mockSetSorting = jest.fn();
    render(<SortingDropDown sorting="default" setSorting={mockSetSorting} />);
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "highest" } });
    expect(mockSetSorting).toHaveBeenCalledWith("highest");
  });
});
