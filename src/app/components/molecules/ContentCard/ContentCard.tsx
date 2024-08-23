import React from "react";
import { StaticImageData } from "next/dist/shared/lib/get-img-props";
import { Heading } from "../../atoms/Heading/Heading";
import { Image } from "../../atoms/Image/Image";

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
    <div className="mb-4 flex w-full flex-col gap-5 pr-4 sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3">
      {headImage && <Image alt="No image" src={headImage} />}

      {title && <Heading tagType="h1" text={title} viewType="small" />}

      {paragraph && (
        <p className="leading-relaxed opacity-[70%]">{paragraph}</p>
      )}

      {icon && <Image alt="Icon" src={icon} />}
    </div>
  );
};
