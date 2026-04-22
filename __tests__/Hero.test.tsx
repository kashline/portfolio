import { render, screen } from "@testing-library/react";
import Hero from "../app/sections/Hero";

describe("Hero", () => {
  it("renders the hero heading with the name", () => {
    render(<Hero />);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
    expect(screen.getByText(/Kevin Ashline/)).toBeInTheDocument();
  });

  it("renders the tagline text", () => {
    render(<Hero />);
    expect(screen.getByText(/Full-Stack Engineer/i)).toBeInTheDocument();
  });

  it("renders the 'View projects' CTA link pointing to #projects", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /view projects/i });
    expect(link).toHaveAttribute("href", "#projects");
  });

  it("renders the 'Get in touch' CTA link pointing to #contact", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /get in touch/i });
    expect(link).toHaveAttribute("href", "#contact");
  });
});
