"use client";
import React, { useState } from "react";
import Image from "next/image";
import { tabData } from "@/app/utils/constants";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };


  return (
    <footer className="lg:mt-[4rem] lg:pb-[10rem] ">
      {tabData.map((tab, index) => (
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
              }}
            >
              <div className="container mx-auto max-w-[1237px] px-5 h-[48px] flex justify-between items-center relative">
                <p className="text-white uppercase lg:text-[1.5rem] md:text-[1rem] xs:text-[1rem] font-medium">
                  {tab.title}
                </p>
                <button className="text-left text-white font-semibold focus:outline-none">
                  <Image
                    alt="plus-icon"
                    src={activeTab === index ? "/images/minus.png" : "/images/plus.png"}
					width={20}
					height={20}
                  />
                </button>
              </div>
            </div>

            {activeTab === index && (
              <p className="container mx-auto max-w-[1237px] px-5  leading-7 mt-5 text-[#a1a1a1]">
                {tab.content}
              </p>
            )}
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;

