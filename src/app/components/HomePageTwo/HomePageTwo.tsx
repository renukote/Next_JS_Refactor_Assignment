import React from "react";
import HeadingText from "../Heading/Heading";
import CustomCard from "../CustomCard/CustomCard";
import { cardDataFour, cardDataThree } from "@/app/utils/constants";

const HomePageTwo = () => {
  return (
    <>
      <div
        className="container mx-auto p-4 pt-[80px] xl:pt-[40px]  md:w-3/4 lg:w-3/4 xl:w-2/2"
        id="dolor">
        <div className="pt-[80px] pb-[60px] w-full sm:w-[60%]">
          <HeadingText title="lorem ipsum dolor set" />
        </div>
        <div className="flex  flex-wrap">
        {cardDataThree.map((item, index) => (
            <CustomCard key={index} {...item} />
          ))}
        </div>
        <div className="flex  flex-wrap justify-end mt-4">
        {cardDataFour.map((item, index) => (
            <CustomCard key={index} {...item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePageTwo;
