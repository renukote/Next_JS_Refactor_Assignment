import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface ContentCardProps {
  title?: string;
  paragraph?: string;
  icon?: string | StaticImport;
  headImage?: string | StaticImport;
}

export const ContentCard = ({
  title,
  paragraph,
  icon,
  headImage,
}: Partial<ContentCardProps>) => {
  return (
    <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col gap-5 mb-4 pr-4">
      {headImage && <Image alt="No image" src={headImage} />}

      {title && (
        <h1 className="text-white text-[24px] font-[600] uppercase">{title}</h1>
      )}
      {paragraph && (
        <p className="opacity-[70%] leading-relaxed">{paragraph}</p>
      )}

      {icon && <Image alt="Icon" src={icon} />}
    </div>
  );
};
