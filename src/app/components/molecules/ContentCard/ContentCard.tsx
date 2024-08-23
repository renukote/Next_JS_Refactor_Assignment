import React from "react";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { Image } from "../../atoms/Image/Image";
import { Heading } from "../../atoms/Heading/Heading";

export interface ContentCardProps {
  title?: string;
  paragraph?: string;
  icon?: string | StaticImageData;
  headImage?: string | StaticImageData;
}

export const ContentCard = ({
  title,
  paragraph,
  icon,
  headImage,
}: ContentCardProps) => {
  return (
    <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col gap-5 mb-4 pr-4">
      {headImage && <Image alt="No image" src={headImage} />}

      {title && <Heading tagType="h1" text={title} viewType="small" />}

      {paragraph && (
        <p className="opacity-[70%] leading-relaxed">{paragraph}</p>
      )}

      {icon && <Image alt="Icon" src={icon} />}
    </div>
  );
};
