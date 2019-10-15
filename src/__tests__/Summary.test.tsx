import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import Summary from "../components/summary/Summary";

describe("Summary", () => {
  it("should show image and all details", () => {
    const { getByTestId } = render(<Summary />);
    expect(getByTestId("user-image")).toBeInTheDocument();
    expect(getByTestId("user-name")).toBeInTheDocument();
    expect(getByTestId("user-title")).toBeInTheDocument();
    expect(getByTestId("user-location")).toBeInTheDocument();
    expect(getByTestId("user-days-since-joining")).toBeInTheDocument();
  });
});
