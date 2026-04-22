import { render, screen } from "@testing-library/react";
import Section from "../app/components/Section";

describe("Section", () => {
  it("renders children", () => {
    render(<Section id="test"><p>Child content</p></Section>);
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("sets the section id", () => {
    render(<Section id="my-section"><span>content</span></Section>);
    expect(document.getElementById("my-section")).toBeInTheDocument();
  });

  it("renders eyebrow text when provided", () => {
    render(
      <Section id="test" eyebrow="About Me">
        <span />
      </Section>
    );
    expect(screen.getByText("About Me")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(
      <Section id="test" title="My Title">
        <span />
      </Section>
    );
    expect(screen.getByRole("heading", { name: "My Title" })).toBeInTheDocument();
  });

  it("renders subtitle when provided", () => {
    render(
      <Section id="test" subtitle="A subtitle here">
        <span />
      </Section>
    );
    expect(screen.getByText("A subtitle here")).toBeInTheDocument();
  });

  it("does not render the header element when no eyebrow, title, or subtitle is provided", () => {
    const { container } = render(
      <Section id="test">
        <span />
      </Section>
    );
    expect(container.querySelector("header")).not.toBeInTheDocument();
  });

  it("applies extra className to the section", () => {
    const { container } = render(
      <Section id="test" className="bg-zinc-900">
        <span />
      </Section>
    );
    expect(container.querySelector("section")).toHaveClass("bg-zinc-900");
  });
});
