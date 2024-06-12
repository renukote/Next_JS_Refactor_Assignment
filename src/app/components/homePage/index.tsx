import React from "react";
import HeadingText from "../heading";
import icon1 from "../../../../public/Icon.png";
import icon2 from "../../../../public/Frame 1321314690_1.png";
import icon3 from "../../../../public/server-01.png";
import icon4 from "../../../../public/target-05.png";
import icon5 from "../../../../public/Frame 1321314691.png";
import icon6 from "../../../../public/percent-03.png";
import icon7 from "../../../../public/cpu-chip-01.png";
import icon8 from "../../../../public/cube-01.png";
import CustomCard from "../customCard";

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
          <CustomCard
            title={"dolor sit"}
            paragraph="Lorem ipsum dolor sit amet consectetur. In nibh nam vel lacus sit.
              Neque venenatis mattis est nibh sed quis vel quis eu. In tincidunt
              faucibus aliquet quis sed sed. Phasellus non at lacus convallis
              elementum. Suspendisse tincidunt congue sem turpis. Nulla eu lorem
              cras leo."
            icon={icon1}
          />
          <CustomCard
            title={"Lorem ipsum dolor sit"}
            paragraph="Dolor adipiscing condimentum aliquam nullam mauris ante ipsum vel
          nisl. Dignissim molestie amet purus felis egestas amet eget.
          Viverra malesuada ultricies nunc vel diam posuere mauris sociis
          maecenas. Aenean dui et nec ultrices libero lacus."
            icon={icon3}
          />
          <CustomCard
            headImage={icon2}
            title={"Lorem ipsum dolor sit"}
            paragraph=" Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit."
            icon={icon4}
          />
          <CustomCard
            title={"Lorem ipsum"}
            paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
            icon={icon6}
          />
          <CustomCard
            title={"dolor sit amet"}
            paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
            icon={icon7}
          />
        </div>
        <div className="flex  flex-wrap justify-end mt-4">
          <CustomCard headImage={icon5} />
          <CustomCard
            title={"Lorem ipsum dolor"}
            paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
            icon={icon8}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
