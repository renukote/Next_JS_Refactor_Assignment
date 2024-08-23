import React, { ReactNode } from "react";

interface ButtonProps {
  additionalButtonClassNames?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  additionalButtonClassNames,
  children,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`outline-none ${additionalButtonClassNames}`}
    >
      {children}
    </button>
  );
};
