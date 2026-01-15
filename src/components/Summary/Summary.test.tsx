import { render, screen } from "@testing-library/react";
import { Summary } from "./Summary";

describe("Summary Component", () => {
  it("має відображати заголовок або текст", () => {
    render(<Summary />);

    const element = screen.getByText(/Total/i);
    expect(element).toBeInTheDocument();
  });
});
