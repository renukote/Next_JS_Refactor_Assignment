import React from "react";
import { Heading, HeadingProps } from "../../atoms/Heading/Heading";
import {
  ContentCard,
  ContentCardProps,
} from "../../molecules/ContentCard/ContentCard";

interface ContentShowcaseProps {
  bottomCardDataSet: ContentCardProps[];
  headingText: string;
  topCardDataSet: ContentCardProps[];
  titleHeadingType?: HeadingProps["tagType"];
  contentHeadingType?: HeadingProps["tagType"];
}

export const ContentShowcase = ({
  bottomCardDataSet,
  headingText,
  topCardDataSet,
  titleHeadingType,
  contentHeadingType,
}: ContentShowcaseProps) => {
  return (
    <section className="xl:w-2/2 container mx-auto p-4 pt-20 md:w-3/4 lg:w-3/4 xl:pt-10">
      <div className="w-full pb-16 pt-20 sm:w-3/5">
        <Heading text={headingText} tagType={titleHeadingType || "h4"} />
      </div>

      <div className="flex flex-wrap">
        {topCardDataSet.map((content) => (
          <ContentCard
            key={content.title}
            {...content}
            headingType={contentHeadingType || "h5"}
          />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap justify-end">
        {bottomCardDataSet.map((content) => (
          <ContentCard
            key={content.title}
            {...content}
            headingType={contentHeadingType || "h5"}
          />
        ))}
      </div>
    </section>
  );
};
