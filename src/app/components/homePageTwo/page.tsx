import React from "react";
import HeadingText from "../heading/page";
import icon1 from "../../../../public/shield-tick.png";
import icon2 from "../../../../public/Icon_2.png";
import icon3 from "../../../../public/Frame 1321314690.png";
import icon4 from "../../../../public/bar-chart-circle-01.png";

import CustomCard from "../customCard/page";

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
          <CustomCard
            title={"Lorem ipsum dolor"}
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            icon={icon1}
          />
          <CustomCard
            title={"dolor sit amet"}
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            icon={icon2}
          />
        </div>
        <div className="flex  flex-wrap justify-end mt-4">
          <CustomCard headImage={icon3} />
          <CustomCard
            title={"Lorem ipsum"}
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            icon={icon4}
          />
        </div>
      </div>
    </>
  );
};

export default HomePageTwo;
