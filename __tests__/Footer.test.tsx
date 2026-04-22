import { render, screen } from "@testing-library/react";
import Footer from "../app/components/Footer";

describe("Footer", () => {
  it("renders the current year in the copyright notice", () => {
    render(<Footer />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it("renders the GitHub link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /github/i });
    expect(link).toHaveAttribute("href", "https://github.com/kashline");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the LinkedIn link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /linkedin/i });
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/kevin-ashline/"
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders the email link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /email/i });
    expect(link).toHaveAttribute("href", "mailto:kevin.ashline92@gmail.com");
  });
});
