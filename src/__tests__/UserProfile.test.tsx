import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import UserProfile from "../components/UserProfile";

describe("UserProfile", () => {
  it("renders the component", () => {
    const { container } = render(<UserProfile />);
    expect(container).toBeTruthy();
  });

  describe("summary", () => {
    it("should show the summary container", () => {
      const { getByTestId } = render(<UserProfile />);
      expect(getByTestId("summary")).toBeInTheDocument();
    });

    it("should show image, name, title, streak, location and join date", () => {
      const { getByTestId } = render(<UserProfile />);
      expect(getByTestId("user-image")).toBeInTheDocument();
      expect(getByTestId("user-name")).toBeInTheDocument();
      expect(getByTestId("user-title")).toBeInTheDocument();
      expect(getByTestId("user-streak")).toBeInTheDocument();
      expect(getByTestId("user-location")).toBeInTheDocument();
      expect(getByTestId("user-joindate")).toBeInTheDocument();
    });
  });
});
