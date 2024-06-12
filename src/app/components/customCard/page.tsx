import Image from "next/image";
import React from "react";

interface CustomCardProps {
  title?: string;
  paragraph?: string;
  icon?: any;
  headImage?: any;
}

const CustomCard = (props: Partial<CustomCardProps>) => {
  const {title, paragraph, icon, headImage} = props;
  return (
    <div className="w-full sm:w-1/3 md:w-1/3 lg:w-1/3 xl:w-1/3 flex flex-col gap-5 mb-4 pr-4">
      {headImage && <Image alt="No image" src={headImage} />}

      <div>
        {title && (
          <h1 className="text-white text-[24px] font-[600] uppercase">
            {title}
          </h1>
        )}
        {paragraph && (
          <p className="opacity-[70%] leading-relaxed  ">{paragraph}</p>
        )}
      </div>
      {icon && <Image alt="No image" src={icon} />}
    </div>
  );
};

export default CustomCard;
