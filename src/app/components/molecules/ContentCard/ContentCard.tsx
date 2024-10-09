import React from "react";
import { Heading, HeadingProps } from "../../atoms/Heading/Heading";
import { Image, ImageProps } from "../../atoms/Image/Image";

export interface ContentCardProps {
  headImage?: ImageProps["src"];
  icon?: ImageProps["src"];
  paragraph?: string;
  title?: HeadingProps["text"];
  headingType?: HeadingProps["tagType"];
}

export const ContentCard = ({
  headImage,
  icon,
  paragraph,
  title,
  headingType,
}: ContentCardProps) => {
  return (
    <article className="mb-4 flex w-full flex-col gap-5 pr-4 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
      {headImage && (
        <Image alt="Main image" src={headImage} width={400} height={400} />
      )}

      {title && (
        <Heading tagType={headingType || "h2"} text={title} viewType="small" />
      )}

      {paragraph && <p className="leading-relaxed opacity-70">{paragraph}</p>}

      {icon && <Image alt="Icon" src={icon} width={25} height={25} />}
    </article>
  );
};
