"use client";

import { useState } from "react";
import Image from "next/image";
import { tabData } from "@/app/data/allPageData";
import { Button } from "../../atoms/Button/Button";

export const Footer = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <footer className="lg:mt-[4rem] lg:pb-[10rem]">
      {tabData.map(({ title, content }, index) => (
        <div key={title} className="rounded p-2 pb-2">
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
            <div className="container relative mx-auto flex h-[48px] max-w-[1237px] items-center justify-between px-5">
              <p className="xs:text-[1rem] font-medium uppercase text-white md:text-[1rem] lg:text-[1.5rem]">
                {title}
              </p>
              <Button additionalButtonClassNames="text-left text-white font-semibold">
                <Image
                  alt="plus-icon"
                  src={
                    activeTab === index
                      ? "/images/minus.png"
                      : "/images/plus.png"
                  }
                  width={20}
                  height={20}
                />
              </Button>
            </div>
          </div>

          {activeTab === index && (
            <p className="container mx-auto mt-5 max-w-[1237px] px-5 leading-7 text-[#a1a1a1]">
              {content}
            </p>
          )}
        </div>
      ))}
    </footer>
  );
};
