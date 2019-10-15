import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import UserProfile from "../components/UserProfile";

describe("UserProfile", () => {
  it("renders the component", () => {
    const { container } = render(<UserProfile />);
    expect(container).toBeTruthy();
  });

  it("should show the summary component", () => {
    const { getByTestId } = render(<UserProfile />);
    expect(getByTestId("summary")).toBeInTheDocument();
  });
});
