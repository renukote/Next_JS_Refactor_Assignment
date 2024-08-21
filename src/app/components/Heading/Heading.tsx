import React from "react";

interface HeadingProps {
  text: string;
}

export const Heading = ({ text }: HeadingProps) => {
  return (
    <h1 className="text-white text-[50px] sm:text-[80px] font-[600] uppercase leading-none">
      {text}
    </h1>
  );
};
