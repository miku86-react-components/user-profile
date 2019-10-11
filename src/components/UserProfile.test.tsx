import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import UserProfile from "./UserProfile";

it("renders the expected content", () => {
  const { container } = render(<UserProfile />);
  expect(container).toBeTruthy();
});
