import React from "react";
import clsx from "clsx";

export interface HeadingProps {
  additionalClassNames?: string;
  tagType?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  viewType?: "small" | "large";
}

export const Heading = ({
  additionalClassNames,
  tagType: Tag = "h1",
  text,
  viewType = "large",
}: HeadingProps) => {
  const headingClassNames = clsx(
    "font-semibold uppercase leading-none text-white text-5xl sm:text-7xl",
    {
      "text-2xl sm:text-2xl": viewType === "small",
      [additionalClassNames as string]: !!additionalClassNames,
    },
  );

  return <Tag className={headingClassNames}>{text}</Tag>;
};
