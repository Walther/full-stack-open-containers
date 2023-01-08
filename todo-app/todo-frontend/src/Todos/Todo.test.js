import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Todo from "./Todo";

test("renders content", () => {
  const todo = {
    text: "Testing",
    done: false,
  };

  render(<Todo todo={todo} />);

  const element = screen.getByText("Testing");
  expect(element).toBeDefined();
});
