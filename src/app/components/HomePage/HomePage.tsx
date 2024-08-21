import React from "react";
import HeadingText from "../Heading/Heading";
import CustomCard from "../CustomCard/CustomCard";
import {cardDataOne, cardDataTwo} from "@/app/utils/constants" 

const HomePage = () => {
  return (
    <>
      <div
        className="container mx-auto p-4 pt-[80px] xl:pt-[40px]  md:w-3/4 lg:w-3/4 xl:w-2/2"
        id="home">
        <div className="pb-[60px]">
          <HeadingText title="lorem ipsum" />
        </div>
        <div className="flex  flex-wrap">
        {cardDataOne.map((item, index) => (
            <CustomCard key={index} {...item} />
          ))}
        </div>
        <div className="flex  flex-wrap justify-end mt-4">
        {cardDataTwo.map((item, index) => (
            <CustomCard key={index} {...item} />
          ))}
         
        </div>
      </div>
    </>
  );
};

export default HomePage;
