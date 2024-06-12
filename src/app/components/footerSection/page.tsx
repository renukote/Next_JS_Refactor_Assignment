"use client";
import React, {useState} from "react";

import Image from "next/image";
import Plus from "../../../../public/Frame 1321314700.png";
import Minus from "../../../../public/Frame 1321314700 (1).png";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? -1 : index);
  };

  return (
    <footer className="lg:mt-[4rem] lg:pb-[10rem] ">
      {[1, 2, 3, 4, 5].map((_, index) => (
        <div key={index}>
          <div className="rounded p-2 pb-2">
            <div
              className="relative h-[45px] cursor-pointer"
              onClick={() => toggleTab(index)}
              style={{
                background:
                  activeTab === index
                    ? `linear-gradient(90deg, rgba(89,62,91,1) 9%, rgba(25,178,113,1) 62%)`
                    : "",
              }}>
              <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
                <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem] font-medium">
                  Lorem ipsum dolor sit amet
                </p>
                <button className="text-left text-white font-semibold focus:outline-none">
                  <Image
                    alt="plus-icon"
                    src={activeTab === index ? Minus : Plus}
                  />
                </button>
              </div>
            </div>

            {activeTab === index && (
              <p className="container mx-auto max-w-[1237px] px-5  leading-7 mt-5 text-[#a1a1a1]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            )}
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
