import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Heading, HeadingProps } from "./Heading";

describe("Heading", () => {
  const renderHeading = (additionalProps?: Partial<HeadingProps>) => {
    render(<Heading {...additionalProps} text="Sample Heading" />);
  };

  it("renders the text correctly", () => {
    renderHeading();
    expect(
      screen.getByRole("heading", { name: /sample heading/i }),
    ).toBeInTheDocument();
  });

  it("renders with default tag type 'h1'", () => {
    renderHeading();
    expect(
      screen.getByRole("heading", { name: /sample heading/i }).tagName,
    ).toBe("H1");
  });

  it("renders with specified tag type", () => {
    renderHeading({ tagType: "h3" });
    expect(
      screen.getByRole("heading", { name: /sample heading/i }).tagName,
    ).toBe("H3");
  });

  it("applies additional class names correctly", () => {
    renderHeading({ additionalClassNames: "text-red-500" });
    expect(
      screen.getByRole("heading", { name: /sample heading/i }),
    ).toHaveClass("text-red-500");
  });

  it("applies the correct font size for large view type", () => {
    renderHeading({ viewType: "large" });
    expect(
      screen.getByRole("heading", { name: /sample heading/i }),
    ).toHaveClass("text-[50px]");
  });

  it("applies the correct font size for small view type", () => {
    renderHeading({ viewType: "small" });
    expect(
      screen.getByRole("heading", { name: /sample heading/i }),
    ).toHaveClass("text-[24px]");
  });
});
