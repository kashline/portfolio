import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "../app/components/Nav";

// IntersectionObserver is not available in jsdom
const mockObserve = jest.fn();
const mockDisconnect = jest.fn();

beforeAll(() => {
  global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: mockObserve,
    disconnect: mockDisconnect,
    unobserve: jest.fn(),
  }));
});

describe("Nav", () => {
  it("renders the brand link", () => {
    render(<Nav />);
    const brand = screen.getByRole("link", { name: /kevin ashline/i });
    expect(brand).toHaveAttribute("href", "#top");
  });

  it("renders all navigation links on desktop", () => {
    render(<Nav />);
    const expectedLinks = [
      { name: /about/i, href: "#about" },
      { name: /skills/i, href: "#skills" },
      { name: /projects/i, href: "#projects" },
      { name: /experience/i, href: "#experience" },
      { name: /education/i, href: "#education" },
      { name: /contact/i, href: "#contact" },
    ];
    for (const { name, href } of expectedLinks) {
      const links = screen.getAllByRole("link", { name });
      expect(links.length).toBeGreaterThan(0);
      expect(links[0]).toHaveAttribute("href", href);
    }
  });

  it("renders the mobile menu toggle button", () => {
    render(<Nav />);
    expect(
      screen.getByRole("button", { name: /toggle menu/i })
    ).toBeInTheDocument();
  });

  it("toggles aria-expanded on the mobile menu button when clicked", async () => {
    const user = userEvent.setup();
    render(<Nav />);
    const button = screen.getByRole("button", { name: /toggle menu/i });
    expect(button).toHaveAttribute("aria-expanded", "false");
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
    await user.click(button);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });
});
