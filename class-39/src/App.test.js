import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("check for four list items", () => {
  render(<App />);
  const listElements = screen.getAllByRole("listitem");
  expect(listElements).toHaveLength(4);
});
