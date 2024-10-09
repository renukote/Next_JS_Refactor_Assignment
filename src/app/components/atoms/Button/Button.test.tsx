import "@testing-library/jest-dom";
import { Button, ButtonProps } from "./Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultProps = {
	children: "click me"
};

describe("Button", () => {
  const renderButton = (additionalProps?: Partial<ButtonProps>) => {
    render(<Button {...defaultProps} {...additionalProps} />);
  };

  it("renders the children correctly", () => {
    renderButton();
    expect(
      screen.getByRole("button", { name: /click me/i }),
    ).toBeInTheDocument();
  });

  it("applies additional class names correctly", () => {
    renderButton({ additionalButtonClassNames: "bg-blue-500" });
    expect(screen.getByRole("button", { name: /click me/i })).toHaveClass(
      "bg-blue-500",
    );
  });

  it("calls onClick handler when clicked", async () => {
    const onClickMock = jest.fn();
    renderButton({ onClick: onClickMock });
    await userEvent.click(screen.getByRole("button", { name: /click me/i }));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
