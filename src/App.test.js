import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders contact buttons with mailto href", () => {
    render(<App />);
    const scheduleBtn = screen.getByRole("link", {
      name: /schedule discussion/i,
    });
    expect(scheduleBtn).toHaveAttribute("href");
    expect(scheduleBtn.getAttribute("href")).toMatch(/^mailto:/);

    const floatingBtn = screen.getByRole("link", {
      name: /open email to contact sango/i,
    });
    expect(floatingBtn).toHaveAttribute("href");
    expect(floatingBtn.getAttribute("href")).toMatch(/^mailto:/);
  });
});
