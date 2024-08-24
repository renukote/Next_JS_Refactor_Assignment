import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button, ButtonProps } from "./Button";

describe("Button", () => {
  const renderButton = (additionalProps?: Partial<ButtonProps>) => {
    render(<Button {...additionalProps}>click me</Button>);
  };

  it("renders the children correctly", () => {
    renderButton();
    expect(
      screen.getByRole("button", { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it("renders with default class names", () => {
    renderButton();
    expect(screen.getByRole("button", { name: /click me/i })).toHaveClass(
      "outline-none",
    );
  });

  it("applies additional class names correctly", () => {
    renderButton({ additionalButtonClassNames: "bg-blue-500" });
    expect(screen.getByRole("button", { name: /click me/i })).toHaveClass(
      "bg-blue-500",
    );
  });

  it("calls onClick handler when clicked", async () => {
    const handleClick = jest.fn();
    renderButton({ onClick: handleClick });
    await userEvent.click(screen.getByRole("button", { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
