import React from "react";
import { Heading } from "../../atoms/Heading/Heading";
import {
  ContentCard,
  ContentCardProps,
} from "../../molecules/ContentCard/ContentCard";

interface ContentShowcaseProps {
  bottomCardDataSet: ContentCardProps[];
  headingText: string;
  topCardDataSet: ContentCardProps[];
}

export const ContentShowcase = ({
  bottomCardDataSet,
  headingText,
  topCardDataSet,
}: ContentShowcaseProps) => {
  return (
    <div className="xl:w-2/2 container mx-auto p-4 pt-[80px] md:w-3/4 lg:w-3/4 xl:pt-[40px]">
      <div className="w-full pb-[60px] pt-[80px] sm:w-[60%]">
        <Heading text={headingText} />
      </div>

      <div className="flex flex-wrap">
        {topCardDataSet.map((item, index) => (
          <ContentCard key={index} {...item} />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap justify-end">
        {bottomCardDataSet.map((item, index) => (
          <ContentCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
