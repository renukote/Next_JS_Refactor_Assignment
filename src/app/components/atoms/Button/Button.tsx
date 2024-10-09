import React, { ReactNode } from "react";
import clsx from "clsx";

export interface ButtonProps {
  additionalButtonClassNames?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Button = ({
  additionalButtonClassNames,
  children,
  onClick,
}: ButtonProps) => {
  const buttonClassNames = clsx("outline-none", {
    [additionalButtonClassNames as string]: !!additionalButtonClassNames,
  });

  return (
    <button onClick={onClick} className={buttonClassNames}>
      {children}
    </button>
  );
};
