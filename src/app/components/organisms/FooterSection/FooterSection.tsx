"use client";

import { useState } from "react";
import { tabData } from "@/app/data/allPageData";
import { AccordionTab } from "../../molecules/AccordionTab/AccordionTab";

export const Footer = () => {
  const [activeTab, setActiveTab] = useState<number | null>(0);

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <footer className="lg:mt-16 lg:pb-40">
      {tabData.map(({ title, content }, index) => (
        <AccordionTab
          title={title}
          key={title}
          content={content}
          index={index}
          onClickCallback={toggleTab}
          isActive={activeTab === index}
        />
      ))}
    </footer>
  );
};
