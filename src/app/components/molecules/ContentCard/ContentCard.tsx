import React from "react";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { Image } from "../../atoms/Image/Image";
import { Heading } from "../../atoms/Heading/Heading";

export interface ContentCardProps {
  headImage?: string | StaticImageData;
  icon?: string | StaticImageData;
  paragraph?: string;
  title?: string;
}

export const ContentCard = ({
  headImage,
  icon,
  paragraph,
  title,
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
