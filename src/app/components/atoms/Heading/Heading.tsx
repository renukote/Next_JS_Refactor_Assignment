import React from "react";

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
  const headingFontSize =
    viewType === "small" ? "text-2xl" : "text-5xl sm:text-7xl";

  return (
    <Tag
      className={`font-semibold uppercase leading-none text-white ${headingFontSize} ${additionalClassNames}`}
    >
      {text}
    </Tag>
  );
};
