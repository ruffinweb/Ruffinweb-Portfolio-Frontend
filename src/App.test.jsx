import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App.jsx";

// Basic test to confirm the test script works.
test("renders elijah ruffin title text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Elijah Ruffin/i);
  expect(linkElement).toBeInTheDocument();
});
