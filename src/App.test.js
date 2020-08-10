import React from "react";
import { render, getByText } from "@testing-library/react";
import App from "./App";

test("Render Node", () => {
  const { container } = render(<App />);
  const text = getByText(container, "CEO");
  expect(text).toBeInTheDocument();
});
