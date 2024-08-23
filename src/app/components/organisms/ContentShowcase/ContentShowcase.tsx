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
    <div className="container mx-auto p-4 pt-[80px] xl:pt-[40px]  md:w-3/4 lg:w-3/4 xl:w-2/2">
      <div className="pt-[80px] pb-[60px] w-full sm:w-[60%]">
        <Heading text={headingText} />
      </div>

      <div className="flex  flex-wrap">
        {topCardDataSet.map((item, index) => (
          <ContentCard key={index} {...item} />
        ))}
      </div>

      <div className="flex  flex-wrap justify-end mt-4">
        {bottomCardDataSet.map((item, index) => (
          <ContentCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
