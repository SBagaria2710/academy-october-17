import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("initial state check", () => {
  // Rendering the component in isolation
  render(<Counter />);

  // Select elements
  const countText = screen.getByText("Count is 0");
  const plusText = screen.getByText("+");
  const minusText = screen.getByText("-");

  // Verification
  expect(countText).toBeInTheDocument();
  expect(plusText).toBeInTheDocument();
  expect(minusText).toBeInTheDocument();
});

test("Increment by 1", () => {
  render(<Counter />);

  const plusText = screen.getByText("+");
  fireEvent.click(plusText);

  const isOnePresent = screen.getByText("Count is 1");
  expect(isOnePresent).toBeInTheDocument();
});

test("Decrement by 2", () => {
  render(<Counter />);

  const minusText = screen.getByText("-");
  fireEvent.click(minusText);
  fireEvent.click(minusText);

  const isMinusTwoPresent = screen.getByText("Count is -2");
  expect(isMinusTwoPresent).toBeInTheDocument();
});
