import React from "react";
import { AboutUs } from "./components/organisms/AboutUs/AboutUs";
import { ContentShowcase } from "./components/organisms/ContentShowcase/ContentShowcase";
import { Slider } from "./components/organisms/Slider/Slider";
import {
  cardFourData,
  cardOneData,
  cardThreeData,
  cardTwoData,
} from "./data/allPageData";

export default function Home() {
  return (
    <>
      <ContentShowcase
        headingText="Lorem ipsum"
        topCardDataSet={cardOneData}
        bottomCardDataSet={cardTwoData}
        titleHeadingType="h1"
        contentHeadingType="h2"
      />
      <AboutUs />
      <Slider />
      <ContentShowcase
        headingText="Lorem ipsum dolor set"
        topCardDataSet={cardThreeData}
        bottomCardDataSet={cardFourData}
      />
    </>
  );
}
