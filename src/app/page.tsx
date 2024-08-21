import { AboutUs } from "./components/AboutUs/AboutUs";
import { ContentShowcase } from "./components/ContentShowcase/ContentShowcase";
import { Slider } from "./components/Slider/Slider";
import {
  cardDataFour,
  cardDataOne,
  cardDataThree,
  cardDataTwo,
} from "./utils/constants";

export default function Home() {
  return (
    <>
      <ContentShowcase
        headingText="Lorem ipsum"
        topCardDataSet={cardDataOne}
        bottomCardDataSet={cardDataTwo}
      />
      <AboutUs />
      <Slider />
      <ContentShowcase
        headingText="Lorem ipsum dolor set"
        topCardDataSet={cardDataThree}
        bottomCardDataSet={cardDataFour}
      />
    </>
  );
}
